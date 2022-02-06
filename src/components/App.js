import React from 'react';
import FirstSection from './FirstSection';
import Header from './Header';
import SecondSection from './SecondSection';
import ThirdSection from './ThirdSection';

export default function App() {
    return (
        <div className="main">
            <Header />
            <FirstSection />
            <SecondSection />
            <ThirdSection />
        </div>
    )
}