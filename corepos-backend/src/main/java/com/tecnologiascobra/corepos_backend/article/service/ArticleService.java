/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.tecnologiascobra.corepos_backend.article.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tecnologiascobra.corepos_backend.article.model.Article;
import com.tecnologiascobra.corepos_backend.article.repository.ArticleRepository;

import java.util.List;
import java.util.Optional;

/**
 *
 * @author darkcobra7423
 */

@Service
public class ArticleService {

    @Autowired
    private ArticleRepository articleRepository;

    // Crear article
    /*
     * public Article crearArticle(Article article) {
     * return articleRepository.save(article);
     * }
     */
    public Article createArticle(Article article) {
        return articleRepository.save(article);
    }

    // Obtener todos los articles
    public List<Article> getAllArticles() {
        return articleRepository.findAll();
    }

    // Obtener un article por id
    public Optional<Article> getArticleById(String id) {
        return articleRepository.findById(id);
    }

    // Actualizar article
    public Article updateArticle(String id, Article article) {
        if (articleRepository.existsById(id)) {
            article.setId(id);
            return articleRepository.save(article);
        }
        return null;
    }

    // Eliminar article
    public boolean deleteArticle(String id) {
        if (articleRepository.existsById(id)) {
            articleRepository.deleteById(id);
            return true;
        }
        return false;
    }

    public Optional<Article> findByValue(String value) {
        // Intenta buscar por ID
        Optional<Article> article = articleRepository.findById(value);
        if (article.isPresent())
            return article;

        // Intenta buscar por UPC
        article = articleRepository.findByUpc(value);
        if (article.isPresent())
            return article;

        // Intenta buscar por Item Number
        return articleRepository.findByItemNumber(value);
    }

}

/*
 * 2. Artículo sin ubicación fija (flexible)
 * 
 * El producto puede estar en distintos BINs o ubicaciones del almacén, y no en
 * una ubicación "fija".
 * 
 * Útil en sistemas WMS (Warehouse Management Systems).
 */