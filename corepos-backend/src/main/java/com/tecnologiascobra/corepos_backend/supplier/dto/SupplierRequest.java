package com.tecnologiascobra.corepos_backend.supplier.dto;

import java.time.LocalDate;

import lombok.Data;

@Data
public class SupplierRequest {

    // private String idSuplier;
    private String name;
    private String contactName;
    private String email;
    private String phone;

    private String rfc;

    private boolean isActive;
    private LocalDate createdAt;

    private String street;
    private String city;
    private String state;
    private String zipCode;

}
