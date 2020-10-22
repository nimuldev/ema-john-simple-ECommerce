import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart)
    // const total=cart.reduce((total,prd)=>total+prd.price,0)

    let totalPrice = 0;

    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        totalPrice = totalPrice + product.price;

    }

    let shipping = 0;

    if (totalPrice > 35) {
        shipping = 0;
    }
    else if (totalPrice > 15) {
        shipping =4.99;
    }
    else if (totalPrice > 0) {
        shipping =4.99;
    }

    const tex=(totalPrice/10).toFixed(2);

    return (
        <div>
            <h4>Oder Summery </h4>
            <p>Items Oder :{cart.length}</p>
            <p>Product Price :{totalPrice.toFixed(2)}</p>
            <p>Shipping Price :{shipping}</p>
            <p>TEX :{tex}</p>
            <p>Total Price :{totalPrice+shipping+Number(tex)}</p>
        </div>
    );
};

export default Cart;