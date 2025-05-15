/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.tecnologiascobra.corepos_backend.article.controller;

import com.tecnologiascobra.corepos_backend.article.model.Article;
import com.tecnologiascobra.corepos_backend.article.service.ArticleService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import com.tecnologiascobra.corepos_backend.article.dto.ArticleRequest;

import java.util.List;
import java.util.Optional;

/**
 *
 * @author darkcobra7423
 */
@RestController
@RequestMapping("/api/articles")
@Validated
public class ArticleController {

    @Autowired
    private ArticleService articleService;

    @Operation(summary = "Crear un nuevo artículo")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "201", description = "Artículo creado exitosamente"),
            @ApiResponse(responseCode = "400", description = "Datos inválidos")
    })
    @PreAuthorize("hasRole('ADMIN')") // Formato consistente sin ROLE_
    @PostMapping
    public ResponseEntity<Article> createArticle(@RequestBody @Valid ArticleRequest dto) {
        Article article = new Article(dto.getName(), dto.getPrice(),
                dto.getUpc(), dto.getItemNumber(), dto.getSize(),
                dto.getColor(), dto.getDepartment(),
                dto.getBackroomStock(), dto.getTotalStock(),
                dto.getSalesFloorStock(), dto.getPackageQuantity(),
                dto.getPreviousPrice(), dto.getCost());

        Article guardado = articleService.createArticle(article);
        return new ResponseEntity<>(guardado, HttpStatus.CREATED);
    }

    @Operation(summary = "Obtener todos los artículos")
    @PreAuthorize("hasRole('ADMIN') or hasRole('SELLER')") // Mismo formato
    @GetMapping
    public ResponseEntity<List<Article>> getAllArticles() {
        List<Article> articles = articleService.getAllArticles();
        return new ResponseEntity<>(articles, HttpStatus.OK);
    }

    @Operation(summary = "Obtener un artículo por ID")
    @ApiResponses(value = {
            @ApiResponse(responseCode = "200", description = "Artículo encontrado"),
            @ApiResponse(responseCode = "404", description = "Artículo no encontrado")
    })
    @GetMapping("/{id}")
    public ResponseEntity<Article> obtenerArticlePorId(@PathVariable String id) {
        Optional<Article> article = articleService.getArticleById(id);
        return article.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @Operation(summary = "Actualizar un artículo")
    @PutMapping("/{id}")
    public ResponseEntity<Article> actualizarArticle(@PathVariable String id, @RequestBody @Validated Article article) {
        Article articleActualizado = articleService.updateArticle(id, article);
        return articleActualizado != null ? new ResponseEntity<>(articleActualizado, HttpStatus.OK)
                : ResponseEntity.notFound().build();
    }

    @Operation(summary = "Eliminar un artículo")
    @PreAuthorize("hasRole('ADMIN')") // Mismo formato
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarArticle(@PathVariable String id) {
        return articleService.deleteArticle(id) ? ResponseEntity.noContent().build()
                : ResponseEntity.notFound().build();
    }
}