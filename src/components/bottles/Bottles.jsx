import React, { useEffect, useState } from 'react';
import Bottle from './Bottle';
import { deleteFromLS, getProductfromLS, setProductsToLS } from '../utils/localStorage';

const Bottles = () => {
    const [bottles, setBottles] = useState([])
    const [cart, setCart] = useState(0)

    useEffect(() => {
        fetch('/public/products.json')
        .then(res => res.json())
        .then(data => setBottles(data.products))
    },[])
    useEffect(() => {
        const storedCart = getProductfromLS()
        setCart(storedCart)
    },[bottles])
    
    const handleAddcart = (id) => {
        setProductsToLS(id)
        const storedCart = getProductfromLS()
        setCart(storedCart)
    }
    const handleRemoveFromCart = (id)=> {
       deleteFromLS(id)
       const storedCart = getProductfromLS()
       setCart(storedCart)
    }

    return (
        <div>
            <div className='flex justify-around'>
            <h2 className='text-center mt-2'>Available Bottles : {bottles.length}</h2>
            <p>Cart : {cart.length}</p>
            </div>
            <button onClick={handleRemoveFromCart} className="btn btn-primary">Delete to cart</button>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6'>
                {
                    bottles.map(bottle => <Bottle
                        handleAddcart={handleAddcart}
                    key={bottle.id}
                    bottle = {bottle}
                    ></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;