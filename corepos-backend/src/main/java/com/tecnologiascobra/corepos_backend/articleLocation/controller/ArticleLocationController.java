package com.tecnologiascobra.corepos_backend.articleLocation.controller;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.tecnologiascobra.corepos_backend.articleLocation.dto.ArticleLocationRequest;
import com.tecnologiascobra.corepos_backend.articleLocation.model.ArticleLocation;
import com.tecnologiascobra.corepos_backend.articleLocation.service.ArticleLocationService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/article-locations")
@RequiredArgsConstructor
public class ArticleLocationController {

    private final ArticleLocationService service;

    @PostMapping
    public ResponseEntity<ArticleLocation> createLocation(@RequestBody @Valid ArticleLocationRequest request) {
        ArticleLocation saved = service.createLocation(request);
        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<ArticleLocation>> getAll() {
        return ResponseEntity.ok(service.getAllLocations());
    }

    @GetMapping("/store/{storeId}")
    public ResponseEntity<List<ArticleLocation>> getByStore(@PathVariable String storeId) {
        return ResponseEntity.ok(service.getByStore(storeId));
    }

    /*
     * @GetMapping("/{upc}/{storeId}")
     * public ResponseEntity<ArticleLocation> getByUpcAndStore(
     * 
     * @PathVariable String upc,
     * 
     * @PathVariable String storeId) {
     * return service.getByUpcAndStore(upc, storeId)
     * .map(ResponseEntity::ok)
     * .orElse(ResponseEntity.notFound().build());
     * }
     */

    @GetMapping("/{upc}/{storeId}")
    public ResponseEntity<ArticleLocation> getByUpcAndStore(
            @PathVariable String upc,
            @PathVariable String storeId) {
        return service.getByUpcAndStore(upc, storeId)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable String id) {
        return service.deleteLocation(id)
                ? ResponseEntity.noContent().build()
                : ResponseEntity.notFound().build();
    }
}