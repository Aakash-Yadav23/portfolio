import TextCard, { TextCardProps } from '@/components/global/TextCard';
import React from 'react';
import { Globe, Scale, Zap, Newspaper, Cloud, Bitcoin, TrendingUp, Layout, Code, Server, TowerControl, Database } from 'lucide-react';

const textArray: TextCardProps[] = [
    {
        title: "About me",
        description: "Keeping it real, making use of modern tools and methodologies to accelerate business growth and establishing unfair advantages."
    },
];


const textSecondArray: TextCardProps[] = [
    {
        icon: <Globe />,
        title: "Rapid Prototyping & MVP",
        description: "From concept, ideation and prototyping to MVP, testing and launching technology enabled business is in my DNA."
    },
    {
        icon: <Zap />,
        title: "Full Stack Development",
        description: "Over the years, I've specialized in all areas of the stack, Front-End to Back-End, DevOps and Infrastructure, at scale."
    },
    {
        icon: <Newspaper />,
        title: "FinOps / Serverless / Cloud Native",
        description: "As an early adopter and advocate of Cloud, I use leading-edge tools, services and techniques to give businesses major advantage in time to market and TCO."
    },
    {
        icon: <Cloud />,
        title: "Strategy and Digital Transformation",
        description: "A set of unorthodox yet complimentary skills to create advantage."
    },
    // {
    //     icon: <Cloud />,
    //     title: "Serverless First",
    //     description: "Serverless technology is set to become the compute platform for the next decade, businesses who leverage it early can get major competitive advantage."
    // },
    // {
    //     icon: <Bitcoin />,
    //     title: "Cryptocurrency",
    //     description: "Deep knowledge of Blockchain and Cryptocurrency, have done speaking engagements and passed the ConsenSys Blockchain Developer Academy in 2018."
    // },
    // {
    //     icon: <TrendingUp />,
    //     title: "Growth Marketing",
    //     description: "I have a fascination with growth marketing, using technology, data and non-obvious approaches to getting customers and obtaining growth."
    // }
];

const textThirdArray: TextCardProps[] = [
    // {
    //     icon: <Globe />,
    //     title: "Rapid Prototyping & MVP",
    //     description: "From concept, ideation and prototyping to MVP, testing and launching technology enabled business is in my DNA."
    // },
    // {
    //     icon: <Zap />,
    //     title: "Full Stack Development",
    //     description: "Over the years, I've specialized in all areas of the stack, Front-End to Back-End, DevOps and Infrastructure, at scale."
    // },
    // {
    //     icon: <Newspaper />,
    //     title: "FinOps / Serverless / Cloud Native",
    //     description: "As an early adopter and advocate of Cloud, I use leading-edge tools, services and techniques to give businesses major advantage in time to market and TCO."
    // },
    // {
    //     icon: <Cloud />,
    //     title: "Strategy and Digital Transformation",
    //     description: "A set of unorthodox yet complimentary skills to create advantage."
    // },
    {
        // icon: <Cloud />,
        title: "Serverless First",
        description: "Serverless technology is set to become the compute platform for the next decade, businesses who leverage it early can get major competitive advantage."
    },
    {
        // icon: <Bitcoin />,
        title: "Cryptocurrency",
        description: "Deep knowledge of Blockchain and Cryptocurrency, have done speaking engagements and passed the ConsenSys Blockchain Developer Academy in 2018."
    },
    {
        // icon: <TrendingUp />,
        title: "Growth Marketing",
        description: "I have a fascination with growth marketing, using technology, data and non-obvious approaches to getting customers and obtaining growth."
    }
];

const skillsArray: TextCardProps[] = [
    {
        title: "Languages",
        description: "JavaScript/Node, C#, Java, Golang",
        // icon: <Code />
    },
    {
        title: "Frameworks",
        description: "Serverless Framework, AWS Amplify, Furnace Framework, React, Gatsby, Next.js, React Native, Xamarin, Tailwind CSS, Grommet",
        // icon: <Layout />
    },
    {
        title: "DevOps",
        description: "GitHub, Docker, Kubernetes, Ansible, Terraform, Pulumi, GitLab, Jenkins, Circle CI",
        // icon: <Server />
    },
    {
        title: "Tools",
        description: "Sanity CMS, Algolia, GraphQL, Airtable, Zapier",
        // icon: <TowerControl />
    },
    {
        title: "Platforms",
        description: "Amazon Web Services (Lambda, DynamoDB, SQS, Kinesis, S3, API Gateway, ECS/Fargate), Microsoft Azure, Google Cloud Platform",
        // icon: <Server />
    },
    {
        title: "Big Data",
        description: "Apache Kafka, Apache Storm, Elasticsearch, Hadoop",
        // icon: <Database />
    }
];

const Page = () => {
    return (
        <div className='flex flex-col sm:flex-row border border-gray-800 h-full py-5 overflow-y-scroll gap-5'>
            <div className='flex w-full flex-col w-full  flex-1 px-5 lg:px-20 pt-20 gap-5'>
                {textArray.map((item, index) => (
                    <div key={index} className="card">
                        <TextCard title={item.title} className='text-[1.2rem]' icon={item.icon} description={item.description} />
                    </div>
                ))}

                <div className="py-10 flex flex-col gap-5">
                    {textSecondArray.map((item, index) => (
                        <div key={index} className="card">
                            <TextCard title={item.title} icon={item.icon} description={item.description} />
                        </div>
                    ))}
                </div>

                {textThirdArray.map((item, index) => (
                    <div key={index} className="card">
                        <TextCard title={item.title} icon={item.icon} description={item.description} />
                    </div>
                ))}
            </div>
            <hr className='h-full w-[.5px] bg-gray-800' />
            <div className="flex flex-col  w-full sm:max-w-[350px]     gap-5 pt-20 px-5 h-full overflo">
                {skillsArray.map((item, index) => (
                    <div key={index} className="card w-full">
                        <TextCard title={item.title} className='p-5 py-2 text-sm rounded-sm border border-gray-800' icon={item.icon} description={item.description} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page;
