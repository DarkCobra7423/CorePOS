package com.tecnologiascobra.corepos_backend.sales.model;

import java.math.BigDecimal;

import lombok.Data;

@Data
public class SalesItem {
    private String articleId; // Solo el ID del artículo

    private String upc;

    private int quantity;

    private BigDecimal unitPrice;

    private BigDecimal totalPrice;

    public SalesItem() {
    }

    public SalesItem(String articleId, String upc, int quantity, BigDecimal unitPrice) {
        this.upc = upc;
        this.articleId = articleId;
        this.quantity = quantity;
        this.unitPrice = unitPrice;
        this.totalPrice = unitPrice.multiply(BigDecimal.valueOf(quantity));
    }
}
