package com.tecnologiascobra.corepos_backend.supplier.controller;

import com.tecnologiascobra.corepos_backend.supplier.model.Supplier;
import com.tecnologiascobra.corepos_backend.supplier.service.SupplierService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/suppliers")
@RequiredArgsConstructor
public class SupplierController {

    private final SupplierService service;

    @PostMapping
    public ResponseEntity<Supplier> create(@RequestBody Supplier supplier) {
        return ResponseEntity.ok(service.create(supplier));
    }

    @GetMapping
    public ResponseEntity<List<Supplier>> getAll() {
        return ResponseEntity.ok(service.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Supplier> getById(@PathVariable String id) {
        return service.getById(id).map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Supplier> update(@PathVariable String id, @RequestBody Supplier supplier) {
        return ResponseEntity.ok(service.update(id, supplier));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable String id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}