package com.tecnologiascobra.corepos_backend.terminals.model;

import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.tecnologiascobra.corepos_backend.determinant.model.DeterminantSummary;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document("terminals")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Terminals {

    @Id
    private String id; // Identificador único de la terminal en la base de datos (auto-generado o
                       // manual).
    private String numTerminal; // Número o nombre de la terminal (ej. "POS001").
    private DeterminantSummary determinant; // Identificador del determinante (ej. sucursal, empresa, etc.).
    private String type; // Tipo de terminal, puede ser "Caja", "Kiosko", "Móvil", etc.
    private String softwareVersion; // Versión del software de la terminal para soporte y control de
                                    // actualizaciones.
    private String status; // Estado de la terminal ("active", "inactive", "maintenance", etc.).
    private LocalDateTime lastSync; // Fecha y hora de la última sincronización o actividad.
    private String deviceToken; // Token único generado para identificar la terminal de forma única (UUID).
    private LocalDateTime timestamp; // Fecha y hora del último registro de actualización o creación.
}
/*
 * {
 * "_id": "615d5f4e1f7d7e84e3b0e2db", // MongoDB genera automáticamente un _id
 * si no lo defines.
 * "id": "POS001", // Identificador único de la terminal.
 * "numTerminal": "POS001", // Número o nombre de la terminal.
 * "idDeterminant": "SUC001", // Identificador del determinante (puede ser
 * sucursal, empresa, etc.).
 * "type": "Caja", // Tipo de terminal, por ejemplo: "Caja", "Kiosko", "Móvil".
 * "softwareVersion": "1.0.2", // Versión del software de la terminal.
 * "status": "active", // Estado de la terminal (puede ser "active", "inactive",
 * "maintenance", etc.).
 * "lastSync": "2025-05-20T14:20:00", // Fecha y hora de la última
 * sincronización (en formato ISO 8601).
 * "deviceToken": "b3d5dbd6-5c13-4fb7-9025-5c50f4a62c1d", // Token único
 * generado para identificar la terminal.
 * "timestamp": "2025-05-20T14:15:00" // Fecha y hora en la que se registró o
 * actualizó el documento.
 * }
 */