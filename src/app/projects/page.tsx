import React from 'react';

const projects = [
  {
    name: 'Gamefied',
    role: 'Head of Blockchain Development',
    duration: 'Dec 2021 - Feb 2023',
    location: 'United States',
    intro: 'The web3 gaming guild management platform is designed to address the needs of gaming communities by providing a comprehensive solution for managing and organizing gaming guilds in the context of the evolving web3 ecosystem. With the rise of blockchain technology and the integration of NFTs (Non-Fungible Tokens), gaming guilds are seeking innovative tools and platforms that enable seamless management of members, assets, and activities.',
    problem: 'Many gaming guilds struggle with inefficient management systems that lack integration with web3 technologies, hindering their ability to fully leverage the benefits of Blockchain, NFTs, and decentralized governance. Guild managers face challenges in effectively organizing guild members, distributing assets, tracking performance, and fostering collaboration within the gaming community.',
    task: 'Design and develop a web3 gaming guild management platform that provides guild managers with the necessary tools and features to streamline guild management, enhance member engagement, and maximize the potential of web3 gaming communities.',
    solution: [
      'Integrating web3 technologies, blockchain, and NFTs.',
      'Able to create and manage guild members, assign roles and responsibilities, distribute assets securely through NFTs, track member performance.',
      'Facilitate seamless management and distribution of virtual assets, including in-game items and NFTs.',
      'Provide comprehensive analytics and reporting capabilities, allowing guild managers to track guild performance, monitor individual progress, and identify areas for improvement.',
    ],
    skills: {
      languages: 'JavaScript/Node, C#, Java, Golang',
      tools: 'Algolia, GraphQL, Airtable, Zapier',
      frameworks: 'Next.js, React Native, Tailwind CSS',
    },
  },
  {
    name: 'JOVI',
    role: 'Project Manager',
    duration: 'Mar 2020 - Nov 2021',
    location: 'United Kingdom',
    intro: 'JOVI is a social media platform that focuses on creating meaningful connections between users through shared interests and activities.',
    problem: 'Existing social media platforms often prioritize superficial interactions over meaningful connections. Users find it difficult to connect with others who share their interests and values.',
    task: 'Develop a platform that facilitates deeper connections by matching users based on shared interests, activities, and values.',
    solution: [
      'Implemented an algorithm to match users based on their interests and activities.',
      'Developed features like event creation, group chats, and activity feeds to encourage user engagement.',
      'Integrated various social media APIs to enhance user experience.',
      'Provided robust privacy controls and security measures to protect user data.',
    ],
    skills: {
      languages: 'JavaScript/Node, Python, Ruby',
      tools: 'Firebase, GraphQL, PostgreSQL',
      frameworks: 'React, Redux, Tailwind CSS',
    },
  },
  {
    name: '99Starz',
    role: 'Lead Developer',
    duration: 'Jan 2019 - Feb 2020',
    location: 'Canada',
    intro: '99Starz is a blockchain-based platform that allows users to earn rewards by participating in decentralized games and competitions.',
    problem: 'Users face challenges in earning rewards through traditional gaming platforms due to centralized control and lack of transparency.',
    task: 'Create a decentralized platform where users can earn rewards through fair and transparent gaming competitions.',
    solution: [
      'Built a blockchain-based system to ensure transparency and fairness in gaming competitions.',
      'Developed smart contracts to automate reward distribution.',
      'Integrated cryptocurrency wallets for easy transactions.',
      'Provided analytics tools to track user performance and rewards.',
    ],
    skills: {
      languages: 'Solidity, JavaScript/Node, Python',
      tools: 'Ethereum, Truffle, Web3.js',
      frameworks: 'React, Next.js, Tailwind CSS',
    },
  },
  {
    name: 'ChatAI',
    role: 'AI Specialist',
    duration: 'May 2018 - Dec 2018',
    location: 'Germany',
    intro: 'ChatAI is an AI-powered chatbot platform designed to improve customer service and engagement for businesses.',
    problem: 'Businesses struggle to provide timely and effective customer service due to limited resources and high demand.',
    task: 'Develop an AI-powered chatbot that can handle customer inquiries, provide support, and engage users effectively.',
    solution: [
      'Implemented natural language processing (NLP) algorithms to understand and respond to user queries.',
      'Integrated with various CRM systems to provide personalized support.',
      'Developed analytics tools to monitor chatbot performance and user satisfaction.',
      'Provided a user-friendly interface for businesses to customize and manage their chatbots.',
    ],
    skills: {
      languages: 'Python, JavaScript/Node',
      tools: 'TensorFlow, NLTK, MongoDB',
      frameworks: 'React, Express, Tailwind CSS',
    },
  },
];

const ProjectsPage = () => {
  return (
    <div className="h-screen text-gray-300 px-5 lg:px-10 ">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full h-screen pt-[80px] pb-5 overflow-y-scroll lg:w-1/4 p-5 border-r border-gray-700">
          <h2 className="text-2xl font-bold mb-5">projects</h2>
          <ul className="space-y-4">
            {projects.map((project, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="text-blue-600">📁</span>
                <a href={`#${project.name}`} className="hover:text-blue-600">{project.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-1 p-5 pt-[80px] pb-5 h-screen overflow-y-scroll">
          {projects.map((project, index) => (
            <div key={index} id={project.name} className="mb-10">
              <h3 className="text-xl font-bold mb-2">{project.role}</h3>
              <p className="text-gray-600 mb-4">{project.duration} | {project.location}</p>
              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-1">Project Intro</h4>
                <p className='text-gray-600 '>{project.intro}</p>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-1">Problem Statement</h4>
                <p className='text-gray-600 '>{project.problem}</p>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-1">Task</h4>
                <p className='text-gray-600 '>{project.task}</p>
              </div>
              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-1">Solution</h4>
                <ul className="list-disc text-gray-600  list-inside">
                  {project.solution.map((sol, solIndex) => (
                    <li key={solIndex}>{sol}</li>
                  ))}
                </ul>
              </div>
              <div className="flex space-x-4">
                {Object.entries(project.skills).map(([skillType, skillList], skillIndex) => (
                  <div key={skillIndex} className="p-4 border transition-all ease-in-out duration-500 cursor-pointer hover:bg-gray-800 border-gray-700 rounded">
                    <h4 className="font-semibold mb-2">{skillType.charAt(0).toUpperCase() + skillType.slice(1)}</h4>
                    <p className='text-gray-600 '>{skillList}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
