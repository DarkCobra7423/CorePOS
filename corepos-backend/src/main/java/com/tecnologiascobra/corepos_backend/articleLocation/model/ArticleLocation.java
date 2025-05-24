package com.tecnologiascobra.corepos_backend.articleLocation.model;

import java.time.LocalDateTime;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.*;

@Document("article_locations")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ArticleLocation {
    @Id
    private String id;

    private String upc; // Referencia al artículo general
    private String itemNumber; // Variante específica (proveedor/SKU)
    private String storeId; // Sucursal a la que pertenece la ubicación

    private SalesFloorLocation salesFloor;
    private BackroomLocation backroom;

    private LocalDateTime lastUpdated;
}

/*
 * {
 * "_id": "ARTLOC001",
 * "articleUpc": "7501001234567",
 * "storeId": "SUC001",
 * "salesFloor": {
 * "modular": "MOD-A3",
 * "aisle": "Pasillo 5",
 * "shelf": "Repisa 2",
 * "position": "Posición 4"
 * },
 * "backroom": {
 * "bin": "BIN-12",
 * "zone": "ZONA-A",
 * "level": "Nivel 2"
 * },
 * "lastUpdated": "2025-05-21T20:10:00Z"
 * }
 * 
 */