package com.tecnologiascobra.corepos_backend.articleItem.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class ArticleItemRequest {

    // private String id;
    @NotBlank
    private String numItem;
    @NotBlank
    private String upc;
    @NotBlank
    private String sku;
}
