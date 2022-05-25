import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import { BuyerBid } from '../buyer/BuyerBid';
import BuyerComponent from '../buyer/BuyerComponent';
import { BuyerDetails } from '../buyer/BuyerDetails';
import { HomeComponent } from '../container/HomeComponent';
import SellerAuctionComponent from '../seller/SellerAuctionComponent';
import SellerComponent from '../seller/SellerComponent';
import { SellerProductBid } from '../seller/SellerProductBid';

const MainComponent = () => {
  return (
    
    <BrowserRouter>
    <Link to="/" className="px-4 cursor-pointer hover:text-violet-600 ">Home</Link>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route  path="/newauction" element={<SellerAuctionComponent />} />
        <Route  path="/seller" element={<SellerComponent />} />
        <Route  path="/seller/:productId" element={<SellerProductBid />} />
        <Route path="/buyer" element={<BuyerComponent />} />
        <Route path="/buyer/:productId" element={<BuyerDetails />} />
        <Route path="/placebid/:productId" element={<BuyerBid />} />  
      </Routes>
    </BrowserRouter>
  )
}

export default MainComponent