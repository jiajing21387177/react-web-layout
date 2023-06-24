import React from 'react';
import SloganSection from './SloganSection';
import ServicesSection from './ServicesSection';

const UI1 = () => {
    return (
        <div className="flex flex-col items-center justify-center py-12">
            <SloganSection></SloganSection>
            <ServicesSection></ServicesSection>
        </div>
    );
};

export default UI1;
