package com.tecnologiascobra.corepos_backend.articleLocation.dto;

import com.tecnologiascobra.corepos_backend.articleLocation.model.BackroomLocation;
import com.tecnologiascobra.corepos_backend.articleLocation.model.SalesFloorLocation;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class ArticleLocationRequest {
    @NotBlank
    private String upc;
    @NotBlank
    private String itemNumber;
    private String storeId;
    private SalesFloorLocation salesFloor;
    private BackroomLocation backroom;
}