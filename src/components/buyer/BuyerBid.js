import { useState } from "react";
import { useLocation, useParams, } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import cogoToast from 'cogo-toast';
import { useNavigate } from "react-router-dom";

export const BuyerBid = (props) => {
    const { productId } = useParams();
    const dispatch = useDispatch()
    let navigate = useNavigate()
    
    let product = useSelector(
        (state) => state.product.products[parseInt(productId)]
    );
    const location = useLocation();

    const [yourBid, setyourBid] = useState(0);
    const [yourMessage, setyourMessage] = useState("");
    

    let userInfo = location.state.user;

    const placeBid = ()=>{
        userInfo.userBid = yourBid;
        userInfo.message = yourMessage;
        userInfo.productId = productId
        dispatch({type:"place_bid",details : userInfo})
        cogoToast.success('Placed Bid Successfully!! Redirecting..').then(() => { 
            setTimeout(() =>{
                navigate("/buyer")
            })
        });
    }

    return (
        <div className="container">
            <div className="row d-flex">
                <div className="col-12 col-md-4 m-0 p-0">
                    <div className="card w-100">
                        <img
                            className="card-img-top"
                            src={product.productImage}
                            alt="Card image cap"
                        />
                        <div className="card-body">
                            <h5 className="card-title">
                                {product.productName}
                            </h5>
                            <p className="card-text">{product.description}</p>
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <span className="font-weight-bold">
                                        Current Bid: &nbsp;
                                    </span>
                                    {product.minBid}
                                </div>
                                <div className="col-12 col-md-6">
                                    <span className="font-weight-bold">
                                        Your Bid: &nbsp;
                                    </span>
                                    {yourBid}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Description</span>
                    </div>
                    <textarea
                        className="form-control"
                        aria-label="With textarea"
                        rows="3"
                        value={yourMessage}
                        onChange={(e) => setyourMessage(e.target.value)}
                    ></textarea>
                </div>
            </div>
            <div className="row mb-3 d-flex justify-content-center">
                <div className="input-group mb-3 w-50 pl-5">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                            Min. Bid
                        </span>
                    </div>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Min Bid"
                        min={0}
                        value={yourBid}
                        onChange={(e) => setyourBid(e.target.value)}
                    />
                </div>
            </div>
            <div className="row mb-3 d-flex justify-content-center">
                <button className="btn btn-primary px-5" onClick={placeBid}>Place Bid</button>
            </div>
        </div>
    );
};
