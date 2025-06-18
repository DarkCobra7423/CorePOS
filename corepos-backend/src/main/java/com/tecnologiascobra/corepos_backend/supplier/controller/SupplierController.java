package com.tecnologiascobra.corepos_backend.supplier.controller;

import com.tecnologiascobra.corepos_backend.supplier.dto.SupplierRequest;
import com.tecnologiascobra.corepos_backend.supplier.model.Supplier;
import com.tecnologiascobra.corepos_backend.supplier.repository.SupplierRepository;
import com.tecnologiascobra.corepos_backend.supplier.service.SupplierService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/suppliers")
@RequiredArgsConstructor
public class SupplierController {

        private final SupplierService service;
        private final SupplierRepository supplierRepository;

        @PostMapping
        public Supplier create(SupplierRequest dto) {

                /*
                 * String generatedId = "SUP-" + LocalDate.now().toString().replaceAll("-", "")
                 * + "-" +
                 * UUID.randomUUID().toString().substring(0, 5).toUpperCase();
                 */
                String generatedId = LocalDate.now().toString().replaceAll("-", "") +
                                UUID.randomUUID().toString().substring(0, 5).toUpperCase();

                Supplier.Address address = new Supplier.Address(
                                dto.getStreet(),
                                dto.getCity(),
                                dto.getState(),
                                dto.getZipCode());

                Supplier supplier = Supplier.builder()
                                .idSuplier(generatedId)
                                .name(dto.getName())
                                .contactName(dto.getContactName())
                                .email(dto.getEmail())
                                .phone(dto.getPhone())
                                .rfc(dto.getRfc())
                                .isActive(dto.isActive())
                                .createdAt(dto.getCreatedAt())
                                .address(address)
                                .build();

                return supplierRepository.save(supplier);
        }

        @GetMapping
        public ResponseEntity<List<Supplier>> getAll() {
                return ResponseEntity.ok(service.getAll());
        }

        @GetMapping("/{idSuplier}")
        public ResponseEntity<Supplier> findByIdSuplier(@PathVariable String idSuplier) {
                return service.getByIdSuplier(idSuplier).map(ResponseEntity::ok)
                                .orElse(ResponseEntity.notFound().build());
        }
        /*
         * @PutMapping("/{id}")
         * public ResponseEntity<Supplier> update(@PathVariable String id, @RequestBody
         * Supplier supplier) {
         * return ResponseEntity.ok(service.update(id, supplier));
         * }
         * 
         * @DeleteMapping("/{id}")
         * public ResponseEntity<Void> delete(@PathVariable String id) {
         * service.delete(id);
         * return ResponseEntity.noContent().build();
         * }
         */
}