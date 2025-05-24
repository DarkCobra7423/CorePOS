/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.tecnologiascobra.corepos_backend.department.dto;

import lombok.Data;

/**
 *
 * @author darkcobra7423
 */
@Data
public class DepartmentRequest {
    
    private String id;
    private int num;
    private String name;
    private int division;
}
