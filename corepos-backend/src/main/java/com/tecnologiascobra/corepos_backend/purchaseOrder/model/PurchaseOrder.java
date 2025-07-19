package com.tecnologiascobra.corepos_backend.purchaseOrder.model;

import java.math.BigDecimal;
import org.springframework.data.annotation.Id;
import java.time.LocalDateTime;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Document("purchase_orders")
public class PurchaseOrder {

    @Id
    private String id;

    private String orderNumber;
    private String idSupplier;
    private String idDeterminant;
    private String status;
    private String moneda;
    private double tipoCambio;

    private LocalDateTime fechaOrden;
    private LocalDateTime fechaEntrega;
    
    private List<Article> articles;

    private Totales totales;

    private String notas;
    private List<Historial> historial;

    private String creadoPor;
    private LocalDateTime fechaCreacion;
    private LocalDateTime ultimaActualizacion;

    // Clases anidadas
    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    public static class Article {
        private String numItem;
        private double cost;
        private int cantidad;
    }

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    public static class Totales {
        private double subtotal;
        private double descuentos;
        private double impuestos;
        private double total;

    }

    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    @Builder
    public static class Historial {
        private LocalDateTime fecha;
        private String accion;
        private String usuario;

    }
}


/* {
  "_id": "ObjectId",         // ID único de MongoDB
  "orderNumber": "OC-000123",
  "status": "pendiente",     // pendiente, recibida, cancelada, etc.
  "fechaOrden": "2025-07-07T12:00:00Z",
  "fechaEntrega": "2025-07-10T00:00:00Z",
  "moneda": "MXN",
  "tipoCambio": 17.2
}

"totales": {
  "subtotal": 1200.00,
  "descuentos": 0,
  "impuestos": 192.00,
  "total": 1392.00
}

"almacen": {
  "id": "ALM001",
  "nombre": "Almacén Central"
},
"recibido": false,
"fechaRecepcion": null


"notas": "Urgente. Confirmar disponibilidad.",
"historial": [
  {
    "fecha": "2025-07-07T13:00:00Z",
    "accion": "Creación de orden",
    "usuario": "admin"
  }
]

"creadoPor": "admin",
"fechaCreacion": "2025-07-07T12:00:00Z",
"ultimaActualizacion": "2025-07-07T13:00:00Z" */