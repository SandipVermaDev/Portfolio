import React from 'react';
import { Particles } from 'react-tsparticles';
import { loadLinksPreset } from 'tsparticles-preset-links';

const NeuralBackground = () => {
    const particlesInit = async (engine) => {
        await loadLinksPreset(engine);
    };

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            className="absolute inset-0 z-0 pointer-events-auto"
            options={{
                preset: 'links',
                fullScreen: { enable: false },
                background: { color: 'transparent' },
                fpsLimit: 60,
                detectRetina: true,
                interactivity: {
                    detectsOn: 'canvas', 
                    events: {
                        onHover: {
                            enable: true,
                            mode: 'grab',
                        },
                        onClick: {
                            enable: true,
                            mode: 'push',
                        },
                        resize: true,
                    },
                    modes: {
                        grab: {
                            distance: 140,
                            links: {
                                opacity: 0.7,
                            },
                        },
                        push: {
                            quantity: 2,
                        },
                    },
                },
                particles: {
                    color: { value: '#6f00ff' },
                    links: {
                        enable: true,
                        color: '#00ffe7',
                        distance: 120,
                        opacity: 0.4,
                        width: 1.5,
                    },
                    move: {
                        enable: true,
                        speed: 1.5,
                        direction: 'none',
                        outModes: 'out',
                    },
                    number: {
                        value: 70,
                        density: {
                            enable: true,
                            area: 800,
                        },
                    },
                    size: {
                        value: { min: 1, max: 3 },
                    },
                    opacity: {
                        value: 0.5,
                    },
                },
            }}
        />
    );
};

export default NeuralBackground;
