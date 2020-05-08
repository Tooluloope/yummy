import React from 'react'

import bike from "../../assets/bike.jpg"


export const MenuItem = () => {

    return (
        <div className=" text-center py-4 sm:w-1/2 md:w-1/3 px-4">
            <img src={bike} alt="bike"/>
            <p className='font-semibold pt-4 pb-2'>Granito 1.0 Mountain E-bike</p>
            <p className="pb-2">$1,299.00</p>

            <button type='button' className='border duration-200 ease-in-out hover:border-green-600 transition hover:bg-white hover:text-green-600 bg-green-600 text-white uppercase p-4 text-xs'>Add to cart</button>

        </div>
    )
}