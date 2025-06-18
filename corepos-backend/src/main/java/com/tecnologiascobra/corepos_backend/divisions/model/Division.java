package com.tecnologiascobra.corepos_backend.divisions.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document("divisions")
public class Division {

    @Id
    private String id;

    private String numDiv;
    // private String nombre;

}