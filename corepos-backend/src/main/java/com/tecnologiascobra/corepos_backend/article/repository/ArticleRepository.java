/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.tecnologiascobra.corepos_backend.article.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.tecnologiascobra.corepos_backend.article.model.Article;

/**
 *
 * @author darkcobra7423
 */

@Repository
public interface ArticleRepository extends MongoRepository<Article, String> {
    // Aquí puedes agregar consultas personalizadas si las necesitas
}