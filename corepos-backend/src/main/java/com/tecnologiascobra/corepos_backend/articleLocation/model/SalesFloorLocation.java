package com.tecnologiascobra.corepos_backend.articleLocation.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class SalesFloorLocation {
    private String modular;
    private String aisle;
    private String shelf;
    private String position;
}