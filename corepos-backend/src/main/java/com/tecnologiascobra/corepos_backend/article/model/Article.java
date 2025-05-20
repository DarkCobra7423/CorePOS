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
//import jakarta.validation.constraints.NotBlank;
//import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Positive;
import java.math.BigDecimal;
import java.math.RoundingMode;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
//import lombok.NoArgsConstructor;
//import org.springframework.data.mongodb.core.mapping.Document;

/**
 *
 * @author darkcobra7423
 */

@Document(collection = "article")
@Data
@AllArgsConstructor
@Builder
// @NoArgsConstructor
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
    // private int totalStock;
    private int minStock;

    private int maxStock;

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

    public int getTotalStock() {
        return backroomStock + salesFloorStock;
    }

    public double getMargin() {
        if (price == null || cost == null || price.compareTo(BigDecimal.ZERO) == 0) {
            return 0.0;
        }
        return price.subtract(cost)
                .divide(price, 4, RoundingMode.HALF_UP)
                .multiply(BigDecimal.valueOf(100))
                .doubleValue();
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
