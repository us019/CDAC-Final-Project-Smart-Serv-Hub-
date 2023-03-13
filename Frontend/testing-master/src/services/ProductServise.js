import axios from 'axios';
const PRODUCT_API_BASE_URL="http://localhost:9000";

class ProductServise{
getProducts(){
    return axios.get(PRODUCT_API_BASE_URL+"/products");
}


createProduct(product){
    return axios.post(PRODUCT_API_BASE_URL+"/newProduct",product)
}

getProductById(productId){
    return axios.get(PRODUCT_API_BASE_URL+"/product"+"/"+productId);
}
updateUser(product,productId){
    return axios.put("http://localhost:9000/userUpdate",product);
}

}
export default new ProductServise()