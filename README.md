# CorePOS Backend

CorePOS es un sistema de punto de venta (POS) modular y escalable, diseñado como un ERP ligero para pequeñas y medianas empresas. Este backend está construido con **Spring Boot 3** y utiliza **MongoDB** como base de datos NoSQL.

## 🚀 Objetivos

- Proveer un sistema centralizado para gestión de productos, ventas, clientes y más.
- Facilitar futuras migraciones hacia una arquitectura de microservicios.
- Ser adaptable a diferentes tipos de negocios (retail, servicios, etc).

## 🧱 Tecnologías utilizadas

- Java 17
- Spring Boot 3
- Spring Data MongoDB
- REST API
- Swagger / OpenAPI
- Validación con `javax.validation`

## 📦 Módulos planificados

- [x] Gestión de productos (CRUD)
- [ ] Gestión de ventas
- [ ] Inventario
- [ ] Clientes
- [ ] Autenticación y roles (Spring Security + JWT)
- [ ] Reportes

## 📄 Estructura del proyecto

corepos-backend/
├── producto/
│ ├── controller/
│ ├── service/
│ ├── repository/
│ ├── model/
│ └── dto/
└── CoreposApplication.java


## ⚙️ Requisitos

- Java 17+
- Maven
- MongoDB (local o en la nube)

## 🚧 Estado

Actualmente en desarrollo. Primer módulo en progreso: **gestión de productos**.

## 💡 Autor

Proyecto personal desarrollado por [Tu Nombre o Usuario] con fines de aprendizaje y evolución hacia un ERP moderno.


