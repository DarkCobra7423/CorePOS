/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.tecnologiascobra.corepos_backend.article.model;

import lombok.Data;

/**
 *
 * @author darkcobra7423
 */
@Data
public class ArticleItem {
    private String articleId;
    
    private String upc;
    
    public ArticleItem(String articleId, String upc){
        this.articleId = articleId;
        this.upc = upc;
    }
    
    
    
}
