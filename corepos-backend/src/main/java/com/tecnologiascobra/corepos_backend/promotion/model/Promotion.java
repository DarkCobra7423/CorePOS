package com.tecnologiascobra.corepos_backend.promotion.model;

import com.tecnologiascobra.corepos_backend.article.model.ArticleItem;
import java.math.BigDecimal;

import org.springframework.data.annotation.Id;
import java.time.LocalDateTime;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document("promotions")
public class Promotion {

    @Id
    private String id;
    //private List<ArticleItem> articletUpc;
    private ArticleItem article; // 👈 Aquí usas tu clase auxiliar
    private String name;
    private int buyQuantity;
    private LocalDateTime validity;
    private BigDecimal bundlePrice;
    /*
     * {
     * "_id": "promo1",
     * "productId": "A1",
     * "name": "2x50",
     * "buyQuantity": 2,
     * "bundlePrice": 50.00,
     * "validity": "2025-05-31T23:59:00"
     * }
     */

    /*
     * if(cantidad>=buyQuantity)
     * {
     * int grupos = cantidad / buyQuantity;
     * BigDecimal totalPromo = bundlePrice.multiply(new BigDecimal(grupos));
     * BigDecimal restante = precioNormal.multiply(new BigDecimal(cantidad %
     * buyQuantity));
     * totalFinal = totalPromo.add(restante);
     * }
     */
    /*
     * public BigDecimal calcularTotalConPromocion(int cantidad, BigDecimal
     * precioUnitario, int buyQuantity,
     * BigDecimal bundlePrice) {
     * int grupos = cantidad / buyQuantity;
     * int resto = cantidad % buyQuantity;
     * 
     * BigDecimal totalPromo = bundlePrice.multiply(BigDecimal.valueOf(grupos));
     * BigDecimal totalResto = precioUnitario.multiply(BigDecimal.valueOf(resto));
     * 
     * return totalPromo.add(totalResto);
     * }
     */
    // Getters and Setters
}