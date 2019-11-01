import React from "react";

const ProjectStateContext = React.createContext();

const projectState = {
  projects: [
    {
      title: "Portfolio",
      description:
        "A responsive portfolio developed with modern web technologies.",
      tech: [
        "React",
        "react-router-dom",
        "HTML",
        "CSS",
        "Formik",
        "Material UI"
      ],
      links: [
        {
          title: "github",
          url: "https://github.com/codetaylor/portfolio"
        }
      ]
    },
    {
      title: "Joise",
      description:
        "A multi-dimensional, modular noise library for the JVM, derived from Joshua Tippetts' C++ Accidental Noise Library.",
      tech: ["Java", "JavaFX"],
      links: [
        {
          title: "github",
          url: "https://github.com/SudoPlayGames/Joise"
        },
        {
          title: "docs",
          url: "https://joise.sudoplaygames.com/"
        }
      ]
    },
    {
      title: "Pyrotech",
      description:
        "A Minecraft mod with a custom interaction / rendering framework and an optimized network layer.",
      tech: [
        "Java",
        "OpenGL",
        "ZenScript",
        "MinecraftForge",
        "CraftTweaker",
        "Gson"
      ],
      links: [
        {
          title: "github",
          url: "https://github.com/codetaylor/pyrotech"
        },
        {
          title: "docs",
          url: "https://pyrotech.readthedocs.io/en/latest/"
        }
      ]
    },
    {
      title: "Artisan Worktables",
      description:
        "An extensively documented Minecraft mod designed to provide extreme customization via ZenScript.",
      tech: [
        "Java",
        "OpenGL",
        "ZenScript",
        "MinecraftForge",
        "CraftTweaker",
        "Gson"
      ],
      links: [
        {
          title: "github",
          url: "https://github.com/codetaylor/artisan-worktables"
        },
        {
          title: "docs",
          url: "https://artisan-worktables.readthedocs.io/en/latest/"
        }
      ]
    },
    {
      title: "Fleck",
      description:
        "A modular, abstract particle engine for the JVM featuring Euler, Runge-Kutta, and Verlet velocity integration.",
      tech: ["Java"],
      links: [
        {
          title: "github",
          url: "https://github.com/SudoPlayGames/Fleck"
        }
      ]
    },
    {
      title: "SudoXT",
      description:
        "A custom plugin solution featuring run-time compilation and reloading, injected instrumentation, and child-first, custom classloader behavior.",
      tech: ["Java", "Janino", "ASM"],
      links: [
        {
          title: "github",
          url: "https://github.com/SudoPlayGames/sudoxt"
        }
      ]
    },
    {
      title: "OrchidECS",
      description:
        "An entity component system for the JVM inspired by Artemis and Terrasology.",
      tech: ["Java", "ECS"],
      links: [
        {
          title: "github",
          url: "https://github.com/SudoPlayGames/OrchidECS"
        },
        {
          title: "docs",
          url:
            "https://github.com/SudoPlayGames/OrchidECS/blob/master/README.md"
        }
      ]
    },
    {
      title: "Axion",
      description:
        "An extensible implementation of NBT with support for both the default spec and an extended spec.",
      tech: ["Java", "NBT"],
      links: [
        {
          title: "github",
          url: "https://github.com/SudoPlayGames/Axion"
        },
        {
          title: "docs",
          url: "https://github.com/SudoPlayGames/Axion/blob/master/README.md"
        }
      ]
    },
    {
      title: "Juple",
      description:
        "A fork of Gson rewritten to serialize Java objects to and from TML instead of JSON.",
      tech: ["Java", "TML"],
      links: [
        {
          title: "github",
          url: "https://github.com/codetaylor/Juple"
        },
        {
          title: "docs",
          url: "https://github.com/codetaylor/Juple/blob/master/README.md"
        }
      ]
    }
  ]
};

const ProjectProvider = ({ children }) => {
  const [state] = React.useState(projectState);
  return (
    <ProjectStateContext.Provider value={state}>
      {children}
    </ProjectStateContext.Provider>
  );
};

const useProjectState = () => {
  const context = React.useContext(ProjectStateContext);

  if (context === undefined) {
    throw new Error("useProjectState must be used within a ProjectProvider");
  }
  return context;
};

export { ProjectProvider, useProjectState };
