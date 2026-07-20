/**
 * Project Controller
 * Returns the array of projects for the portfolio.
 */

const getProjects = (req, res) => {
  const projects = [
    {
      id: "a-musicals",
      title: "A-Musicals",
      category: "Frontend Web App",
      description: "An interactive, visually rich music and entertainment streaming dashboard. Supports visualizer panels, custom playlists, and high-fidelity layouts.",
      technologies: ["React.js", "JavaScript", "CSS"],
      features: [
        "Developed a responsive music web platform with modern UI/UX and cross-device compatibility."
      ],
      githubLink: "https://github.com/parotdevs/Team_Ayan-Amusicals",
      liveLink: "https://www.amusicals.in/"
    },
    {
      id: "glow",
      title: "Glow",
      category: "Frontend Web App",
      description: "An elegant e-commerce prototype for a makeup and beauty brand. Designed with standard layouts, item filters, responsive checkout flows, and animations.",
      technologies: ["React.js", "Tailwind CSS", "JavaScript"],
      features: [
        "Built a beauty e-commerce website with reusable components and smooth navigation."
      ],
      githubLink: "https://github.com/parotdevs/Glow",
      liveLink: "https://glow.parot.dev/"
    },
    {
      id: "aahar-setu",
      title: "Aahar Setu",
      category: "Full-Stack Web App",
      description: "Digital Medicine Passport System featuring QR-based tracking for livestock health history, diet regimes, and medication history.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB"],
      features: [
        "Engineered QR-based livestock medicine tracking system with automated alerts for food safety compliance."
      ],
      githubLink: "https://github.com/Aritra-221B/AhaarSetu",
      liveLink: "https://ahaarsetu-theta.vercel.app/"
    },
    {
      id: "sandrover",
      title: "SandRover",
      category: "Embedded Systems / Robotics",
      description: "Hardware rover system designed for adaptive terrain traversal and wireless command logging.",
      technologies: ["ESP32", "C/C++", "L298N Motor Driver"],
      features: [
        "Designed and programmed an ESP32-controlled robotic vehicle for terrain exploration and surveillance."
      ],
      githubLink: "https://github.com/aishwaryadas0803/SandRover",
      liveLink: "#"
    },
    {
      id: "line-following-robot",
      title: "Line Following Robot",
      category: "Embedded Systems / Robotics",
      description: "Autonomous line tracking vehicle using proportional control logic for high speed course navigation.",
      technologies: ["Arduino Nano", "C/C++", "IR Sensors", "PID Control"],
      features: [
        "Developed a PID-based autonomous line-following robot with accurate path detection and stable navigation."
      ],
      githubLink: "https://github.com/aishwaryadas0803/Line-Following-Robot",
      liveLink: "#"
    }
  ];

  res.status(200).json({
    success: true,
    count: projects.length,
    data: projects
  });
};

module.exports = {
  getProjects
};
