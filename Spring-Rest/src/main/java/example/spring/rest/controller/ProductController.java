package example.spring.rest.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import example.spring.rest.entity.Product;
import example.spring.rest.entity.User;
import example.spring.rest.service.ProductService;
import example.spring.rest.service.UserServices;

@CrossOrigin(origins = "http://localhost:3000")

@RestController
public class ProductController {

	  @Autowired
		private ProductService productServ;
		
	    
	    @GetMapping("/products")
		public List<Product> getAllProduct(){
			
			List<Product> allProducts=productServ.getAllProducts();
			return allProducts;
			
		}
	    
//	    @GetMapping("/category")
//		public List<Product>  getProductsByCategories(@RequestParam("categoryId") int categoryId) {
//			
//			System.out.println("request came for getting all products by category");
//			
//			List<Product> products= productServ.findByCategoryId(categoryId);
//			
//			System.out.println("response sent!!!");
//			
//			return products;
//			
//		}
	    
	    
	    @GetMapping("/product/{productId}")
	    public Product getOneProduct(@PathVariable("productId") Integer productId) {
	    	
	    	Product product=productServ.getOneProduct(productId);
	    	
	    	return product;
	    	
	    }
	    @PostMapping("/newProduct")
		public Product createNewProduct(@RequestBody Product product)
		{
			
			Product createdProduct=productServ.createProduct(product);
			System.out.println("User added"+product);
			return  createdProduct;
		}
	
}
