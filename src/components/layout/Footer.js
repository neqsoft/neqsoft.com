import React from 'react';

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800">
    <div className="flex justify-around">
      <div className="p-2">
        <h2 className="text-lg font-semibold">About Us</h2>
        <p className="mt-5">oooweee.</p>
      </div>
      <div className="p-2">
        <h2 className="text-lg font-semibold">Social Media</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://pgu.dev">Personal website</a>
          </li>
          <li>
            <a href="https://twitter.com/nakkht">Twitter</a>
          </li>
          <li>
            <a href="https://github.com/neqsoft">GitHub</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
