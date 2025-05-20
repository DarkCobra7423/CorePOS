/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.tecnologiascobra.corepos_backend.article.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.Data;

import java.math.BigDecimal;
import java.math.RoundingMode;

import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 *
 * @author darkcobra7423
 */
@Data
public class ArticleRequest {

    @NotBlank(message = "El nombre del artículo no puede estar vacío")
    private String name;

    @Positive(message = "El precio debe ser un valor positivo")
    private BigDecimal price;

    @NotBlank(message = "El código UPC no puede estar vacío")
    private String upc;

    @NotBlank(message = "El número de artículo no puede estar vacío")
    private String itemNumber;

    private String size;
    private String color;

    @Positive(message = "El departamento debe ser un número positivo")
    private int department;

    // @PositiveOrZero(message = "El inventario de bodega no puede ser negativo")
    private int backroomStock;

    // @PositiveOrZero(message = "El stock total no puede ser negativo")
    // private int totalStock;
    private int minStock;

    private int maxStock;

    // @PositiveOrZero(message = "El stock en piso de venta no puede ser negativo")
    private int salesFloorStock;

    @PositiveOrZero(message = "La cantidad por paquete no puede ser negativa")
    private int packageQuantity;

    @PositiveOrZero(message = "El costo no puede ser negativo")
    private BigDecimal previousPrice;

    @PositiveOrZero(message = "El costo no puede ser negativo")
    private BigDecimal cost;

    @JsonIgnore
    public int getTotalStock() {
        return backroomStock + salesFloorStock;
    }

    @JsonIgnore
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
