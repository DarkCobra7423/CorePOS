/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.tecnologiascobra.corepos_backend.article.model;

import com.tecnologiascobra.corepos_backend.department.model.Department;
import java.math.BigDecimal;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 *
 * @author darkcobra7423
 */
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ArticleItemDTO {

    private String id;
    private String name;
    private String upc;
    private Department department;
    private String size;
    private String color;
    private int packageQuantity;
    private Article.Taxes taxes;
    private BigDecimal previousPrice;
    private BigDecimal price;
    private BigDecimal cost;
    private boolean active;
    private Article.Stock stock;
    private BigDecimal priceWithTaxes;
    private int totalStock;
    private double margin;

    // Aquí el campo que quieres incluir
    private String numItem;

    public ArticleItemDTO(String id, String numItem) {
        this.id = id;
        this.numItem = numItem;
    }

}
