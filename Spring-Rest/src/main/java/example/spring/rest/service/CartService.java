package example.spring.rest.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



import example.spring.rest.entity.Cart;
import example.spring.rest.entity.Product;
import example.spring.rest.entity.User;
import example.spring.rest.repository.CartRepository;
import example.spring.rest.repository.ProductRepository;



@Service
public class CartService {

	@Autowired
	private CartRepository cartRepo;
	
	@Autowired
	private UserServices userService;
	
	
//	private  ProductService productService;
	
	public Cart getOneCart(Integer cartId) {
		Optional<Cart> cartOpt=cartRepo.findById(cartId);
		Cart foundCart=cartOpt.get();
	return foundCart;		
	}
	
//	public String addProductToCart(int userId, int productId){
//		User currentUser = userService.getOneUser(userId);
//		//Cart currentCart = currentUser.getCart();
////		Product currentProduct = productService.getOneProduct(productId) ;
//
////		cartRepo.save(currentProduct) ;	
////		currentCart.setQuantity(currentCart.getQuantity()+1);
//		return " Added To Cart ";
//	}
	
	
	public Cart createCart(Cart cart) {
		Cart createdCart=cartRepo.save(cart);
		return createdCart;
	}

	public List<Cart> getAllCarts() {
		List<Cart> allCarts=cartRepo.findAll();
		return allCarts;
	}
	
//	public void deleteAllfromCart(Integer id) {
//		cartRepo.deleteAllByCartId(id);	
//	}

	
}
