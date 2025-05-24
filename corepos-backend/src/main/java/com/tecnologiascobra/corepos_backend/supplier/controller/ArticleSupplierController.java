package com.tecnologiascobra.corepos_backend.supplier.controller;

import com.tecnologiascobra.corepos_backend.supplier.model.ArticleSupplier;
import com.tecnologiascobra.corepos_backend.supplier.service.ArticleSupplierService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/article-suppliers")
@RequiredArgsConstructor
public class ArticleSupplierController {

    private final ArticleSupplierService service;

    @PostMapping
    public ResponseEntity<ArticleSupplier> create(@RequestBody ArticleSupplier request) {
        return ResponseEntity.ok(service.create(request));
    }

    @GetMapping
    public ResponseEntity<List<ArticleSupplier>> getAll() {
        return ResponseEntity.ok(service.getAll());
    }

    @GetMapping("/by-upc/{upc}")
    public ResponseEntity<List<ArticleSupplier>> getByUpc(@PathVariable String upc) {
        return ResponseEntity.ok(service.getByUpc(upc));
    }

    @GetMapping("/by-numArticle/{numArticle}")
    public ResponseEntity<List<ArticleSupplier>> getByNumArticle(@PathVariable String numArticle) {
        return ResponseEntity.ok(service.getByNumArticle(numArticle));
    }

    @GetMapping("/by-supplier/{supplierId}")
    public ResponseEntity<List<ArticleSupplier>> getBySupplier(@PathVariable String supplierId) {
        return ResponseEntity.ok(service.getBySupplierId(supplierId));
    }
}