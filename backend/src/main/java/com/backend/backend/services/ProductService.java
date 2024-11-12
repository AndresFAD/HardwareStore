package com.backend.backend.services;

import com.backend.backend.models.Product;
import com.backend.backend.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    @Autowired
    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public List<Product> findAllProducts() {
        return productRepository.findAll();
    }

    public Product addProduct(Product product) {
        return productRepository.save(product);
    }

    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }

    public Optional<Product> updateProduct(Long id ,Product product) {
        return Optional.ofNullable(productRepository.findById(id)
                .map(existingProduct -> {
                    if (product.getTitle() != null) {
                        existingProduct.setTitle(product.getTitle());
                    }

                    if (product.getDescription() != null) {
                        existingProduct.setDescription(product.getDescription());
                    }

                    if (product.getCategory() != null) {
                        existingProduct.setCategory(product.getCategory());
                    }

                    if (product.getPrice() != 0.0) {
                        existingProduct.setPrice(product.getPrice());
                    }

                    if (product.getImage() != null) {
                        existingProduct.setImage(product.getImage());
                    }

                    return productRepository.save(existingProduct);
                })
                .orElseThrow(() -> new IllegalStateException("Employee with id " + id + " not found")));
    }

    public List<Product> searchByTitle(String title) {
        return productRepository.findByTitle(title);
    }
}
