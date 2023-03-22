package com.onlineshopping.service;

import org.springframework.web.multipart.MultipartFile;

import com.onlineshopping.model.*;

public interface ProductService {
	
	void addProduct(Product product, MultipartFile productImmage);

	void deleteProduct(Product product);

	void updateProduct(Product product, MultipartFile image);

}
