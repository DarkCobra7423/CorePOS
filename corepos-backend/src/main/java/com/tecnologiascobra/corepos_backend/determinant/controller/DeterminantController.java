package com.tecnologiascobra.corepos_backend.determinant.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
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
import com.tecnologiascobra.corepos_backend.determinant.service.DeterminantService;
import com.tecnologiascobra.corepos_backend.determinant.dto.DeterminantRequest;
import com.tecnologiascobra.corepos_backend.determinant.model.Determinant;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/determinant")
@Validated
@CrossOrigin(origins = "http://localhost:5173")
@RequiredArgsConstructor
public class DeterminantController {

    private final DeterminantService determinantService;

    @PostMapping
    public ResponseEntity<Determinant> createDeterminant(@RequestBody @Valid DeterminantRequest dto) {
        Determinant determinant = Determinant.builder()
                .id(dto.getId())
                .name(dto.getName())
                .determinant(dto.getDeterminant())
                .address(dto.getAddress())
                .city(dto.getCity())
                .state(dto.getState())
                .zipCode(dto.getZipCode())
                .format(dto.getFormat())
                .storeType(dto.getStoreType())
                .managerName(dto.getManagerName())
                .isActive(dto.getIsActive())
                .openingDate(dto.getOpeningDate())
                .timezone(dto.getTimezone())
                .businessHours(dto.getBusinessHours())
                .build();

        Determinant saved = determinantService.createDeterminant(determinant);
        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }

    /*
     * @PostMapping()
     * public ResponseEntity<Determinant> createDeterminant(@RequestBody @Valid
     * Determinant determinant) {
     * Determinant saved = determinantService.createDeterminant(determinant);
     * return new ResponseEntity<>(saved, HttpStatus.CREATED);
     * }
     */

    @GetMapping
    // @PreAuthorize("hasRole('ADMIN') or hasRole('SELLER')")
    public ResponseEntity<List<Determinant>> getAllDeterminants() {
        return ResponseEntity.ok(determinantService.getAllDeterminants());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Determinant> getDeterminantById(@PathVariable String id) {
        return determinantService.getDeterminantById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Determinant> updateDeterminant(@PathVariable String id,
            @RequestBody @Valid Determinant determinant) {
        Determinant updated = determinantService.updateDeterminant(id, determinant);
        return updated != null ? ResponseEntity.ok(updated)
                : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    // @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Void> deleteDeterminant(@PathVariable String id) {
        return determinantService.deleteDeterminant(id)
                ? ResponseEntity.noContent().build()
                : ResponseEntity.notFound().build();
    }

}