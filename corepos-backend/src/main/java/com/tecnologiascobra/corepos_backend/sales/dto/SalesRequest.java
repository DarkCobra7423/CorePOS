package com.tecnologiascobra.corepos_backend.sales.dto;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.annotation.Id;
import com.tecnologiascobra.corepos_backend.sales.model.SalesItem;
import com.tecnologiascobra.corepos_backend.determinant.model.Determinant;
import com.tecnologiascobra.corepos_backend.determinant.model.DeterminantSummary;
import com.tecnologiascobra.corepos_backend.article.model.Article;
import com.tecnologiascobra.corepos_backend.promotion.model.Promotion;

import lombok.Data;

@Data
public class SalesRequest {
    @Id
    private String id;

    private int op;

    private LocalDateTime timestamp;

    // private List<Article> items;
    private List<SalesItem> items;

    private int totalItems;

    private BigDecimal subtotal;

    private BigDecimal discount;

    // Solo ID de la promoción
    private String promotionId;

    private BigDecimal total;

    private String paymentMethod;

    private BigDecimal paymentAmount;

    // private Determinant store;

    private DeterminantSummary store;
    private String storeId;

    // private String publicityImage;
}

/*
 * // Suponiendo que tienes estas instancias:
 * Determinant determinante =
 * determinanteRepository.findById("D001").orElseThrow();
 * Promotion promocion = promocionRepository.findById("P002").orElseThrow();
 * 
 * Sale sale = new Sale();
 * sale.setStore(new DeterminantSummary(determinante.getId(),
 * determinante.getName()));
 * sale.setPromotionId(promocion.getId());
 */