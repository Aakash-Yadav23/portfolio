import React from 'react';
import { Mail, Facebook, Linkedin, Github, Twitter } from 'lucide-react';

const ContactPage = () => {
    return (
        <div className="min-h-screen  justify-center flex flex-col items-center py-20 px-5">
            <h1 className="text-3xl font-bold mb-4">contact_me</h1>
            <p className="text-center mb-4 max-w-[800px]">
                I’m looking forward to connecting with you. Don’t hesitate to reach out to me for a meeting today.
            </p>
            <div className="flex items-center space-x-2 mb-6">
                <Mail className="w-5 h-5" />
                <span>johndoe@gmail.com</span>
            </div>
            <div className="flex space-x-4 mb-8">
                <a href="#" className="flex items-center px-4 py-2 border border-gray-700 rounded hover:bg-gray-700">
                    <Facebook className="w-5 h-5 mr-2" />
                    Facebook
                </a>
                <a href="#" className="flex items-center px-4 py-2 border border-gray-700 rounded hover:bg-gray-700">
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                </a>
                <a href="#" className="flex items-center px-4 py-2 border border-gray-700 rounded hover:bg-gray-700">
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                </a>
                <a href="#" className="flex items-center px-4 py-2 border border-gray-700 rounded hover:bg-gray-700">
                    <Twitter className="w-5 h-5 mr-2" />
                    Twitter
                </a>
            </div>
            <form className="w-full max-w-[800px] space-y-4">
                <div className="flex flex-col">
                    <label htmlFor="name" className="mb-1">_name</label>
                    <input
                        type="text"
                        id="name"
                        className="p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-gray-500"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email" className="mb-1">_email</label>
                    <input
                        type="email"
                        id="email"
                        className="p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-gray-500"
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="message" className="mb-1">_message</label>
                    <textarea
                        id="message"
                        rows={4}
                        className="p-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:border-gray-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 bg-gray-800 border border-gray-700 rounded hover:bg-gray-700 focus:outline-none"
                >
                    submit-message
                </button>
            </form>
        </div>
    );
};

export default ContactPage;
