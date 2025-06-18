/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.tecnologiascobra.corepos_backend.article.controller;

import com.tecnologiascobra.corepos_backend.article.model.Article;
import com.tecnologiascobra.corepos_backend.article.repository.ArticleRepository;
import com.tecnologiascobra.corepos_backend.article.service.ArticleService;
import com.tecnologiascobra.corepos_backend.department.model.Department;
import com.tecnologiascobra.corepos_backend.department.repository.DepartmentRepository;
import com.tecnologiascobra.corepos_backend.articleItem.model.ArticleItem;
import com.tecnologiascobra.corepos_backend.articleItem.repository.ArticleItemRepository;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import com.tecnologiascobra.corepos_backend.article.dto.ArticleRequest;
import com.tecnologiascobra.corepos_backend.article.model.ArticleItemDTO;

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
    private final DepartmentRepository departmentRepository;
    private final ArticleItemRepository articleItemRepository;

    @PostMapping
    public ResponseEntity<Article> createArticle(@RequestBody @Valid ArticleRequest dto) {

        /*
         * ArticleItem itemNumber =
         * articleItemRepository.findByNumItem(dto.getItemNumber())
         * .orElseThrow(() -> new RuntimeException("Article Item not found"));
         */
        Department department = departmentRepository.findByNum(dto.getDepartment())
                .orElseThrow(() -> new RuntimeException("Department not found"));

        Department dep = new Department(department.getNum());

        Article.Stock stock = Article.Stock.builder()
                .backroomStock(dto.getBackroomStock())
                .salesFloorStock(dto.getSalesFloorStock())
                .minStock(dto.getMinStock())
                .maxStock(dto.getMaxStock())
                .build();

        Article.Taxes taxes = null;
        if (dto.getTaxes() != null) {
            taxes = Article.Taxes.builder()
                    .iva(Article.Taxes.Tax.builder()
                            .applies(dto.getTaxes().getIva().isApplies())
                            .rate(dto.getTaxes().getIva().getRate())
                            .build())
                    .ieps(Article.Taxes.Tax.builder()
                            .applies(dto.getTaxes().getIeps().isApplies())
                            .rate(dto.getTaxes().getIeps().getRate())
                            .build())
                    .build();
        }

        Article article = Article.builder()
                .name(dto.getName())
                .price(dto.getPrice())
                .upc(dto.getUpc())
                // .itemNumber(itemNumber)
                .size(dto.getSize())
                .color(dto.getColor())
                .department(dep)
                .stock(stock)
                .taxes(taxes)
                .packageQuantity(dto.getPackageQuantity())
                .previousPrice(dto.getPreviousPrice())
                .cost(dto.getCost())
                .active(true)
                .build();

        Article saved = articleService.createArticle(article);
        return new ResponseEntity<>(saved, HttpStatus.CREATED);
    }

    /*
     * @GetMapping
     * public ResponseEntity<List<Article>> getAllArticles() {
     * return ResponseEntity.ok(articleService.getAllArticles());
     * }
     */
    @PutMapping("/{id}")
    public ResponseEntity<Article> actualizarArticle(@PathVariable String id, @RequestBody @Valid Article article) {
        Article actualizado = articleService.updateArticle(id, article);
        return actualizado != null ? ResponseEntity.ok(actualizado)
                : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarArticle(@PathVariable String id) {
        return articleService.deleteArticle(id)
                ? ResponseEntity.noContent().build()
                : ResponseEntity.notFound().build();
    }

    /*
     * @GetMapping("/{id}")
     * public ResponseEntity<ArticleItemDTO> getArticleWithNumItem(@PathVariable
     * String id) {
     * 
     * return articleService.getArticleById(id).map(article -> {
     * Optional<ArticleItem> articleItemOpt =
     * articleItemRepository.findFirstByUpc_Id(article.getId());
     * System.out.println("¿Encontró ArticleItem? -> " +
     * articleItemOpt.isPresent());
     * 
     * ArticleItemDTO dto = new ArticleItemDTO();
     * dto.setId(article.getId());
     * dto.setName(article.getName());
     * dto.setUpc(article.getUpc());
     * dto.setDepartment(article.getDepartment());
     * dto.setSize(article.getSize());
     * dto.setColor(article.getColor());
     * dto.setPackageQuantity(article.getPackageQuantity());
     * dto.setTaxes(article.getTaxes());
     * dto.setPreviousPrice(article.getPreviousPrice());
     * dto.setPrice(article.getPrice());
     * dto.setCost(article.getCost());
     * dto.setActive(article.isActive());
     * dto.setStock(article.getStock());
     * dto.setPriceWithTaxes(article.getPriceWithTaxes());
     * dto.setTotalStock(article.getTotalStock());
     * dto.setMargin(article.getMargin());
     * dto.setNumItem(articleItemOpt
     * .map(ArticleItem::getNumItem).orElse(null));
     * 
     * return ResponseEntity.ok(dto);
     * }).orElse(ResponseEntity.notFound().build());
     * }
     */

    @GetMapping("/search")
    public ResponseEntity<ArticleItemDTO> search(@RequestParam String value) {

        return articleService.findByValue(value).map(article -> {

            Optional<ArticleItem> articleItemOpt = articleItemRepository.findFirstByUpc(article.getUpc());
            System.out.println("¿Encontró ArticleItem? -> " + articleItemOpt.isPresent());

            System.out.println("Article name: " + article.getName());
            System.out.println("Article UPC: " + article.getUpc());
            System.out.println(
                    "ArticleItem.numItem: " + articleItemOpt.map(ArticleItem::getNumItem).orElse("NO ENCONTRADO"));

            ArticleItemDTO dto = new ArticleItemDTO();
            dto.setId(article.getId());
            dto.setName(article.getName());
            dto.setUpc(article.getUpc());
            dto.setDepartment(article.getDepartment());
            dto.setSize(article.getSize());
            dto.setColor(article.getColor());
            dto.setPackageQuantity(article.getPackageQuantity());
            dto.setTaxes(article.getTaxes());
            dto.setPreviousPrice(article.getPreviousPrice());
            dto.setPrice(article.getPrice());
            dto.setCost(article.getCost());
            dto.setActive(article.isActive());
            dto.setStock(article.getStock());
            dto.setPriceWithTaxes(article.getPriceWithTaxes());
            dto.setTotalStock(article.getTotalStock());
            dto.setMargin(article.getMargin());
            dto.setNumItem(articleItemOpt
                    .map(ai -> ai.getNumItem()).orElse(null));

            return ResponseEntity.ok(dto);
        }).orElse(ResponseEntity.notFound().build());
    }

    /*
     * @GetMapping("/upc")
     * public ResponseEntity<Article> getUpc(@RequestParam String value) {
     * return articleService.findByValue(value)
     * .map(ResponseEntity::ok)
     * .orElse(ResponseEntity.notFound().build());
     * }
     */
}
