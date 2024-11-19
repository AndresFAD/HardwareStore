package com.backend.backend.controllers;

import com.backend.backend.models.Product;
import com.backend.backend.services.ProductService;
import org.antlr.v4.runtime.misc.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/hardwarestore")
public class ProductController {

    private final ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping(path = "products")
    public ResponseEntity<List<Product>> getAllProducts() {
        List<Product> products = productService.findAllProducts();
        return ResponseEntity.ok(products);
    }

    @PostMapping(path = "product")
    public ResponseEntity<Product> addProduct(@RequestParam("title") @NotNull String title,
                                              @RequestParam("description") @NotNull String description,
                                              @RequestParam("category") @NotNull String category,
                                              @RequestParam("price") float price,
                                              @RequestParam(value = "image", required = false) MultipartFile image) {
        Product product = new Product(title, description, category, price);
        if (image != null && !image.isEmpty()) {
            try {
                product.setImage(image.getBytes());
            } catch (IOException e) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
            }
        }

        Product createdProduct = productService.addProduct(product);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdProduct);
    }

    @PatchMapping(path = "product/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long id,
                                                 @RequestParam("title") String title,
                                                 @RequestParam("description") String description,
                                                 @RequestParam("category") String category,
                                                 @RequestParam("price") float price,
                                                 @RequestParam(value = "image", required = false) MultipartFile image) {
        Product product = new Product(title, description, category, price);
        if (image != null && !image.isEmpty()) {
            try {
                product.setImage(image.getBytes());
            } catch (IOException e) {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
            }
        }

        Optional<Product> updatedProduct = productService.updateProduct(id, product);
        return updatedProduct.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND).build());
    }

    @DeleteMapping(path = "product/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable Long id) {
        productService.deleteProduct(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    @GetMapping(path = "product/search")
    public ResponseEntity<List<Product>> searchProductByTitle(@RequestParam("query") String query) {
        List<Product> products = productService.searchByTitle(query);
        return ResponseEntity.ok(products);
    }
}
