// types
import { ISourceOptions } from "tsparticles-engine/types/Types/ISourceOptions";

export const CoverConfig: ISourceOptions = {
  zLayers: 1,
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 3,
      },
      repulse: {
        distance: 300,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 130,
      enable: true,
      opacity: 0.3,
      width: 2,
    },
    collisions: {
      enable: false,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: true,
      speed: 1.1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 700,
      },
      value: 50,
    },
    opacity: {
      value: 0.3,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};
