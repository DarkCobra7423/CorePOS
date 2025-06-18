package com.tecnologiascobra.corepos_backend.articleItem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tecnologiascobra.corepos_backend.articleItem.model.ArticleItem;
import com.tecnologiascobra.corepos_backend.articleItem.repository.ArticleItemRepository;

@Service
public class ArticleItemService {

    @Autowired
    private ArticleItemRepository articleItemRepository;

    public ArticleItem createArticleItem(ArticleItem articleItem) {
        return articleItemRepository.save(articleItem);
    }

    public List<ArticleItem> getAllArticleItems() {
        return articleItemRepository.findAll();
    }
}
