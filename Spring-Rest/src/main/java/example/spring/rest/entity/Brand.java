package example.spring.rest.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="brand_table")
@NoArgsConstructor
@Getter
@Setter
public class Brand {

	@Id
	@Column
	private int brandId;
	
	@Column
	private String brandName;

	public int getBrandId() {
		return brandId;
	}

	public void setBrandId(int brandId) {
		this.brandId = brandId;
	}

	public String getBrandName() {
		return brandName;
	}

	public void setBrandName(String brandName) {
		this.brandName = brandName;
	}
	

	public Brand() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Brand(int brandId, String brandName) {
		super();
		this.brandId = brandId;
		this.brandName = brandName;
	}

//    @OneToOne(mappedBy = "brand")
//    private Product product;
	
}
