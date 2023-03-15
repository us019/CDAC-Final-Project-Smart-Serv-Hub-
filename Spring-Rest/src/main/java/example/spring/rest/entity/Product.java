package example.spring.rest.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

import jakarta.persistence.Table;


@Entity
@Table(name="product")
public class Product {

	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	 private int productId ;
	
	@Column(nullable = false)
     private String productName ;
	
	@Column(nullable = false)
     private int unitPrice ;
	
	@Column
     private String manufacturingDate ;
	
	@Column
     private String MadeIn;

	@Column(nullable = false)
     private String warrantyPeriod;
	
	@Column
	private String returnPolicy ;
	
	@Column
	private int productQuantity ;
	
	@Column
	private int discount ;
	
	@Column
	private String picture;
	
     
     
     
//     @OneToOne(cascade = CascadeType.ALL)
//     @JoinColumn(name ="brandId")
//     private Brand brand;
     
     
     
     @ManyToOne(fetch = FetchType.LAZY)
     @JoinColumn(name = "category_id")
     private Category category;
     
     @ManyToOne(fetch = FetchType.LAZY)
     @JoinColumn(name = "cart_id")
     private Cart cart;
     


	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}




	public int getProductId() {
		return productId;
	}




	public void setProductId(int productId) {
		this.productId = productId;
	}




	public String getProductName() {
		return productName;
	}




	public void setProductName(String productName) {
		this.productName = productName;
	}




	public int getUnitPrice() {
		return unitPrice;
	}




	public void setUnitPrice(int unitPrice) {
		this.unitPrice = unitPrice;
	}




	public String getManufacturingDate() {
		return manufacturingDate;
	}




	public void setManufacturingDate(String manufacturingDate) {
		this.manufacturingDate = manufacturingDate;
	}




	public String getMadeIn() {
		return MadeIn;
	}




	public void setMadeIn(String madeIn) {
		MadeIn = madeIn;
	}




	public String getWarrantyPeriod() {
		return warrantyPeriod;
	}




	public void setWarrantyPeriod(String warrantyPeriod) {
		this.warrantyPeriod = warrantyPeriod;
	}




	public String getReturnPolicy() {
		return returnPolicy;
	}




	public void setReturnPolicy(String returnPolicy) {
		this.returnPolicy = returnPolicy;
	}




	public int getProductQuantity() {
		return productQuantity;
	}




	public void setProductQuantity(int productQuantity) {
		this.productQuantity = productQuantity;
	}




	public int getDiscount() {
		return discount;
	}




	public void setDiscount(int discount) {
		this.discount = discount;
	}




	public String getPicture() {
		return picture;
	}




	public void setPicture(String picture) {
		this.picture = picture;
	}




	public Category getCategory() {
		return category;
	}




	public void setCategory(Category category) {
		this.category = category;
	}




	public Product(int productId, String productName, int unitPrice, String manufacturingDate, String madeIn,
			String warrantyPeriod, String returnPolicy, int productQuantity, int discount, String picture,
			Category category) {
		super();
		this.productId = productId;
		this.productName = productName;
		this.unitPrice = unitPrice;
		this.manufacturingDate = manufacturingDate;
		MadeIn = madeIn;
		this.warrantyPeriod = warrantyPeriod;
		this.returnPolicy = returnPolicy;
		this.productQuantity = productQuantity;
		this.discount = discount;
		this.picture = picture;
		this.category = category;
	}




	@Override
	public String toString() {
		return "Product [productId=" + productId + ", productName=" + productName + ", unitPrice=" + unitPrice
				+ ", manufacturingDate=" + manufacturingDate + ", MadeIn=" + MadeIn + ", warrantyPeriod="
				+ warrantyPeriod + ", returnPolicy=" + returnPolicy + ", productQuantity=" + productQuantity
				+ ", discount=" + discount + ", picture=" + picture + ", category=" + category + "]";
	}

	

	
}
