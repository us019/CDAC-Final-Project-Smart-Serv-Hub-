package example.spring.rest.entity;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;

@Entity
public class Cart extends BaseEntity {
	
//	@Id
//	@GeneratedValue(strategy=GenerationType.IDENTITY)
//	@Column
//	private int id;
//	
//	@OneToOne
//	@JoinColumn(name = "product_id")
//	private Product product;
//	
//	@OneToOne(cascade = CascadeType.ALL,orphanRemoval = true)
//	@JoinColumn(name = "user_id")
//	private User user;
	
	@Column
	private int quantity;
	
	@Column
	private int price;
	
	@OneToMany(mappedBy = "cart")
    private List<Product> products;

	
	
	
	public Cart() {
		super();
		// TODO Auto-generated constructor stub
	}




	public Cart(int quantity, int price, List<Product> products) {
		super();
		this.quantity = quantity;
		this.price = price;
		this.products = products;
	}




	public int getQuantity() {
		return quantity;
	}




	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}




	public int getPrice() {
		return price;
	}




	public void setPrice(int price) {
		this.price = price;
	}




	public List<Product> getProducts() {
		return products;
	}




	public void setProducts(List<Product> products) {
		this.products = products;
	}




	@Override
	public String toString() {
		return "Cart [quantity=" + quantity + ", price=" + price + ", products=" + products + "]";
	}
	

	
}
