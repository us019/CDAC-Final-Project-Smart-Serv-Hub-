import React from "react";
import { Link } from "react-router-dom";
import BreadCrumb from "../Components/BreadCrumb";
import Meta from "../Components/Meta";
import ProductCard from "../Components/ProductCard";

function Mobile() {
  return (
    <>
      <Meta title={"Mobile"} />
      <BreadCrumb title="Mobile" />
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Features Collection</h3>
            </div>
            <div className="col-3">
      <div className="product-card">
        <div className="product-image">
          <img src="https://rukminim1.flixcart.com/image/128/128/xif0q/mobile/5/m/f/-original-imagfhu6nsnwvxkm.jpeg?q=70" alt="product iamge" />
        </div>
        <div className="product-details">
          <h6 className="brand">Redmi</h6>
          <h5 className="product-title">G10</h5>
          <p className="price">$10999</p>
        </div>
      </div>
      <Link to="/cart" className="button signup">
        Add to Cart
      </Link>
    </div>
    <div className="col-3">
      <div className="product-card">
        <div className="product-image">
          <img src="https://rukminim1.flixcart.com/image/128/128/xif0q/mobile/p/d/q/-original-imagfhu7wcfmqzu5.jpeg?q=70" alt="product iamge" />
        </div>
        <div className="product-details">
          <h6 className="brand">Oppo</h6>
          <h5 className="product-title">G10</h5>
          <p className="price">$10999</p>
        </div>
      </div>
      <Link to="/cart" className="button signup">
        Add to Cart
      </Link>
    </div>
    <div className="col-3">
      <div className="product-card">
        <div className="product-image">
          <img src="https://rukminim1.flixcart.com/image/128/128/xif0q/mobile/g/e/7/-original-imaghxcpnmufk4a2.jpeg?q=70" alt="product iamge" />
        </div>
        <div className="product-details">
          <h6 className="brand">IPhone</h6>
          <h5 className="product-title">G10</h5>
          <p className="price">$10999</p>
        </div>
      </div>
      <Link to="/cart" className="button signup">
        Add to Cart
      </Link>
    </div>
    <div className="col-3">
      <div className="product-card">
        <div className="product-image">
          <img src="https://rukminim1.flixcart.com/image/128/128/xif0q/mobile/5/m/f/-original-imagfhu6nsnwvxkm.jpeg?q=70" alt="product iamge" />
        </div>
        <div className="product-details">
          <h6 className="brand">Redmi</h6>
          <h5 className="product-title">G10</h5>
          <p className="price">$10999</p>
        </div>
      </div>
      <Link to="/cart" className="button signup">
        Add to Cart
      </Link>
    </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Mobile;
