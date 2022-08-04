import React from 'react';
import'./Cart.css'


  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",

    // These options are needed to round to whole numbers if that's what you want.
    minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  const loadScript = (src) => {
    return new Promise((resovle) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resovle(true);
      };

      script.onerror = () => {
        resovle(false);
      };

      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async (amount) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("You are offline... Failed to load Razorpay SDK");
      return;
    }

    const options = {
      key: "rzp_test_1vBEVXTQz3zVEx",
      currency: "INR",
      amount: amount * 100,
      name: "Code with akky",
      description: "Thanks for purchasing",
      image:
        "https://mern-blog-akky.herokuapp.com/static/media/logo.8c649bfa.png",

      handler: function (response) {
        alert(response.razorpay_payment_id);
        alert("Payment Successfully");
      }
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

const Cart = (props) => {
    const {cart} = props
    let total = 0
    let called = ' '
    for(const product of cart){
        total = total + product.price
        called = called + ', ' + product.name
    }
    return (
      <div className= 'calculate-side'>
        
        <h1>Writers Added:{props.cart.length}</h1>
        <h2>Slected Names: {called}</h2>
        <h3>Total Cost: ${total}</h3>
        <div><p>{formatter.format(total)}</p></div>
        <button onClick={() => displayRazorpay(total)} className='btn'> Pay </button>
      </div>
    );
};

export default Cart;