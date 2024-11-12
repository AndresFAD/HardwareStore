package com.backend.backend.repositories;

import com.backend.backend.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query(value = "SELECT * FROM Products p WHERE p.title LIKE %:title%", nativeQuery = true)
    List<Product> findByTitle(String title);
}
