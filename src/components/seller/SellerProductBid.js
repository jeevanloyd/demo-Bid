import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { BidderInfo } from "./BidderInfo";

export const SellerProductBid = () => {
    const { productId } = useParams();
    let product = useSelector(
        (state) => state.product.products[parseInt(productId)]
    );
    return (
        <div className="container mt-5">
            <div className="py-2">
                <div className="row d-flex">
                    <div className="col-12 col-md-4 m-0 p-0">
                        <img
                            src={product.productImage}
                            style={{ height: "250px" }}
                        ></img>
                    </div>
                    <div className="col-12 col-md-8 m-0 p-3">
                        <p>
                            <h4>{product.productName}</h4>
                        </p>
                        <p>{product.description}</p>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-12 col-md-3">
                        <span className="font-weight-bold">Condition:</span>
                        {product.condition}
                    </div>
                    <div className="col-12 col-md-3">
                        <span className="font-weight-bold">Quantity:</span>
                        {product.quantity}
                    </div>
                    <div className="col-12 col-md-3">
                        <span className="font-weight-bold">Min. Bid:</span>
                        {product.minBid}
                    </div>
                </div>
            </div>
            <div className="row w-100">
                {product.bids.map((bid,index) => {
                    return (
                        <BidderInfo bid={bid} index={index} productId = {productId} />
                    );
                })}
            </div>
        </div>
    );
};
