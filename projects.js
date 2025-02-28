const projects = [
    {
        title: "YouTube Cloning",
        description: "ReactJS project that clones YouTube's UI.",
        link: "https://sastiharikumarkl.github.io/Youtube-cloning-using-ReactJS/"
    },
    {
        title: "Student EduTrack System",
        description: "Educational tracking system built with ReactJS.",
        link: "https://sastiharikumarkl.github.io/StudentEduTrackSystem-in-ReactJS/"
    },
    {
        title: "Shopping Cart",
        description: "E-commerce shopping cart using ReactJS.",
        link: "https://github.com/SASTIHARIKUMARKL/Shopping-Cart-using-ReactJS.git"
    },
    {
        title: "Binary Tree in Java",
        description: "Data structure project for Binary Tree traversals.",
        link: "https://github.com/SASTIHARIKUMARKL/Create-Binary-Tree-InOrder-PreOrder-PostOrder-in-Datastructure-using-Java.git"
    },
    {
        title: "Paying Guest Room Booking",
        description: "Room booking system using Cartrabbit.",
        link: "https://github.com/SASTIHARIKUMARKL/Cartrabbit---Paying-guest-room-booking-project-.git"
    },
    {
        title: "Mark Sheet Evaluation",
        description: "Mark sheet evaluation using JavaScript.",
        link: "https://sastiharikumarkl.github.io/Mark-Sheet-Evaluation-using-Javascript/"
    }
];

// Function to load projects dynamically
const loadProjects = () => {
    const container = document.getElementById("projects-container");
    projects.forEach(project => {
        const projectElement = document.createElement("div");
        projectElement.classList.add("project");

        projectElement.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;
        container.appendChild(projectElement);
    });
};

// Call the function when DOM is fully loaded
document.addEventListener("DOMContentLoaded", loadProjects);
