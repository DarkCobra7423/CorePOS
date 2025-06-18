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

import com.tecnologiascobra.corepos_backend.department.model.Department;
import com.tecnologiascobra.corepos_backend.articleItem.model.ArticleItem;

import jakarta.validation.constraints.Positive;
import java.math.BigDecimal;
import java.math.RoundingMode;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 *
 * @author darkcobra7423
 */

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "articles")
public class Article {

    @Id
    private String id;
    private String name;
    private String upc;
    // private ArticleItem itemNumber;
    private Department department;
    private String size;
    private String color;
    private int packageQuantity;
    private Taxes taxes;
    private BigDecimal previousPrice;
    private BigDecimal price;
    private BigDecimal cost;
    private boolean active;

    private Stock stock; // Stock information

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Stock {
        private int backroomStock;
        private int salesFloorStock;
        private int minStock;
        private int maxStock;
    }

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class Taxes {
        private Tax iva;
        private Tax ieps;

        @Data
        @Builder
        @NoArgsConstructor
        @AllArgsConstructor
        public static class Tax {
            private boolean applies;
            private double rate;
        }
    }

    public BigDecimal getPriceWithTaxes() {
        if (price == null) {
            return BigDecimal.ZERO;
        }

        BigDecimal finalPrice = price;

        if (taxes != null && taxes.getIeps() != null && taxes.getIeps().isApplies()) {
            BigDecimal iepsRate = BigDecimal.valueOf(taxes.getIeps().getRate());
            finalPrice = finalPrice.add(price.multiply(iepsRate));
        }

        if (taxes != null && taxes.getIva() != null && taxes.getIva().isApplies()) {
            BigDecimal ivaRate = BigDecimal.valueOf(taxes.getIva().getRate());
            finalPrice = finalPrice.add(finalPrice.multiply(ivaRate));
        }

        return finalPrice.setScale(2, RoundingMode.HALF_UP);
    }

    public int getTotalStock() {
        return stock.backroomStock + stock.salesFloorStock;
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
