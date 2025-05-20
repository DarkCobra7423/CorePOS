/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.tecnologiascobra.corepos_backend.sales.model;

import com.tecnologiascobra.corepos_backend.determinant.model.Determinant;
import com.tecnologiascobra.corepos_backend.determinant.model.DeterminantSummary;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import com.tecnologiascobra.corepos_backend.sales.model.SalesItem;
import com.tecnologiascobra.corepos_backend.article.model.Article;
import com.tecnologiascobra.corepos_backend.promotion.model.Promotion;
import lombok.Builder;
import lombok.AllArgsConstructor;
import lombok.Data;

/**
 *
 * @author darkcobra7423
 */

@Document(collection = "sales")
@Data
@AllArgsConstructor
@Builder
public class Sales {

    @Id
    private String id;

    private int op;

    private LocalDateTime timestamp;

    // private List<Article> items;
    private List<SalesItem> items;

    private int totalItems;

    private BigDecimal subtotal;

    private BigDecimal discount;

    // private Promotion promotion;
    private String promotionId;

    private BigDecimal total;

    private String paymentMethod;

    private BigDecimal paymentAmount;

    // private Determinant store;

    private DeterminantSummary store;
    private String storeId;
    // private String publicityImage;
}
