package com.tecnologiascobra.corepos_backend.sales.controller;

import lombok.RequiredArgsConstructor;

import org.apache.catalina.connector.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;

import com.tecnologiascobra.corepos_backend.determinant.model.Determinant;
import com.tecnologiascobra.corepos_backend.determinant.model.DeterminantSummary;
import com.tecnologiascobra.corepos_backend.determinant.repository.DeterminantRepository;
import com.tecnologiascobra.corepos_backend.sales.dto.SalesRequest;
import com.tecnologiascobra.corepos_backend.sales.model.Sales;
import com.tecnologiascobra.corepos_backend.sales.service.SalesService;

import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/sales")
@Validated
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class SalesController {

    private final SalesService salesService;
    private final DeterminantRepository determinantRepository;

    @PostMapping
    public ResponseEntity<Sales> createSales(@RequestBody @Valid SalesRequest dto) {

        // Buscar el determinante utilizando el campo 'determinant' en lugar de '_id'
        Determinant determinant = determinantRepository.findByDeterminant(dto.getStoreId())
                .orElseThrow(() -> new RuntimeException("Determinant not found"));

        // Construir el resumen del determinante
        DeterminantSummary storeSummary = new DeterminantSummary(
                // determinant.getId(), // Aquí obtenemos el '_id' del determinante
                determinant.getName(),
                determinant.getDeterminant()); // Nombre del determinante

        // Construir la entidad Sales
        Sales sale = Sales.builder()
                .op(dto.getOp())
                .timestamp(dto.getTimestamp())
                .items(dto.getItems()) // List<SaleItem>
                .totalItems(dto.getTotalItems())
                .subtotal(dto.getSubtotal())
                .discount(dto.getDiscount())
                .promotionId(dto.getPromotionId()) // Solo el ID
                .total(dto.getTotal())
                .paymentMethod(dto.getPaymentMethod())
                .paymentAmount(dto.getPaymentAmount())
                .store(storeSummary) // Resumen del determinante
                .build();

        // Guardar la venta
        Sales saved = salesService.createSales(sale);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    @GetMapping
    public ResponseEntity<List<Sales>> getAllSales() {
        return ResponseEntity.ok(salesService.getAllSales());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Sales> getSalesById(@PathVariable String id) {
        return salesService.getSalesById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Sales> updateSales(@PathVariable String id, @RequestBody @Valid Sales sales) {
        Sales update = salesService.updateSales(id, sales);
        return update != null ? ResponseEntity.ok(update)
                : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSales(@PathVariable String id) {
        return salesService.deleteSales(id)
                ? ResponseEntity.noContent().build()
                : ResponseEntity.notFound().build();
    }

}
