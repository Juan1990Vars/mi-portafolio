import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particlesConfig from './config/particles-config';

const ParticlesBack = () => {
    const particlesInit = useCallback((e) => {
        loadFull(e);
    }, []);


    return (
        <div>
             <Particles
                id="tsparticles"
                init={particlesInit}
                options={particlesConfig}
            />
        </div>
    );
}

export default ParticlesBack;
