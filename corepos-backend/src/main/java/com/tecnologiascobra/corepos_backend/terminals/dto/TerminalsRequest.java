package com.tecnologiascobra.corepos_backend.terminals.dto;

import java.time.LocalDateTime;

import com.tecnologiascobra.corepos_backend.determinant.model.DeterminantSummary;

import lombok.Data;

/**
 *
 * @author darkcobra7423
 */
@Data
public class TerminalsRequest {

    // private String id;
    private String numTerminal;
    private DeterminantSummary determinant;
    private String type;
    private String softwareVersion;
    private String status;
    private LocalDateTime lastSync;
    private String deviceToken;
    private LocalDateTime timestamp;
}
