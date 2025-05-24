package com.tecnologiascobra.corepos_backend.supplier.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class ArticleSupplierRequest {

    @NotBlank
    private String upc;

    @NotBlank
    private String numArticle;

    @NotBlank
    private String supplierId;

    @NotNull
    private Double cost;

    private Integer leadTimeDays; // Días para entrega, opcional
}