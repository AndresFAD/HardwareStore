package com.backend.backend.controllers;

import com.backend.backend.models.Product;
import com.backend.backend.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path="api/hardwarestore")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping(path = "products")
    public List<Product> getAllProducts(){
        return productService.findAllProducts();
    }

    @PostMapping(path = "product")
    public Product addProduct(@RequestParam("title") String title,
                              @RequestParam("description") String description,
                              @RequestParam("category") String category,
                              @RequestParam("price") float price,
                              @RequestParam(value = "image", required = false) MultipartFile image){

        Product product = new Product();
        product.setTitle(title);
        product.setDescription(description);
        product.setCategory(category);
        product.setPrice(price);

        if (image != null && !image.isEmpty()) {
            try {
                product.setImage(image.getBytes());
            } catch (IOException e) {
                return null;
            }
        }



        return productService.addProduct(product);
    }

    @PatchMapping(path = "product/{id}")
    public Optional<Product> updateProduct(@PathVariable Long id,@RequestBody Product product){
        return productService.updateProduct(id, product);
    }
    @DeleteMapping(path = "product/{id}")
    public void deleteProduct(@PathVariable Long id){
        productService.deleteProduct(id);
    }

    @GetMapping(path = "product/search")
    public List<Product> searchProductByTitle(@RequestParam("query") String query) {
        return productService.searchByTitle(query);
    }
}
