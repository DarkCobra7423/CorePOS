/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.tecnologiascobra.corepos_backend.terminals.controller;

import com.tecnologiascobra.corepos_backend.determinant.model.Determinant;
import com.tecnologiascobra.corepos_backend.determinant.model.DeterminantSummary;
import com.tecnologiascobra.corepos_backend.determinant.repository.DeterminantRepository;
import com.tecnologiascobra.corepos_backend.terminals.dto.TerminalsRequest;
import com.tecnologiascobra.corepos_backend.terminals.model.Terminals;
import com.tecnologiascobra.corepos_backend.terminals.repository.TerminalsRepository;
import com.tecnologiascobra.corepos_backend.terminals.service.TerminalsService;
import jakarta.validation.Valid;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author darkcobra7423
 */
@RestController
@RequestMapping("/api/terminals")
@Validated
// @CrossOrigin(origins = "http://localhost:5173")
@RequiredArgsConstructor
public class TerminalsController {

        private final TerminalsService terminalService;
        private final DeterminantRepository determinantRepository;

        @PostMapping
        public ResponseEntity<Terminals> createTerminal(@RequestBody @Valid TerminalsRequest dto) {

                // Buscar el determinant por UPC

                Determinant determinant = determinantRepository
                                .findByDeterminant(dto.getDeterminant().getDeterminant())
                                .orElseThrow(() -> new RuntimeException("Determinant not found"));

                DeterminantSummary storeSummary = new DeterminantSummary(
                                // determinant.getId(), // Aquí obtenemos el '_id' del determinante
                                determinant.getName(),
                                determinant.getDeterminant()); // Nombre del determinante

                Terminals terminal = Terminals.builder()
                                .numTerminal(dto.getNumTerminal())
                                .determinant(storeSummary) // 👈 Aquí lo incluyes
                                .type(dto.getType())
                                .softwareVersion(dto.getSoftwareVersion())
                                .status(dto.getStatus())
                                .lastSync(dto.getLastSync())
                                .deviceToken(dto.getDeviceToken())
                                .timestamp(dto.getTimestamp())
                                .build();

                Terminals saved = terminalService.createTerminal(terminal);
                return new ResponseEntity<>(saved, HttpStatus.CREATED);
        }

        @GetMapping
        // @PreAuthorize("hasRole('ADMIN') or hasRole('SELLER')")
        public ResponseEntity<List<Terminals>> getAllTerminalss() {
                return ResponseEntity.ok(terminalService.getAllTerminal());
        }

        /*
         * @GetMapping("/{id}")
         * public ResponseEntity<Terminals> getTerminalsById(@PathVariable String id) {
         * return terminalService.getTerminalsById(id)
         * .map(ResponseEntity::ok)
         * .orElse(ResponseEntity.notFound().build());
         * }
         */

        @PutMapping("/{id}")
        public ResponseEntity<Terminals> updateTerminal(@PathVariable String id,
                        @RequestBody @Valid Terminals terminal) {
                Terminals updated = terminalService.updateTerminal(id, terminal);
                return updated != null ? ResponseEntity.ok(updated)
                                : ResponseEntity.notFound().build();
        }

        @DeleteMapping("/{id}")
        // @PreAuthorize("hasRole('ADMIN')")
        public ResponseEntity<Void> deleteTerminal(@PathVariable String id) {
                return terminalService.deleteTerminal(id)
                                ? ResponseEntity.noContent().build()
                                : ResponseEntity.notFound().build();
        }

}
