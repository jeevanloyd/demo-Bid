
import { useSelector } from "react-redux";
import { BuyerProductInfo } from "./BuyerProductInfo";

const BuyerComponent = () => {
    let productState = useSelector((state) => state);
    let productList = productState.product.products
    return (
        <div className="container ">
            <div className="row mt-5">
                {productList.map((product,index) =>{
                    return <BuyerProductInfo product = {product} index ={index} key={index} />
                })}
            </div>
        </div>
    );
};

export default BuyerComponent;
