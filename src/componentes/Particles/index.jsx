import React from "react";
import Particles from "react-particles-js";
import S from "./particles.module.css"

const particlesoptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: ["#cccccc", "#610d0d", "#ff0000", "#f0dba9", "#ffffff"],
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#b6b1b1",
      },
    },
    opacity: {
      value: 0.5211089197812949,
      random: false,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 5,
      random: true,
      anim: {
        enable: true,
        speed: 12.181158184520175,
        size_min: 0.1,
        sync: true,
      },
    },
    line_linked: {
      enable: true,
      distance: 200,
      color: "#610d0d",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "bounce",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 200,
        line_linked: {
          opacity: 1,
        },
      },
      repulse: {
        distance: 50,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
    },
  },
  retina_detect: true,
};

const particlesoptions2 = {
  particles: {
    number: {
      value: 120,
      density: {
        enable: true,
        value_area: 200,
      },
    },
    color: {
      value: ["#cccccc", "#610d0d", "#ff0000", "#f0dba9", "#ffffff"],
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: true,
        speed: 4,
        size_min: 0.3,
        sync: true,
      },
    },
    line_linked: {
      enable: true,
      distance: 20,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "bottom",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 600,
      },
    },
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 60,
        line_linked: {
          opacity: 1,
        },
      },
      repulse: {
        distance: 50,
        duration: 0.4,
      },
      push: {
        particles_nb: 5,
      },
    },
  },
  retina_detect: true,
};


function Welcome() {
  return (
    <div>
        <Particles className={S.particles} params={particlesoptions2} />
    </div>
  );
}

export default Welcome;
