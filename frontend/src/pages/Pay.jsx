import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const Key =
  "pk_test_51KFLbMI03jUPNgWR7FPYLyWTF1KquTtaiZP9nJ4i6ljIs1jyj9ZiYSyXAvjJKpXPiDLmOFLAr7qpxdQYV6Ln1Dn900EifmLarC";

const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const navigate = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post("http://localhost:5000/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 2000,
        });
        console.log(res.data);
        navigate("/success");
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken, navigate]);

  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      {stripeToken ? (
        <span>Processing please wait ...</span>
      ) : (
        <StripeCheckout
          name="Sava Clothes"
          billingAddress
          shippingAddress
          description="Total is 20 $"
          amount={2000}
          token={onToken}
          stripeKey={Key}
        >
          <button
            style={{
              height: "50px",
              width: "100px",
              borderRadius: "20%",
            }}
          >
            Pay Now !
          </button>
        </StripeCheckout>
      )}
    </div>
  );
};

export default Pay;
