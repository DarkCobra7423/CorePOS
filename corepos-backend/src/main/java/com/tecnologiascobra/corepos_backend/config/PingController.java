package com.tecnologiascobra.corepos_backend.config;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PingController {

    @GetMapping("/api/ping")
    public String ping() {
        return "pong";
    }
}
/*
 * import org.springframework.web.bind.annotation.CrossOrigin;
 * import org.springframework.web.bind.annotation.GetMapping;
 * import org.springframework.web.bind.annotation.RestController;
 * 
 * @CrossOrigin(origins = "http://localhost:5173")
 * 
 * @RestController
 * public class PingController {
 * 
 * @GetMapping("/api/ping")
 * public String ping() {
 * return "pong";
 * }
 * }
 */