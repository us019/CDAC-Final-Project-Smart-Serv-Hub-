import React from "react";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <div className="col-3">
      <div className="product-card">
        <div className="product-image">
          <img src="images/watch.jpg" alt="product iamge" />
        </div>
        <div className="product-details">
          <h6 className="brand">AmazFit</h6>
          <h5 className="product-title">G10</h5>
          <p className="price">$10999</p>
        </div>
      </div>
      <Link to="/cart" className="button signup">
        Add to Cart
      </Link>
    </div>
  );
};

export default ProductCard;


// class ProductCard extends Component {
//     constructor(props) {
//         super(props)
//         this.state ={
//             products:[]
//         }
//         this.addProduct=this.addProduct.bind(this);
//        // this.editUser=this.editUser.bind(this);
//     }
//     // editUser(id){
        

//     //     this.props.history.push(`/update-user/${id}`);
//     // }
//     componentDidMount(){
//         ProductServise.getProducts().then((res) =>{
// console.log(res.data);
//             this.setState({products:res.data});
//         })
//     }
//     addProduct(){
//         this.props.history.push("/add-product");
//     }
//     render() {
//         return (
//             <div>
//                 <h2 className = "text-center"> List</h2>

//                 <div className = "row">
              
//                     <Link to="/add-product"> <button className="btn btn-primary" onClick={this.addProduct}>Add Product
//                     </button></Link>

                                 
//                         {
//                             this.state.products.map(
//                                 product=>
//                                 <div className='col-3'>
//                                 <div className='product-card'>
//                                     <div className='product-image'>
//                                         <img src="images/watch.jpg" alt="product iamge" />
//                                     </div>
//                                     <div className='product-details'>
//                                         <h6 className="brand">{product.productName}</h6>
//                                         <h5 className='product-title'>{product.discount}</h5>
//                                         <h5 >{product.MadeIn}</h5>
//                                         <h5 >{product.warrantyPeriod}</h5>
//                                         <p  className='price'>{product.unitPrice}</p>
//                                     </div>
//                                 </div>
                              
//                             </div>
                                
//                             )
//                         }
//                 </div>
//             </div>
//         );
//     }
// }




// export default ProductCard;




