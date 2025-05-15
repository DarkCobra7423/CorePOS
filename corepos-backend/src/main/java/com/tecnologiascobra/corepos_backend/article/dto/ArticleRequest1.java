/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.tecnologiascobra.corepos_backend.article.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.PositiveOrZero;
import java.math.BigDecimal;

import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.NotBlank;

/**
 *
 * @author darkcobra7423
 */

public class ArticleRequest1 {

    @NotBlank(message = "El nombre del artículo no puede estar vacío")
    private String name;

    @Positive(message = "El precio debe ser un valor positivo")
    private BigDecimal price;

    @NotBlank(message = "El código UPC no puede estar vacío")
    private String upc;

    @NotBlank(message = "El número de artículo no puede estar vacío")
    private String itemNumber;

    private String size;
    private String color;

    @Positive(message = "El departamento debe ser un número positivo")
    private int department;

    // @PositiveOrZero(message = "El inventario de bodega no puede ser negativo")
    private int backroomStock;

    // @PositiveOrZero(message = "El stock total no puede ser negativo")
    private int totalStock;

    // @PositiveOrZero(message = "El stock en piso de venta no puede ser negativo")
    private int salesFloorStock;

    @PositiveOrZero(message = "La cantidad por paquete no puede ser negativa")
    private int packageQuantity;

    @PositiveOrZero(message = "El costo no puede ser negativo")
    private BigDecimal previousPrice;

    @PositiveOrZero(message = "El costo no puede ser negativo")
    private BigDecimal cost;

    // Getters y Setters

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public String getUpc() {
        return upc;
    }

    public void setUpc(String upc) {
        this.upc = upc;
    }

    public String getItemNumber() {
        return itemNumber;
    }

    public void setItemNumber(String itemNumber) {
        this.itemNumber = itemNumber;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public int getDepartment() {
        return department;
    }

    public void setDepartment(int department) {
        this.department = department;
    }

    public int getBackroomStock() {
        return backroomStock;
    }

    public void setBackroomStock(int backroomStock) {
        this.backroomStock = backroomStock;
    }

    public int getTotalStock() {
        return totalStock;
    }

    public void setTotalStock(int totalStock) {
        this.totalStock = totalStock;
    }

    public int getSalesFloorStock() {
        return salesFloorStock;
    }

    public void setSalesFloorStock(int salesFloorStock) {
        this.salesFloorStock = salesFloorStock;
    }

    public int getPackageQuantity() {
        return packageQuantity;
    }

    public void setPackageQuantity(int packageQuantity) {
        this.packageQuantity = packageQuantity;
    }

    public BigDecimal getPreviousPrice() {
        return previousPrice;
    }

    public void setPreviousPrice(BigDecimal previousPrice) {
        this.previousPrice = previousPrice;
    }

    public BigDecimal getCost() {
        return cost;
    }

    public void setCost(BigDecimal cost) {
        this.cost = cost;
    }
}
