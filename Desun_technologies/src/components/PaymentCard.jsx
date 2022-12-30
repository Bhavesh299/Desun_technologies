import React from 'react';
import { Link } from "react-router-dom";
import styled from "../styles/paymentCard.module.css";
import { useNavigate } from "react-router-dom";


const PaymentCard = () => {

    const navigate = useNavigate();

    const Handelchange = () => {
        alert("Booking Successfully Complete")
        navigate("/GameList");

    }
   
  return (
    <div>
        <div className={styled.mainDiv}>
            <input type="Number" placeholder='Enter Card Number' required />
            <input type="text" placeholder='Enter Card Holder Name' required/>
            <input type="text" placeholder='Expiry Date' required/>
            <input type="password" placeholder='Enter 3 Digit CVV' required />
            <button onClick={()=> Handelchange()} className={styled.btn}>Pay</button>

            
        </div>
    </div>
  )
}

export default PaymentCard;