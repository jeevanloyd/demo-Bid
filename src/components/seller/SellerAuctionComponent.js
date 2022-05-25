import {  useState } from "react";
import { useDispatch } from "react-redux";
import { Link,useNavigate } from "react-router-dom";
import cogoToast from 'cogo-toast';
const SellerAuctionComponent = () => {

    const dispatch = useDispatch()
    let navigate = useNavigate()
    const [productName, setproductName] = useState("")
    const [description, setdescription] = useState("")
    const [condition, setcondition] = useState("Used")
    const [category, setcategory] = useState("")
    const [quantity, setquantity] = useState(0)
    const [minBid, setminBid] = useState(0)
    const [productImage, setproductImage] = useState()

    let productInfo = {
        productName: productName,
        description:description,
        condition:condition,
        category:category,
        quantity:quantity,
        minBid:minBid,
        bids:[]
    }

    const setProductImageUrl = (event) =>{
        const { files } = event.target;
        const localImageUrl =  window.URL.createObjectURL(files[0]);
        productInfo.productImage = localImageUrl
    }

    const startAuction = () =>{
        dispatch({type:"add_product",product:productInfo})
        cogoToast.success('Auction Started!! you are redirecting..').then(() => { 
            setTimeout(() =>{
                navigate("/seller")
            })
        });
    }

    return (
        <div className="container w-50 flex-column d-flex justify-content-center mt-4">
            <div className="row justify-content-center">
                <h4 className=" text-center w-100">Add Product</h4>
            </div>
            <div className="row">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                            Name
                        </span>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Product Name"
                        value={productName}
                        onChange ={(e) => setproductName(e.target.value)}
                    />
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
                        value={description}
                        onChange= {(e) => setdescription(e.target.value)}
                    ></textarea>
                </div>
            </div>
            <div className="row ">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label
                            className="input-group-text"
                            htmlFor="inputGroupSelect01"
                        >
                            Condition
                        </label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect01" value={condition} onChange={(e) => setcondition(e.target.value)}>
                        <option value="Used">Used</option>
                        <option value="New">New</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                            Category
                        </span>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Category"
                        value={category}
                        onChange= {(e) => setcategory(e.target.value)}
                    />
                </div>
            </div>
            <div className="row">
                <div className="input-group mb-3 w-50 pr-5">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                            Quantity
                        </span>
                    </div>
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Username"
                        min={0}
                        value={quantity}
                        onChange = {(e) => setquantity(e.target.value)}
                    />
                </div>
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
                        value={minBid}
                        onChange={(e) => setminBid(e.target.value)}
                    />
                </div>
            </div>
            <div className="row">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span
                            className="input-group-text"
                            id="inputGroupFileAddon01"
                        >
                            Upload
                        </span>
                    </div>
                    <div className="custom-file">
                        <input type="file" className="custom-file-input" value={productImage} onChange= {setProductImageUrl} />
                        <label className="custom-file-label" htmlFor="inputGroupFile01">
                            Choose file
                        </label>
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
            <Link className="btn btn-secondary px-5 mr-3" to="/seller">Back</Link>
                <button className="btn btn-primary px-5" onClick={startAuction}>Start</button>
                
            </div>
        </div>
    );
};

export default SellerAuctionComponent;
