package example.spring.rest.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;



import example.spring.rest.entity.Cart;



@Repository
public interface CartRepository extends JpaRepository<Cart, Integer> {

	//List<CartToProduct> findAllByCartId(int cartId) ;
	
	//List<CartToProduct> findAllByCartIdAndProductId(Integer cartId,Integer productId);
	
//	void deleteAllByCartId(Integer cartId);
//	
//	void deleteByCartIdAndProductId(Integer cartId,Integer productId);
	
	
	
}
