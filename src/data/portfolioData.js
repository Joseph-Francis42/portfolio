export const portfolioData = {
  personalInfo: {
    name: "Joseph Francis",
    title: "Software Engineer",
    subTitle: "Specializing in Java, Python, and Modern Web Technologies",
    bio: "Passionate software engineer with hands-on experience building desktop and web applications. Skilled in robust backend development using Java and Python, graphical user interfaces using Swing, database management with SQL, and responsive frontend systems with React.",
    email: "joseph.francis@example.com",
    github: "https://github.com/Joseph-Francis42",
    linkedin: "https://www.linkedin.com/in/joseph-francis-383807327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    location: "Palai, Kottayam, Kerala, India",
    tagline: "Building clean, efficient, and user-centric software solutions."
  },
  skills: [
    {
      name: "Java & Swing",
      category: "Languages & GUI",
      level: 90,
      description: "Desktop application development, graphical user interfaces, event-driven programming, and object-oriented design."
    },
    {
      name: "Python",
      category: "Languages & Scripting",
      level: 85,
      description: "Data analysis, backend scripting, automation, API development, and quick prototyping."
    },
    {
      name: "C Programming",
      category: "Languages & Systems",
      level: 80,
      description: "Low-level system programming, memory management, data structures, and algorithms."
    },
    {
      name: "HTML & CSS",
      category: "Web Development",
      level: 90,
      description: "Semantic layouts, responsive web design, Vanilla CSS, grid & flexbox systems, and custom animations."
    },
    {
      name: "SQL & Databases",
      category: "Databases",
      level: 85,
      description: "Relational database design, query optimization, joins, indexing, and integration with Java/Python applications."
    },
    {
      name: "React.js",
      category: "Web Development",
      level: 75,
      description: "Component-based architecture, state management, hooks, and responsive dynamic user interfaces."
    }
  ],
  projects: [
    {
      id: "react-tic-tac-toe",
      title: "React Tic Tac Toe",
      subtitle: "Dynamic React Web App",
      description: "An interactive, modern version of the classic Tic Tac Toe game built using React.js. Features state management with move history (time travel), custom player names, winning line highlights, and a clean minimalist design with responsive layouts.",
      longDescription: "This project is a modern web implementation of the classic Tic Tac Toe. It demonstrates React state management, list rendering, component lifecycle, and custom hooks. Users can input their custom names, track wins, view a list of historical moves, and 'travel back in time' to review previous moves in the game. It uses CSS transitions to deliver a smooth and engaging user experience without heavy external libraries.",
      skills: ["React.js", "JavaScript", "Vanilla CSS", "Responsive Design"],
      imagePath: "/projects/tic_tac_toe.png",
      demoLink: "#",
      codeLink: "https://github.com/Joseph-Francis42/tic-tac-toe"
    },
    {
      id: "movie-booking-system",
      title: "Movie Booking System",
      subtitle: "Java Swing Desktop Application",
      description: "A comprehensive seat reservation and ticketing application built with Java Swing and backend SQL database. Supports user authentication, real-time ticket billing, showtime scheduling, and an interactive seat grid.",
      longDescription: "A robust desktop client application designed for cinema administrators and customers. Built with Java Swing for a responsive GUI and SQL database for persistent data storage. Users can browse movies, select seats interactively (showing available/reserved status), calculate bill totals with taxes/discounts, and generate PDF-like printable receipts. Administrators can add new screenings, modify ticket prices, and view daily sales reports.",
      skills: ["Java", "Swing (GUI)", "SQL & Databases", "OOP Design"],
      imagePath: "/projects/movie_booking.png",
      demoLink: "#",
      codeLink: "#"
    },
    {
      id: "location-tracker",
      title: "Location Tracker",
      subtitle: "Python & API-Driven Utility",
      description: "A tracking application developed in Python that processes location data, coordinates queries via IP/GPS APIs, and visualizes route history on maps using web integration.",
      longDescription: "A tool built in Python that retrieves geographic coordinates based on IP addresses, GPS logs, or manually entered data. It integrates with mapping services to plot device locations, trace travel paths, and export routes to standard formats like KML/JSON. The interface displays real-time coordinates, speed estimations, and maps by launching a local web viewer, showing python's strengths in scripting and API integration.",
      skills: ["Python", "APIs & JSON", "Data Visualization", "Geocoding"],
      imagePath: "/projects/location_tracker.png",
      demoLink: "#",
      codeLink: "#"
    }
  ],
  experience: [
    {
      year: "2025 - Present",
      role: "Software Developer (Academic/Personal Projects)",
      company: "Independent Developer",
      description: "Designing and developing robust desktop and web solutions. Implementing MVC architectural patterns in Java Swing GUI projects, optimizing SQL queries, and coding interactive web components in React."
    },
    {
      year: "2024",
      role: "Open Source Contributor",
      company: "GitHub / Community Projects",
      description: "Contributed code to utility libraries in Python and frontend fixes in React templates. Worked extensively with Git workflows, code reviews, and issue resolution."
    }
  ],
  education: [
    {
      year: "2024 - 2028",
      degree: "Bachelor of Technology in Computer Science and Engineering (B.Tech CSE)",
      institution: "St. Joseph's College of Engineering and Technology (SJCET), Palai",
      description: "Acquiring core knowledge in software engineering, algorithms, data structures, database management systems, and object-oriented programming."
    }
  ]
};
