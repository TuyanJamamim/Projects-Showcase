import React from 'react';
import PricingFeature from './PricingFeature/PricingFeature';
import DaisyPricing from '../DaisyPricing/DaisyPricing';

const PricingCard = ({price}) => {
    
    return (
        // <div className='border-2  border-blue-400 m-4 p-4 rounded-lg'>
        //     <h1 className="text-7xl">{name}</h1>
        //     <h4 className='text-2xl'>{price.price}</h4>

        //     <div className='bg-blue-900 p-4 rounded-lg mt-4 text-yellow-700'>
        //         <p>{description}</p>
        //     </div>


        //     {/* when there is an array isnide an array of ojects it's vetter practice to run a map through that */}

        //     {
        //         features.map((feature, index )=>
        //             <PricingFeature
        //         key={index}
        //         feature={feature}></PricingFeature>
        //         )
        //     }
        //     {/* here feature inside price is an array that's why maping through that array inside pricingFeature
            
        //     *here inside map index is used as second parameter to access the index of the array and that can be used as key also....key is used to not get the warning in console
        //     */}
        //     <button className="btn bg-blue-900 w-full text-yellow-700 mt-1">Suvscrive</button>


            
        // </div>
        <div>

            <DaisyPricing key={price.id}
            price={price}></DaisyPricing>
        </div>
    );
};

export default PricingCard;