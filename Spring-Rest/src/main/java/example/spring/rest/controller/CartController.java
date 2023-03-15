package example.spring.rest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import example.spring.rest.dto.CartProcess;
import example.spring.rest.entity.Cart;
import example.spring.rest.entity.Product;
import example.spring.rest.entity.User;
import example.spring.rest.service.CartService;
import example.spring.rest.service.ProductService;
import example.spring.rest.service.UserServices;

@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("cartControl")
@RestController
public class CartController {

	  @Autowired
		private CartService cartServ;
	  
//	  private UserServices userServ;
		
	    
	  
//	  @PostMapping("/add-product")
//		public String addToCart(@RequestBody CartProcess cartProcess) {
//			return cartServ.addProductToCart(cartProcess.getCustomerId(), cartProcess.getProductId()); 
//		}
	  
	  
	    @GetMapping("/carts")
		public List<Cart> getAllCarts(){
			
			List<Cart> allCarts=cartServ.getAllCarts();
			return allCarts;
			
		}
	    
	    @GetMapping("/cart/{cartId}")
	    public Cart getOneCart(@PathVariable("cartId") Integer cartId) {
	    	
	    	Cart cart=cartServ.getOneCart(cartId);
	    	
	    	return cart;
	    	
	    }
	    @PostMapping("/newCart")
		public Cart createNewCart(@RequestBody Cart cart)		{
			
	    	Cart createdCart=cartServ.createCart(cart);
			System.out.println("User added"+cart);
			return  createdCart;
		}
	    
//	    @GetMapping("/user-cart/{userId}")
//		public Integer getCartOfUser(@PathVariable int userId) {
//			User user=userServ.getOneUser(userId);
//				
//			return user.getUserId();
//		}
	    
//	    @DeleteMapping("/delete-item/{cartId}/{productId}")
//		public String deleteProductFromCart(@PathVariable int cartId, @PathVariable int productId){
//			return cartServ.deleteFromCart(cartId,productId);
//		}
	    
	
}
