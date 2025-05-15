/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.tecnologiascobra.corepos_backend.article.model;

import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.PositiveOrZero;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 *
 * @author darkcobra7423
 */
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Positive;
import java.math.BigDecimal;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "article")
public class Article {

    @Id
    private String id;

    @NotBlank(message = "El nombre del producto no puede estar vacío")
    @Schema(description = "Nombre del artículo mostrado al público")
    private String name;

    @Positive(message = "El precio debe ser un valor positivo")
    private BigDecimal price;

    @NotBlank(message = "El nombre del producto no puede estar vacío")
    private String upc;

    @NotBlank(message = "El nombre del producto no puede estar vacío")
    private String itemNumber;

    private String size;

    private String color;

    @NotBlank(message = "El nombre del producto no puede estar vacío")
    private int department;

    // @NotEmpty
    private int backroomStock;

    // @NotEmpty
    private int totalStock;

    // @NotEmpty
    private int salesFloorStock;

    // @NotEmpty
    private int packageQuantity;

    @PositiveOrZero(message = "El precio anterior no puede ser negativo")
    private BigDecimal previousPrice;

    @PositiveOrZero(message = "El cost no puede ser negativo")
    private BigDecimal cost;

    public Article() {
    }

    /*
     * public Article(String nombre, double precio) {
     * this.nombre = nombre;
     * this.precio = precio;
     * }
     */

    public Article(String name, BigDecimal price, String upc, String itemNumber, String size, String color,
            int department, int backroomStock, int totalStock, int salesFloorStock,
            int packageQuantity, BigDecimal previousPrice, BigDecimal cost) {

        this.name = name;
        this.price = price;
        this.upc = upc;
        this.itemNumber = itemNumber;
        this.size = size;
        this.color = color;
        this.department = department;
        this.backroomStock = backroomStock;
        this.totalStock = totalStock;
        this.salesFloorStock = salesFloorStock;
        this.packageQuantity = packageQuantity;
        this.previousPrice = previousPrice;
        this.cost = cost;
    }

    // Getters y setters

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public String getUpc() {
        return upc;
    }

    public void setUpc(String upc) {
        this.upc = upc;
    }

    public String getItemNumber() {
        return itemNumber;
    }

    public void setItemNumber(String itemNumber) {
        this.itemNumber = itemNumber;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public int getDepartment() {
        return department;
    }

    public void setDepartment(int department) {
        this.department = department;
    }

    public int getBackroomStock() {
        return backroomStock;
    }

    public void setBackroomStock(int backroomStock) {
        this.backroomStock = backroomStock;
    }

    public int getTotalStock() {
        return totalStock;
    }

    public void setTotalStock(int totalStock) {
        this.totalStock = totalStock;
    }

    public int getSalesFloorStock() {
        return salesFloorStock;
    }

    public void setSalesFloorStock(int salesFloorStock) {
        this.salesFloorStock = salesFloorStock;
    }

    public int getPackageQuantity() {
        return packageQuantity;
    }

    public void setPackageQuantity(int packageQuantity) {
        this.packageQuantity = packageQuantity;
    }

    public BigDecimal getPreviousPrice() {
        return previousPrice;
    }

    public void setPreviousPrice(BigDecimal previousPrice) {
        this.previousPrice = previousPrice;
    }

    public BigDecimal getCost() {
        return cost;
    }

    public void setCost(BigDecimal cost) {
        this.cost = cost;
    }

}

/*
 * Español Inglés sugerido (variable) Comentario
 * 
 * Nombre name Nombre comercial del artículo
 * Precio actual price Precio de venta actual
 * UPC upc Código de barras universal
 * Número de artículo itemNumber Generado automáticamente y único
 * Tamaño size Por ejemplo: 10V
 * Color color Texto simple
 * Departamento departmentId Puedes relacionarlo con una tabla de deptos
 * Backroom stockBackroom Existencia en almacén interno
 * Existencia total stockTotal Calculado: backroom + piso de venta
 * Piso de venta stockSalesFloor Existencia visible al cliente
 * Empaque packagingUnit Unidades por empaque o presentación
 * Margen marginPercentage En porcentaje
 * Precio anterior previousPrice Histórico de precios
 * Costo cost Costo base para calcular margen
 * 
 * 
 * 
 * 
 * public static double calculateMarginPercentage(double price, double cost) {
 * if (price == 0) return 0; // Evitar división por cero
 * return ((price - cost) / price) * 100;
 * }
 * 
 * 
 * 
 * Anotación Qué valida
 * 
 * @NotNull No puede ser null.
 * 
 * @NotBlank No puede ser null ni vacío (solo texto).
 * 
 * @NotEmpty No puede ser vacío (aplica a colecciones también).
 * 
 * @Size(min, max) Longitud de strings, listas, etc.
 * 
 * @Min(value) Valor mínimo (numérico).
 * 
 * @Max(value) Valor- máximo (numérico).
 * 
 * @Positive Solo valores positivos.
 * 
 * @PositiveOrZero Positivos o cero.
 * 
 * @Negative Solo valores negativos.
 * 
 * @NegativeOrZero Negativos o cero.
 * 
 * @Email Formato válido de correo.
 * 
 * @Pattern(regexp = "...") Regex personalizado para cadenas.
 * 
 * 
 * 
 * 🏷️ 2. Anotaciones de Spring Data MongoDB
 * 
 * Se usan para mapear clases a documentos de MongoDB:
 * 
 * Anotación Qué hace
 * 
 * @Document("collection") Indica el nombre de la colección en MongoDB.
 * 
 * @Id Marca el campo como ID (Mongo lo genera si es String).
 * 
 * @Field("nombre_en_mongo") Especifica el nombre del campo en la BD.
 * 
 * @Transient Excluye el campo de ser persistido.
 * 
 * @CreatedDate Guarda fecha de creación automáticamente.
 * 
 * @LastModifiedDate Guarda fecha de última modificación.
 * 
 * @Version Para control de versiones (optimistic locking).
 * 
 * 🔔 Algunas requieren habilitar anotaciones como @EnableMongoAuditing.
 * 📘 3. Anotaciones de OpenAPI / Swagger
 * 
 * Sirven para documentar tu API REST automáticamente:
 * 
 * Anotación Qué documenta
 * 
 * @Operation(summary = "") Describe brevemente qué hace un endpoint.
 * 
 * @ApiResponse(...) Define posibles respuestas.
 * 
 * @Schema(...) Describe los campos de modelos (DTOs, etc.).
 * 
 * @Parameter(...) Personaliza parámetros de entrada.
 * 
 * @Tag(name = "") Agrupa endpoints por categoría.
 * 🎯
 * 4. Otras útiles en Spring MVC / REST
 * 
 * Anotación Uso común
 * 
 * @RequestParam Extrae parámetros de query (e.g. ?id=123).
 * 
 * @PathVariable Extrae variables de la ruta (/producto/{id}).
 * 
 * @RequestBody Lee el cuerpo del request como objeto.
 * 
 * @Valid, @Validated Activa validaciones en clases o métodos.
 * 
 * @RestController Marca como controlador REST.
 * 
 * @ControllerAdvice Manejador global de excepciones.
 * 
 */
