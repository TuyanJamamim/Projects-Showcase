import { Check, CheckCircle2 } from 'lucide-react';
import React from 'react';

const PricingFeature = ({feature}) => {
    return (
        <p className='flex gap-2 mt-2'> <CheckCircle2></CheckCircle2> {feature}  </p>
    );
};

export default PricingFeature;