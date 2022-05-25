import {
    useNavigate  } from "react-router-dom";

export const BuyerProductInfo = (props) => {
    let navigate = useNavigate();
    let product = props.product;
    const enterUserDetail = () =>{
        navigate(`/buyer/${props.index}`) ;
    }

    return (
        <div className="col-12 col-md-4" style={{height:"10em"}}>
            <div className="card w-100" >
                <img
                    className="card-img-top"
                    src= {product.productImage}
                    alt="Card image cap"
                />
                <div className="card-body">
                    <h5 className="card-title">{product.productName}</h5>
                    <p className="card-text">
                        {product.description}
                    </p>
                    <button className="btn btn-primary" onClick={enterUserDetail}>
                        Place Bid
                    </button>
                </div>
            </div>
        </div>
    );
};
