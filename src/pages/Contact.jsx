import React from 'react';

const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="bg-slate-100 rounded-lg shadow-lg p-8 w-full max-w-md transform transition-transform duration-500 hover:rotate-0 rotate-y-10">
        <h1 className="text-2xl font-bold text-center mb-6">Contact Us</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input type="text" name="name" required className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" name="email" required className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea name="message" required className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          </div>
          <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
