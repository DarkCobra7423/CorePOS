/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.tecnologiascobra.corepos_backend.promotion.dto;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import lombok.Data;

/**
 *
 * @author darkcobra7423
 */
@Data
public class PromotionRequest {
    //private String id;
    private String articleUpc;
    private String name;
    private int buyQuantity;
    private LocalDateTime validity;
    private BigDecimal bundlePrice;
}
