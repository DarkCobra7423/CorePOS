package com.tecnologiascobra.corepos_backend.determinant.model;

import lombok.Data;

@Data
public class DeterminantSummary {
    // private String id;
    private String name;
    private String determinant;

    // Constructors
    public DeterminantSummary() {
    }

    public DeterminantSummary(/* String id, */ String name, String determinant) {
        // this.id = id;
        this.name = name;
        this.determinant = determinant;
    }
}
