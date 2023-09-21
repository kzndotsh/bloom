import React, { useCallback } from 'react';

import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

import options from './options';

const ParticlesContainer = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {}, []);

    return (
        <div className='particles-container'>
            <Particles
                id='tsparticles'
                init={particlesInit}
                loaded={particlesLoaded}
                options={options}
            />
        </div>
    );
};

export default ParticlesContainer;
