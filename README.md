# ERP CorePOS Backend & Frontend

CorePOS es un sistema de punto de venta (POS) modular y escalable, diseñado como un ERP ligero para pequeñas y medianas empresas. Este proyecto está compuesto por un backend desarrollado con Spring Boot 3 y una aplicación frontend construida con ReactJS para proporcionar una experiencia de usuario interactiva y dinámica. El backend utiliza MongoDB como base de datos NoSQL.

## 🚀 Objetivos
  - Proveer un sistema centralizado para gestión de productos, ventas, clientes y más.
  - Facilitar futuras migraciones hacia una arquitectura de microservicios.
  - Ser adaptable a diferentes tipos de negocios (retail, servicios, etc).
  - Ofrecer una interfaz de usuario intuitiva y dinámica con ReactJS.

## 🧱 Tecnologías utilizadas
### Backend

- Java 17
- Spring Boot 3
- Spring Data MongoDB
- REST API
- Swagger / OpenAPI
- Validación con javax.validation

### Frontend

- ReactJS
- Axios (para realizar peticiones HTTP al backend)
- React Router (para navegación)
- Material-UI o Bootstrap (para componentes UI)
- Redux (opcional, para manejo de estado global)

## 📦 Módulos planificados
### Backend
- Gestión de productos (CRUD)
- Gestión de ventas
- Inventario
- Clientes
- Autenticación y roles (Spring Security + JWT)
- Reportes

### Frontend

- Página de inicio (Dashboard)
- Gestión de productos (Mostrar productos, agregar, editar, eliminar)
- Gestión de ventas
- Inventario
- Gestión de clientes
- Autenticación (Login y registro)

## 📄 Estructura del proyecto

~~~
corepos/
├── corepos-backend/
│   ├── article/
│   │   ├── controller/
│   │   ├── service/
│   │   ├── repository/
│   │   ├── model/
│   │   └── dto/
│   └── CoreposApplication.java
├── corepos-frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ArticleList.js
│   │   │   ├── ArticleForm.js
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── Login.js
│   │   │   ├── ArticlePage.js
│   │   ├── services/
│   │   │   ├── ArticleService.js
│   └── package.json
└── README.md
~~~

## ⚙️ Requisitos
### Backend

- Java 17+
- Maven
- MongoDB (local o en la nube)

### Frontend

- Node.js (>= 14.0.0)
- npm o yarn

### 🚧 Estado

Actualmente en desarrollo. Primer módulo en progreso: gestión de productos. La interfaz frontend con ReactJS está en desarrollo, comenzando con la página de productos y su integración con el backend.

## 💡 Autor

Proyecto personal desarrollado por DarkCobra7423 con fines de aprendizaje y evolución hacia un ERP moderno, adaptado para empresas pequeñas y medianas.

### Desarrollador:
- [Carlos Daniel Angel Padilla (DarkCobra7423)](https://github.com/DarkCobra7423)