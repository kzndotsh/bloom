import React, { useState, useEffect } from 'react';

import './App.css';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';

import Loader from './components/loader/Loader';
import ParticlesContainer from './components/particles/Particles';

function App() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <div className='app'>
            {loading ? <Loader /> : null}
            {loading ? null : (
                <>
                    <Header />
                    <Main />
                    <Footer />
                </>
            )}
            <ParticlesContainer />
        </div>
    );
}

export default App;
