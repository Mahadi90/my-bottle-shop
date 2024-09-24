import React, { useEffect, useState } from 'react';
import Bottle from './Bottle';

const Bottles = () => {
    const [bottles, setBottles] = useState([])

    useEffect(() => {
        fetch('/public/products.json')
        .then(res => res.json())
        .then(data => setBottles(data.products))
    },[])

    return (
        <div>
            <h2 className='text-center mt-2'>Available Bottles : {bottles.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6'>
                {
                    bottles.map(bottle => <Bottle
                    key={bottle.id}
                    bottle = {bottle}
                    ></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;