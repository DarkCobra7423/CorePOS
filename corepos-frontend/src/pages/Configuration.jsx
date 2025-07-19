import styled from 'styled-components';

const Configuration = ({ children }) => {

    const Container = styled.div`
        margin: auto;
        margin-bottom: 25px;
        box-shadow: 1px 1px 2px 0 #CCCCCC;
        padding: 20px;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
        background: white !important;
        border-radius: 1rem;
    `;



    return (
        <>

            <Container>
                Configuration
                {children}
                <StyledWrapper className="config-container">
                    <h1>⚙️ Configuración del ERP</h1>

                    <form id="configForm" onsubmit="handleSave(event)">

                        <section>
                            <h2>Datos de la Empresa</h2>
                            <label>Nombre de la empresa
                                <input type="text" id="companyName" placeholder="Ej: Tienda XYZ" required />
                            </label>
                            <label>Dirección
                                <input type="text" id="companyAddress" placeholder="Ej: Calle 123, Ciudad" />
                            </label>
                            <label>Teléfono
                                <input type="tel" id="companyPhone" placeholder="+52 123 456 7890" />
                            </label>
                            <label>Correo electrónico
                                <input type="email" id="companyEmail" placeholder="contacto@empresa.com" />
                            </label>
                        </section>

                        <section>
                            <h2>Configuración Regional</h2>
                            <label>Moneda
                                <select id="currency">
                                    <option value="MXN">Peso Mexicano (MXN)</option>
                                    <option value="USD">Dólar Estadounidense (USD)</option>
                                    <option value="EUR">Euro (EUR)</option>
                                    <option value="COP">Peso Colombiano (COP)</option>
                                </select>
                            </label>

                            <label>Formato de número
                                <select id="numberFormat">
                                    <option value="1,234.56">1,234.56 (Inglés)</option>
                                    <option value="1.234,56">1.234,56 (Español)</option>
                                </select>
                            </label>
                        </section>

                        <section>
                            <h2>Parámetros Fiscales</h2>
                            <label>IVA (%)
                                <input type="number" id="taxRate" min="0" max="100" step="0.1" value="16" />
                            </label>
                            <label>Descuento máximo permitido (%)
                                <input type="number" id="maxDiscount" min="0" max="100" step="0.1" value="20" />
                            </label>
                        </section>

                        <section>
                            <h2>Impresoras</h2>
                            <label>Impresora predeterminada
                                <input type="text" id="printerName" placeholder="Nombre de impresora" />
                            </label>
                            <button type="button" onclick="testPrinter()">Probar impresora</button>
                        </section>

                        <section>
                            <h2>Backup y Restauración</h2>
                            <button type="button" onclick="backupData()">Crear Backup</button>
                            <button type="button" onclick="restoreData()">Restaurar Backup</button>
                        </section>

                        <section>
                            <h2>Roles y Permisos Básicos</h2>
                            <label><input type="checkbox" id="permAdmin" /> Acceso total (Administrador)</label>
                            <label><input type="checkbox" id="permVentas" /> Gestión de ventas</label>
                            <label><input type="checkbox" id="permInventario" /> Gestión de inventario</label>
                            <label><input type="checkbox" id="permClientes" /> Gestión de clientes</label>
                        </section>

                        <button className="btn primary" type="submit">Guardar configuración</button>
                    </form>
                </StyledWrapper>
            </Container>
        </>
    );
}

const StyledWrapper = styled.div`
    body {
  font-family: 'Inter', sans-serif;
  background: #f9fafb;
  margin: 0;
  padding: 20px;
  color: #333;
}

.config-container {
  max-width: 700px;
  margin: auto;
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

h1 {
  margin-bottom: 30px;
  text-align: center;
  font-weight: 700;
}

section {
  margin-bottom: 25px;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 20px;
}

section h2 {
  margin-bottom: 15px;
  font-weight: 600;
  color: #222;
}

label {
  display: block;
  margin-bottom: 12px;
  font-weight: 500;
}

input[type="text"],
input[type="email"],
input[type="tel"],
input[type="number"],
select {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  box-sizing: border-box;
  margin-top: 6px;
}

input[type="checkbox"] {
  margin-right: 8px;
}

button {
  padding: 12px 20px;
  font-weight: 600;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  margin-top: 10px;
}

.btn.primary {
  background-color: #007bff;
  color: white;
  width: 100%;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.btn.primary:hover {
  background-color: #0056b3;
}

button[type="button"] {
  background: #6c757d;
  color: white;
  margin-top: 6px;
  width: auto;
}

`;

export default Configuration;
