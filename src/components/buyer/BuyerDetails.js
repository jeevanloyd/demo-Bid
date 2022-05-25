import { useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
export const BuyerDetails = () => {
    const navigate = useNavigate();
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [mobileNo, setmobileNo] = useState("");
    const { productId } = useParams();

    let nextUrl = "/placebid/" + productId;
    let userInfo = {
        name: name,
        email: email,
        mobileNo: mobileNo,
    };

    return (
        <div className="container d-flex justify-content-center flex-column">
            <h5 className="text-center mb-5">Enter Bid</h5>
            <div className="row mb-3 d-flex justify-content-center">
                <div className="input-group mb-3 w-50">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                            Name
                        </span>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter User Name"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                    />
                </div>
            </div>
            <div className="row mb-3 d-flex justify-content-center">
                <div className="input-group mb-3 w-50">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                            Email
                        </span>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter User Email"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                    />
                </div>
            </div>
            <div className="row mb-5 d-flex justify-content-center">
                <div className="input-group mb-3 w-50">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">
                            Mobile
                        </span>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter User Mobile No."
                        value={mobileNo}
                        onChange={(e) => setmobileNo(e.target.value)}
                    />
                </div>
            </div>
            <div className="row justify-content-center d-flex">
                <button
                    className="btn btn-primary px-5"
                    onClick={() => navigate(nextUrl,{state:{user:userInfo}})}
                   
                >
                    Join
                </button>
            </div>
        </div>
    );
};
