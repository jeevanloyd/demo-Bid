import React from "react";
import { useDispatch } from "react-redux";
import { Link,useNavigate } from "react-router-dom";

import cogoToast from 'cogo-toast';

export const BidderInfo = (props) => {
    const dispatch = useDispatch()
    

    let navigate = useNavigate()
    const deleteAction = () =>{
        dispatch({type:"delete_bid",productId:props.productId})
        cogoToast.success('Auction Ended!! Redirecting..').then(() => { 
            setTimeout(() =>{
                navigate("/seller")
            })
        });
       
    }

    const declineActionBid = () =>{
        dispatch({type:"delete_user_bid",productId:props.productId,index:props.index})
        cogoToast.info('This User Bid has declined!! Redirecting..').then(() => { 
            setTimeout(() =>{
                navigate("/seller")
            })
        });
    }

    return (
        <div className="col-12 py-2 border">
            <span className="mx-5"><span className="font-weight-bold ml-2">Name:</span>{props.bid.name}</span>
            <span className="mx-5"><span className="font-weight-bold ml-2">Current Bid:</span>{props.bid.userBid}</span>
            <div className="float-right">
                <span className="mx-3">
                    <button className="btn btn-primary px-3" onClick={deleteAction}>Accept</button>
                </span>
                <span className="mx-3">
                    <button className="btn btn-primary px-3" onClick={declineActionBid}>Decline</button>
                </span>
            </div>
        </div>
    );
};
