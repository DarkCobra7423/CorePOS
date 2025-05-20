package com.tecnologiascobra.corepos_backend.config;

// Importa la anotación para leer valores desde application.properties
import org.springframework.beans.factory.annotation.Value;

// Marca esta clase como una clase de configuración de Spring
import org.springframework.context.annotation.Configuration;

// Importa las clases necesarias para configurar CORS
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration // Esta anotación indica que esta clase contiene configuración para Spring
public class WebConfig implements WebMvcConfigurer {

    // Inyecta el valor definido en application.properties (ej:
    // app.urlbase=http://localhost:5173)
    @Value("${app.urlbase}")
    private String urlBase;

    // Sobrescribimos el método para agregar configuración de CORS
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") // Aplica la configuración de CORS a todos los endpoints del backend
                .allowedOrigins(urlBase) // Permite peticiones solo desde el origen especificado en la propiedad
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Métodos HTTP permitidos
                .allowedHeaders("*"); // Permitir cualquier encabezado
    }
}