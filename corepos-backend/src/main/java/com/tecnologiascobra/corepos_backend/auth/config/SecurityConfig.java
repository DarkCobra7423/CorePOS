package com.tecnologiascobra.corepos_backend.auth.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
        httpSecurity
                .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers(
                                "/auth/welcome",
                                "/auth/addNewUser",
                                "/auth/**",
                                "/swagger-ui/**",
                                "/v3/api-docs/**",
                                "/swagger-ui.html"
                        ).permitAll()
                        .anyRequest().authenticated());

        return httpSecurity.build();
    }
}
    /*
     * @Bean
     * public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity)
     * throws Exception {
     * httpSecurity
     * .csrf(csrf -> csrf.disable())
     * .authorizeHttpRequests(auth -> auth
     * .requestMatchers("/auth/welcome", "/auth/addNewUser", "/auth/**",
     * "/swagger-ui/**",
     * "/v3/api-docs/**", "/swagger-ui.html")
     * .permitAll()
     * .anyRequest().authenticated())
     * .httpBasic(httpBasic -> {
     * }); // Autenticación básica (útil solo para pruebas o backoffice)
     * 
     * return httpSecurity.build();
     * }
     */
