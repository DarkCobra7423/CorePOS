/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.tecnologiascobra.corepos_backend.article.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.math.RoundingMode;

import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 *
 * @author darkcobra7423
 */
@Data
public class ArticleRequest {

    @NotBlank
    private String name;

    @Positive
    private BigDecimal price;

    private String upc;
    // private String itemNumber;
    private String size;
    private String color;
    private String department;

    // Campos para Stock
    @PositiveOrZero
    private int backroomStock;

    @PositiveOrZero
    private int salesFloorStock;

    @PositiveOrZero
    private int minStock;

    @PositiveOrZero
    private int maxStock;

    @PositiveOrZero
    private int packageQuantity;

    @PositiveOrZero
    private BigDecimal previousPrice;

    @PositiveOrZero
    private BigDecimal cost;

    private TaxesRequest taxes; // ✅ Nuevo campo

    @Data
    public static class TaxesRequest {
        private TaxRequest iva;
        private TaxRequest ieps;

        @Data
        public static class TaxRequest {
            private boolean applies;
            private double rate;
        }
    }

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
