package com.tecnologiascobra.corepos_backend.articleItem.model;

import com.tecnologiascobra.corepos_backend.article.model.Article;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "article_items")
public class ArticleItem {

    @Id
    private String id;
    private String upc;
    private String numItem;
    private String sku;

}
