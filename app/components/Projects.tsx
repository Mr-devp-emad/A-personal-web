"use client";


const Projects = () => {
  const projectData = [
    {
      id: 1,
      title: "E-commerce Website",
      description:
        "A feature-rich e-commerce platform with seamless payment integration and a responsive design.",
      image: " /ecommerce1.png",
    },
    {
      id: 2,
      title: "Resume Builder",
      description:
        "A sleek and modern showcasing projects, skills, and achievements.",
      image: " /resume.png",
    },
    {
      id: 3,
      title: "Faceboook Clone",
      description:
        "A full-stack social media platform featuring user authentication, profile management, posts with likes and comments,.",
      image: "/facebook.png",
    },
    {
      id: 4,
      title: "TODO-App-List",
      description:
        "A blogging platform with markdown support, user authentication, and interactive features.",
      image: "/todo.png",
    },
  ];

  return (
    <>
      {/* Large Screens */}
      <div className="lg:block hidden bg-gradient-to-b from-gray-100 to-blue-300 py-16 px-20">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center text-blue-700">
          My <u className="text-red-500">Projects</u>
        </h1>
        <p className="text-lg text-gray-700 text-center mt-2">
          Explore some of my recent work showcasing my skills and creativity.
        </p>

        {/* Project Grid */}
        <div className="grid grid-cols-3 gap-10 mt-16">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[200px] object-cover"
              />
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-700">{project.title}</h3>
                <p className="text-gray-700 mt-2">{project.description}</p>
                <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Small Screens */}
      <div className="lg:hidden block bg-gradient-to-b from-gray-100 to-blue-300 py-10 px-6">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-center text-blue-700">
          My <u className="text-red-500">Projects</u>
        </h1>
        <p className="text-gray-700 text-center mt-2">
          Explore some of my recent work showcasing my skills and creativity.
        </p>

        {/* Project List */}
        <div className="space-y-10 mt-10">
          {projectData.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[200px] object-cover"
              />
              {/* Project Content */}
              <div className="p-4">
                <h3 className="text-xl font-bold text-blue-700">{project.title}</h3>
                <p className="text-gray-700 mt-2">{project.description}</p>
                <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
