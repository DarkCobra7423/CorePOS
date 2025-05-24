import { useEffect, useState } from 'react';
import styled from "styled-components";
import { COLORS } from '../constants/Colors';
import { createSale, getPromotion, getPromotionList } from '../services/SalesService';
import { getArticleUpc } from '../services/ArticleService';
import { pingServer } from '../services/SystemService';

function Sales() {
    const [isFormatted, setIsFormatted] = useState(false); // Para saber si estamos en modo pago
    const [inputEntry, setInputEntry] = useState('');
    const [paymentAmount, setPaymentAmount] = useState(0);  // Monto ingresado
    const [total, setTotal] = useState(0.00); // Total de la venta
    const [change, setChange] = useState(0);  // Monto de cambio

    const [message, setMessage] = useState('');
    const [totalItems, setTotalItems] = useState(4);
    const [store, setStore] = useState("4232");
    const [subtotal, setSubtotal] = useState(0.00);
    const [discount, setDiscount] = useState(0.00);

    const [quantity, setQuantity] = useState(1);
    const [unitPrice, setUnitPrice] = useState(0);
    const [totalPrice, settotalPrice] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState('EFECTIVO');
    const [promotion, setPromotion] = useState(null);
    const [trans, setTrans] = useState('4812');
    const [items, setItems] = useState([]);
    const [currentTime, setCurrentTime] = useState(new Date());
    const [serverStatus, setServerStatus] = useState("Offline");


    const [op, setOp] = useState('0073');
    const [opName, getOpName] = useState('CARLOS D. ANGEL PADILLA');

    const entryUser = async () => {
        // Verifica si la entrada está formateada como un monto de pago
        if (isFormatted) {
            // Extrae solo los números del input y convierte a número flotante
            const payment = parseFloat(inputEntry.replace(/[^0-9.-]+/g, ""));

            // Si el pago es menor al total, muestra mensaje de error
            if (payment < total) {
                setMessage('El pago es insuficiente. Ingresa una cantidad mayor.');
                setChange(0); // Reinicia el cambio
            } else {
                // Si el pago es suficiente, calcula el cambio y procesa la venta
                const calculatedChange = payment - total;
                setChange(calculatedChange); // Guarda el cambio
                handleSubmitSale(); // Llama a la función para registrar la venta
            }
        } else {
            // Si no es un monto de pago, se asume que es un código UPC (código de producto)
            console.log("Procesando UPC: ", inputEntry);

            try {
                // Busca el artículo basado en el código UPC
                const article = await getArticleUpc(inputEntry);

                if (article) {
                    // Verifica si el artículo ya está en la lista de ítems
                    const existingItemIndex = items.findIndex(item => item.upc === article.upc);
                    let promo = null; // Variable para almacenar promociones

                    if (existingItemIndex !== -1) {
                        // Si el artículo ya existe en la lista, actualiza la cantidad
                        const updatedItems = [...items];
                        updatedItems[existingItemIndex].quantity += quantity;

                        const updatedQuantity = updatedItems[existingItemIndex].quantity;

                        // Busca si hay una promoción aplicable
                        promo = await getPromotionList(article.upc, updatedQuantity);

                        const totalSinPromo = updatedQuantity * updatedItems[existingItemIndex].unitPrice;
                        //alert("Promo: "+ totalSinPromo); //182 Total real
                        let totalConPromo = totalSinPromo;
                        let ahorro = 0;

                        if (promo) {
                            // Si hay promoción, calcula el total con descuento
                            totalConPromo = calculateTotalWithPromotion(
                                    updatedQuantity,
                                    updatedItems[existingItemIndex].unitPrice,
                                    promo.buyQuantity,
                                    promo.bundlePrice
                                    );
                            ahorro = totalSinPromo - totalConPromo;
                            //ahorro = totalSinPromo;
                            //alert("Total sin promo: "+totalConPromo);
                            // Actualiza datos de la promoción activa
                            setPromotion({
                                id: promo.id,
                                articleId: promo.article,
                                name: promo.name,
                                buyQuantity: promo.buyQuantity,
                                validity: promo.validity,
                                bundlePrice: promo.bundlePrice,
                            });

                            // Suma el ahorro al descuento total
                            //alert("Ahorro: "+ahorro);
                            setDiscount(prev => prev + ahorro);
                        } else {
                            // Si no hay promoción, limpia cualquier promoción activa
                            setPromotion(null);
                            //setDiscount(0);
                        }

                        // Actualiza el precio total del artículo con/sin promoción
                        //updatedItems[existingItemIndex].totalPrice
                        updatedItems[existingItemIndex].totalPrice = totalConPromo;
                        setItems(updatedItems); // Guarda los ítems actualizados
                    } else {
                        // Si el artículo no está en la lista, agrégalo como nuevo
                        const totalSinPromo = quantity * article.price;
                        let totalConPromo = totalSinPromo;
                        let ahorro = 0;

                        // Busca promociones para la cantidad inicial
                        promo = await getPromotionList(article.upc, quantity);

                        if (promo) {
                            // Calcula el total con promoción si aplica
                            totalConPromo = calculateTotalWithPromotion(
                                    quantity,
                                    article.price,
                                    promo.buyQuantity,
                                    promo.bundlePrice
                                    );
                            ahorro = totalSinPromo - totalConPromo;

                            setPromotion({
                                id: promo.id,
                                articleId: promo.article,
                                name: promo.name,
                                buyQuantity: promo.buyQuantity,
                                validity: promo.validity,
                                bundlePrice: promo.bundlePrice,
                            });
                            
                            alert("Este es el promo: "+promotion);

                            setDiscount(prev => prev + ahorro);
                        } else {
                            setPromotion(null);
                            setDiscount(0);
                        }

                        // Crea el nuevo ítem y lo agrega a la lista
                        const newItem = {
                            upc: article.upc,
                            articleName: article.name,
                            quantity: quantity,
                            unitPrice: article.price,
                            totalPrice: totalConPromo
                        };

                        setItems([...items, newItem]);
                    }
                } else {
                    // Si no se encontró el artículo, muestra mensaje
                    setMessage('Artículo no encontrado.');
                }
            } catch (error) {
                // Muestra error si falla la consulta
                console.error("Error al consultar artículo/promoción:", error);
            }
        }
    };

    function calculateTotalWithPromotion(quantity, unitPrice, buyQuantity, bundlePrice) {
        // Muestra una alerta con los datos de entrada para depuración
        /*alert("Datos para calculateTotalWithPromotion: "+
                " quantity: " + quantity +
                " unitPrice: " + unitPrice +
                " buyQuantity: " + buyQuantity +
                " bundlePrice: " + bundlePrice); */ // (Nota: aquí parece un error: muestra "quantity" en vez de "bundlePrice")

        // Calcula cuántos grupos completos de promoción se pueden formar
        const groups = Math.floor(quantity / buyQuantity);

        // Calcula cuántas unidades no entran en ningún grupo promocional
        const rest = quantity % buyQuantity;

        // Calcula el total de precio para los productos en promoción (precio por grupo * cantidad de grupos)
        const totalPromo = groups * bundlePrice;

        // Calcula el total para los productos restantes a precio normal
        const totalRest = rest * unitPrice;
        
        const descuento = (totalPromo + totalRest);

        // Muestra alerta con los totales parciales para depuración
        //alert("calculateTotalWithPromotion: " + descuento);

        // Retorna la suma del total con promoción y el total de productos restantes
        return totalPromo + totalRest;
    }

    useEffect(() => {
        // Calcular subtotal real sin promoción
        const newSubtotal = items.reduce((acc, item) => acc + (item.unitPrice * item.quantity), 0);

        // Calcula total con descuento aplicado
        const newTotal = newSubtotal - discount;

        setSubtotal(newSubtotal); // <-- ¡esto es lo que faltaba!
        setTotal(newTotal);

    }, [items, discount]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000); // actualiza cada segundo

        return () => clearInterval(interval);
    }, []);

    const formatDate = (date) =>
        date.toLocaleDateString('es-MX', {day: '2-digit', month: '2-digit', year: '2-digit'});

    const formatTime = (date) =>
        date.toLocaleTimeString('es-MX', {hour: '2-digit', minute: '2-digit'});

    useEffect(() => {
        if (unitPrice !== 0 && quantity !== 0) {
            const result = Number((unitPrice * quantity).toFixed(2));
            console.log(`Recalculando totalPrice: ${unitPrice} * ${quantity} = ${result}`);
            settotalPrice(result);
        }
    }, [unitPrice, quantity]);

    useEffect(() => {
        document.body.classList.add('no-scroll');

        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, []);

    const inputChange = (event) => {
        let rawValue = event.target.value.replace(/\D/g, ''); // Eliminar no números

        if (isFormatted) {
            // Si estamos en modo pago, formateamos la entrada
            while (rawValue.length < 9) {
                rawValue = '*' + rawValue;
            }
            const cents = rawValue.slice(-2);
            const intPart = rawValue.slice(0, -2);
            const formattedInt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            const formattedValue = `${formattedInt}.${cents}`;
            setInputEntry(formattedValue);
        } else {
            // Si no estamos en modo pago, simplemente mostramos los números sin formato
            setInputEntry(rawValue);
        }
    };


    const checkServerStatus = async () => {
        const isOnline = await pingServer();
        setServerStatus(isOnline ? "Online" : "Offline");
    };

    useEffect(() => {
        checkServerStatus();
        const interval = setInterval(checkServerStatus, 10000); // cada 10 segundos
        return () => clearInterval(interval);
    }, []);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            entryUser(); // Procesa la entrada al presionar Enter
            setInputEntry('');
        }
        if (e.key === '+') {
            setIsFormatted(!isFormatted); // Cambia entre formato de pago y no pago

        }
    };

    const handleSubmitSale = async () => {

        const saleRequest = {
            op: 1,
            //trans: trans,
            timestamp: new Date().toISOString(),
            items: items, // Usa el array de items
            totalItems: items.length,
            subtotal: subtotal,
            discount: discount,
            promotionId: null,
            total: total,
            paymentMethod: "Efectivo",
            paymentAmount: 700.00,
            storeId: store
        };

        try {
            const result = await createSale(saleRequest);
            console.log("Venta creada:", result);
            alert("Venta registrada correctamente");
        } catch (err) {
            //alert("Ocurrió un error al registrar la venta");
            setMessage('Ocurrió un error al registrar la venta');
        }
    };




    return (
            <FullScreenWrapper>
                <Container>
                    <ContainerPromotion>
                        <AppliedDiscount>UD. AHORRO: {discount.toFixed(2)}</AppliedDiscount>
                        {message ? (
                            <Promotion style={{color: COLORS.cRed}}>{message}</Promotion>
                                    ) : promotion ? (
                            <Promotion>{promotion.name} - Ahorro: ${discount.toFixed(2)}</Promotion>
                                    ) : null}
                    </ContainerPromotion>
                    <ContainerTotal>
                        <h2>Total:</h2>
                        <span><b><span style={{fontSize: '50px'}}>$</span> {total.toFixed(2)}</b></span>
                    </ContainerTotal>
                </Container>
            
                <Item><span>Items:    {totalItems}</span></Item>
            
                <ScrollArea>
                    <ScrollableProductList>
                        <TableWrapper>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Descripción</th>
                                        <th>Monto</th>
                                    </tr>
                                </thead>
                                <tbody style={{fontSize: '30px'}}>
                                    {items.map((item, index) => (
                                <tr key={index}>
                                    <td>
                                        <span>## </span>{item.upc} #<span style={{wordSpacing: '3rem'}}> ${item.unitPrice.toFixed(2)} x {item.quantity}</span><br />
                                        {item.articleName}
                                    </td>
                                    <td>${item.totalPrice.toFixed(2)}</td>
                                </tr>
                                                    ))}
                                </tbody>
                            </table>
                        </TableWrapper>
            
                        <Publicity>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe8_dKab7CuKwLGHE0Iwx_Lf0rF8dzZvvIXg&s" alt="" style={{width: '100%'}} />
                        </Publicity>
                    </ScrollableProductList>
                </ScrollArea>
            
                <Container style={{background: COLORS.cGlobalBackground}}>
                    <ContainerSubtotal>
            
                        {isFormatted && change > 0 ? (
                            <div>
                                <p style={{marginTop: '1rem', marginBottom: '4rem'}}>
                                    Cambio: ${change.toFixed(2)}
                                </p>
                            </div>
                                    ) : (
                            <div>
                                <p>Subtotal $ {subtotal.toFixed(2)}</p>
                                <h1>
                                    <input
                                        type="text"
                                        value={inputEntry}
                                        onChange={inputChange}
                                        onKeyDown={handleKeyDown}
                                        placeholder={isFormatted ? paymentMethod + ' *,***,***.**' : 'ARTICULO'}
                                        />
                
                                </h1>
                            </div>
                                    )}
            
                    </ContainerSubtotal>
                    <ContainerLogo>
                        <img src="https://cdn.worldvectorlogo.com/logos/castrol-4.svg" alt="" />
                    </ContainerLogo>
                </Container>
            
                <StatusBar>
                    <span>{formatDate(currentTime)}</span>
                    <span>{formatTime(currentTime)}</span>
                    <span>Operador: {opName}</span>
                    <span>Local: {store}   </span>
                    <span>Pos: {op}   </span>
                    <span>Tran: {trans}   </span>
                    <span>Status: {serverStatus}</span>
                    <button onClick={handleSubmitSale}>Registrar Venta</button>
                </StatusBar>
            </FullScreenWrapper >
            );
}



const FullScreenWrapper = styled.div`
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  box-sizing: border-box;
  padding-bottom: 0px;
`;

const ScrollableProductList = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden; /* evita scroll en todo el div, solo permitimos en TableWrapper */
  gap: 1rem;
  min-height: 0; /* importante para que funcione el scroll interno */
`;

const Container = styled.div`
    border-radius: 1rem !important;
    background: ${COLORS.cGlobalBackground};
    display: flex;
    flex-wrap: wrap;

`;

const ContainerLogo = styled.div`
    width: 18%;
    height: 100%;
    margin-left: 10px;

    img{
        width: 100%;
        height: 100%;
    }
`;

const TableWrapper = styled.div`
  
  flex: 1;
  overflow-y: auto;
  min-height: 300px;
  min-height: 0; /* necesario para que respete el espacio */

  table {
    width: 100%;
    //border-collapse: collapse;

    border-collapse: separate;
    border-spacing: 0;
    width: 100%;
    }

  th, td {
    text-align: left;
    padding: 0.5rem;
    text-transform: uppercase;
  }

  thead {
    position: sticky;
    top: 0;
    background-color: ${COLORS.cWhite};

    overflow: hidden;         /* NECESARIO */
    border-radius: 0 0 1rem 1rem; /* Solo las esquinas inferiores */
 
  }

  thead th {
    background-color: ${COLORS.cWhite} /* Necesario para ver el redondeo */
  }

  thead th:first-child {
    border-bottom-left-radius: 1rem;
  }

    thead th:last-child {
    border-bottom-right-radius: 1rem;
    }
  
`;

const ScrollArea = styled.div`
  flex: 1;
  display: flex;
  overflow: hidden;
  gap: 1rem;
  min-height: 0; /* Esto permite que se adapte */
`;

const ContainerPromotion = styled.div`
    flex:
    0 0 auto;
    width: 79%;
    font-weight: bold;
    background: ${COLORS.cWhite};
    border-radius: 1rem;
    border-top-width: 1px;
    border-top-style: solid;
    border-left-width: 1px;
    border-left-style: solid;
    border-right-width: 1px;
    border-right-style: solid;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-color: ${COLORS.cGlobalBorder};
`;

const ContainerTotal = styled.div`
    background: ${COLORS.cGlobalBackground};
    margin-bottom: 0px;
    margin-top: 0px;
    flex: 0 0 auto;
    padding-left: 5px;
    width: 20%;

    span{
        font-size: 4rem;
    }
`;

const AppliedDiscount = styled.h1`
    margin-left: 25px;
    margin-bottom: 10px;
`;

const Promotion = styled.span`
    margin-left: 25px;
    text-transform: uppercase;
`;

const Item = styled.div`
    display: flex;
    align-items: flex-end; /* Alinea el texto al fondo */
    font-weight: bold; /* Hace el texto en negritas */
    padding: 10px 0; /* Agrega un pequeño margen para que no esté pegado al borde */
    border: 1px solid ${COLORS.cGlobalBorder};
    border-radius: 1rem;
    width: 79%;

    span{
        padding-left: 2%;
    }
`;

const Publicity = styled.div`
    width: 22%;
`;

const ContainerSubtotal = styled.div`
  width: 80%;
  border-radius: 1rem;
  border: 1px solid ${COLORS.cGlobalBorder};
  background: ${COLORS.cWhite};
  text-align: center;
  margin-top: 1rem;
  flex-shrink: 0;

  p{
    font-weight: bold;
    font-size: 45px;
    margin-bottom: 15px;
    margin-top: 15px;
  }

  input{
    font-size: 1em;
    margin-left: 0;
    margin-right: 0;
    font-weight: bold;
    border: none;

    width: 330px; /* Ancho inicial */
    min-width: 330px; /* Ancho mínimo */
    max-width: 500px; /* Ancho máximo */
    transition: width 0.2s ease; /* Transición suave para el ajuste de ancho */
    text-align: center;
  }

  input:focus-visible {
    border: none;
    outline: none;
  }

  input::placeholder {
    color: black;
  }

`;

const StatusBar = styled.div`
    background-color: ${COLORS.cGlobalBackground};
    color: ${COLORS.cBlack};
    padding: 8px 12px;
    font-family: Arial, sans-serif;
    font-size: 1.1rem;
    display: flex;
    gap: 20px; /* Espacio entre los elementos */
    //border-top: 1px solid #c01e1e;
    //border-bottom: 1px solid #ccc;
    align-items: center;

    span{
          white-space: nowrap;
    }
`;


export default Sales;