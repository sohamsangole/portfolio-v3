import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ParticleBackground = () => {
  const { theme } = useContext(ThemeContext);
  const [init, setInit] = useState(false);

  // Initialize particles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // Load the slim version of tsParticles
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback((container) => {
    console.log(container);
  }, []);

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: theme.background,
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "repulse",
                },
                onHover: {
                  enable: true,
                  mode: "connect",
                },
                resize: true,
              },
              modes: {
                connect: { // Settings for connect mode
                  distance: 800, // Radius around mouse to connect particles
                  lineLinked: {
                    opacity: 1,
                    width: 1,
                  },
                  radius: 200, // How far the connection lines should reach
                },
              },
            },
            particles: {
              color: {
                value: theme.primary_color,
              },
              links: {
                color: theme.primary_color,
                distance: 250,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: true,
                speed: 5,
                straight: true,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 50,
              },
              opacity: {
                value: 1,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </>
  );
};

export default ParticleBackground;
