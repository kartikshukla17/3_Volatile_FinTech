import React, { useCallback } from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadStarsPreset } from "tsparticles-preset-stars";

export default function ParticlesComponent({ className = "", quantity = 200 }) {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadStarsPreset(engine);
  }, []);

  return (
    <Particles
      className={className}
      init={particlesInit}
      options={{
        preset: "stars",
        background: {
          opacity: 0,
        },
        particles: {
          number: {
            value: quantity,
          },
          color: {
            value: "#ffffff",
          },
          size: {
            value: { min: 0.5, max: 3 },
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "out",
            },
            random: true,
            speed: 0.1,
            straight: false,
          },
        },
      }}
    />
  );
}

