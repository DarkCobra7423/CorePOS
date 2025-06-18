/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.tecnologiascobra.corepos_backend.promotion.controller;

import com.tecnologiascobra.corepos_backend.article.model.Article;
import com.tecnologiascobra.corepos_backend.article.repository.ArticleRepository;
import com.tecnologiascobra.corepos_backend.promotion.dto.PromotionRequest;
import com.tecnologiascobra.corepos_backend.article.model.ArticleItemDTO;
import com.tecnologiascobra.corepos_backend.promotion.model.Promotion;
import com.tecnologiascobra.corepos_backend.promotion.repository.PromotionRepository;
import com.tecnologiascobra.corepos_backend.promotion.service.PromotionService;
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
@RequestMapping("/api/promotion")
@Validated
// @CrossOrigin(origins = "http://localhost:5173")
@RequiredArgsConstructor
public class PromotionController {

    private final PromotionService promotionService;
    private final ArticleRepository articleRepository;

    @PostMapping
    public ResponseEntity<Promotion> createPromotion(@RequestBody @Valid PromotionRequest dto) {

        // Buscar el artículo por UPC
        Article article = articleRepository.findByUpc(dto.getArticleUpc())
                .orElseThrow(() -> new RuntimeException("Article not found"));

        ArticleItemDTO articleItem = new ArticleItemDTO(article.getId(), article.getUpc());

        Promotion promotion = Promotion.builder()
                .article(articleItem) // 👈 Aquí lo incluyes
                .name(dto.getName())
                .buyQuantity(dto.getBuyQuantity())
                .validity(dto.getValidity())
                .bundlePrice(dto.getBundlePrice())
                .build();

        Promotion saved = promotionService.createPromotion(promotion);
        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }

    @GetMapping
    // @PreAuthorize("hasRole('ADMIN') or hasRole('SELLER')")
    public ResponseEntity<List<Promotion>> getAllPromotions() {
        return ResponseEntity.ok(promotionService.getAllPromotion());
    }

    /*
     * @GetMapping("/{id}")
     * public ResponseEntity<Promotion> getPromotionById(@PathVariable String id) {
     * return promotionService.getPromotionById(id)
     * .map(ResponseEntity::ok)
     * .orElse(ResponseEntity.notFound().build());
     * }
     */
    @GetMapping("/{upc}")
    public ResponseEntity<Promotion> getPromotionByUpc(@PathVariable String upc) {
        return promotionService.getPromotionByUpc(upc)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Promotion> updatePromotion(@PathVariable String id,
            @RequestBody @Valid Promotion promotion) {
        Promotion updated = promotionService.updatePromotion(id, promotion);
        return updated != null ? ResponseEntity.ok(updated)
                : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    // @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Void> deletePromotion(@PathVariable String id) {
        return promotionService.deletePromotion(id)
                ? ResponseEntity.noContent().build()
                : ResponseEntity.notFound().build();
    }

    @GetMapping("/by-upc/{upc}/{quantity}")
    public ResponseEntity<Promotion> getPromotionByUpcAndQuantity(
            @PathVariable String upc,
            @PathVariable int quantity) {
        return promotionService.getApplicablePromotion(upc, quantity)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

}
