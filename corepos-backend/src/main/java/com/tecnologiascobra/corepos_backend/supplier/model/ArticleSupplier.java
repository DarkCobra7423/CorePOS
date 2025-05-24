package com.tecnologiascobra.corepos_backend.supplier.model;

import lombok.*;

import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "article_suppliers")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ArticleSupplier {
    @Id
    private String id;

    private String upc;
    private String numArticle;
    private String supplierId;

    private String supplierSku;
    private Double cost;

    private boolean preferred;
    private LocalDateTime lastPurchaseDate;
}
