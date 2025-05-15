package com.tecnologiascobra.corepos_backend.auth.respository;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.tecnologiascobra.corepos_backend.auth.entity.UserInfo;
import java.util.Optional;

public interface UserInfoRepository extends MongoRepository<UserInfo, Integer> {
    Optional<UserInfo> findByEmail(String email);
}