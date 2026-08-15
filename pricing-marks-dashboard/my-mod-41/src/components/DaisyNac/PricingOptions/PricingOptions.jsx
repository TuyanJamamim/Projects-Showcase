import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOptions = ({ pricePromise }) => {
    const prices = use(pricePromise);
    console.log(prices);
    return (
        <div >
            <h2 className='text-3xl font-bold mx-4'>Get Our Membership</h2>
            <div className='grid md:grid-cols-3 gap-4 m-4'>


                {
                    prices.map(price => <PricingCard key={price.id} price={price}></PricingCard>)
                }
            </div>
        </div>
    );
};

export default PricingOptions;