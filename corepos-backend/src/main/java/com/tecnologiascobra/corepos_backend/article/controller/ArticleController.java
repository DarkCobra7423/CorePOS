/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.tecnologiascobra.corepos_backend.article.controller;

import com.tecnologiascobra.corepos_backend.article.model.Article;
import com.tecnologiascobra.corepos_backend.article.service.ArticleService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import com.tecnologiascobra.corepos_backend.article.dto.ArticleRequest;

import lombok.RequiredArgsConstructor;
import java.util.List;
import java.util.Optional;

/**
 *
 * @author darkcobra7423
 */

@RestController
@RequestMapping("/api/articles")
@Validated
// @CrossOrigin(origins = "http://localhost:5173")
@RequiredArgsConstructor
public class ArticleController {

    private final ArticleService articleService;

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Article> createArticle(@RequestBody @Valid ArticleRequest dto) {
        Article article = Article.builder()
                .name(dto.getName())
                .price(dto.getPrice())
                .upc(dto.getUpc())
                .itemNumber(dto.getItemNumber())
                .size(dto.getSize())
                .color(dto.getColor())
                .department(dto.getDepartment())
                .backroomStock(dto.getBackroomStock())
                .minStock(dto.getMinStock())
                .maxStock(dto.getMaxStock())
                .salesFloorStock(dto.getSalesFloorStock())
                .packageQuantity(dto.getPackageQuantity())
                .previousPrice(dto.getPreviousPrice())
                .cost(dto.getCost())
                .build();

        Article guardado = articleService.createArticle(article);
        return new ResponseEntity<>(guardado, HttpStatus.CREATED);
    }

    @GetMapping
    @PreAuthorize("hasRole('ADMIN') or hasRole('SELLER')")
    public ResponseEntity<List<Article>> getAllArticles() {
        return ResponseEntity.ok(articleService.getAllArticles());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Article> obtenerArticlePorId(@PathVariable String id) {
        return articleService.getArticleById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Article> actualizarArticle(@PathVariable String id, @RequestBody @Valid Article article) {
        Article actualizado = articleService.updateArticle(id, article);
        return actualizado != null ? ResponseEntity.ok(actualizado)
                : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Void> eliminarArticle(@PathVariable String id) {
        return articleService.deleteArticle(id)
                ? ResponseEntity.noContent().build()
                : ResponseEntity.notFound().build();
    }

    @GetMapping("/search")
    // @PreAuthorize("hasRole('ADMIN') or hasRole('SELLER')")
    public ResponseEntity<Article> search(@RequestParam String value) {
        return articleService.findByValue(value)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/upc")
    // @PreAuthorize("hasRole('ADMIN') or hasRole('SELLER')")
    public ResponseEntity<Article> getUpc(@RequestParam String value) {
        return articleService.findByValue(value)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}