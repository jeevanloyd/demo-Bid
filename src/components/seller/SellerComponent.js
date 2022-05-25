import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { SellerProductInfo } from "./SellerProductInfo";

const SellerComponent = () => {
    let productState = useSelector((state) => state);
    let productList = productState.product.products

    return (
        <div className="container ">
            <div className="row d-flex justify-content-end mt-5">
                <Link to="/newauction" className="btn btn-primary">New Auction</Link>
            </div>
            <div className="row mt-5">
                {productList.length != 0?productList.map((product, index) =>{
                    return <SellerProductInfo product = {product} index={index} />
                }):<div className="col-12 justify-content-center text-center">No Product</div>}
                
            </div>
        </div>
    );
};

export default SellerComponent;
