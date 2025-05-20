package com.tecnologiascobra.corepos_backend.sales.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tecnologiascobra.corepos_backend.article.model.Article;
import com.tecnologiascobra.corepos_backend.sales.model.Sales;
import com.tecnologiascobra.corepos_backend.sales.repository.SalesRepository;

@Service
public class SalesService {
    @Autowired
    private SalesRepository salesRepository;

    public Sales createSales(Sales sales) {
        return salesRepository.save(sales);
    }

    public Optional<Sales> getSalesById(String id) {
        return salesRepository.findById(id);
    }

    public List<Sales> getAllSales() {
        return salesRepository.findAll();
    }

    public Sales updateSales(String id, Sales sales) {
        if (salesRepository.existsById(id)) {
            sales.setId(id);
            return salesRepository.save(sales);
        }
        return null;
    }

    public boolean deleteSales(String id) {
        if (salesRepository.existsById(id)) {
            salesRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
