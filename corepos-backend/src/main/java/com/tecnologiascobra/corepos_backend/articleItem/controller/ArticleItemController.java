package com.tecnologiascobra.corepos_backend.articleItem.controller;

import com.tecnologiascobra.corepos_backend.article.model.Article;
import com.tecnologiascobra.corepos_backend.article.repository.ArticleRepository;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.method.P;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tecnologiascobra.corepos_backend.articleItem.model.ArticleItem;
import com.tecnologiascobra.corepos_backend.articleItem.dto.ArticleItemRequest;
import com.tecnologiascobra.corepos_backend.articleItem.service.ArticleItemService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/article-item")
@Validated
@RequiredArgsConstructor
public class ArticleItemController {

    private final ArticleItemService articleItemService;
    private final ArticleRepository articleRepository;

    @PostMapping
    public ResponseEntity<ArticleItem> createArticleItem(@RequestBody @Valid ArticleItemRequest dto) {

        Article art = articleRepository.findByUpc(dto.getUpc())
                .orElseThrow(() -> new RuntimeException("Article not found"));

        ArticleItem articleItem = ArticleItem.builder()
                .upc(art.getUpc())
                .numItem(dto.getNumItem())
                .sku(dto.getSku())
                .build();

        ArticleItem createdArticleItem = articleItemService.createArticleItem(articleItem);
        return new ResponseEntity<>(createdArticleItem, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<ArticleItem>> getAllArticleItems() {
        List<ArticleItem> articleItems = articleItemService.getAllArticleItems();
        return ResponseEntity.ok(articleItems);
    }
}
