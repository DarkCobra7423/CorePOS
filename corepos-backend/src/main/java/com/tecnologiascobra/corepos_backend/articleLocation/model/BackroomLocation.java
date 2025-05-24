package com.tecnologiascobra.corepos_backend.articleLocation.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BackroomLocation {
    private String bin;
    private String zone;
    private String level;
}