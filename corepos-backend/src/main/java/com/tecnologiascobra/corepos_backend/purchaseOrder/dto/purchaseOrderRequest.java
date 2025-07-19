package com.tecnologiascobra.corepos_backend.purchaseOrder.dto;

import java.time.LocalDateTime;
import java.util.List;
import lombok.Data;

@Data
public class purchaseOrderRequest {

    private String orderNumber;
    private String status;
    private String moneda;
    private double tipoCambio;

    private LocalDateTime fechaOrden;
    private LocalDateTime fechaEntrega;

    private TotalesDTO totales;
    private String notas;
    private List<HistorialDTO> historial;

    private String creadoPor;
    private LocalDateTime fechaCreacion;
    private LocalDateTime ultimaActualizacion;

    public static class TotalesDTO {
        private double subtotal;
        private double descuentos;
        private double impuestos;
        private double total;
    }

    public static class HistorialDTO {
        private LocalDateTime fecha;
        private String accion;
        private String usuario;
    }
}
