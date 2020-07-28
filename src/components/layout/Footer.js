import React from 'react';
import Helmet from 'react-helmet';

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800">

    <div className="flex justify-around">    
      <div className="p-2">
        <h2 className="text-lg font-semibold">Social Media</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://www.linkedin.com/company/neqsoft">LinkedIn</a>
          </li>
          <li>
            <a href="https://twitter.com/nakkht">Twitter</a>
          </li>
          <li>
            <a href="https://github.com/neqsoft">GitHub</a>
          </li>
        </ul>
      </div>

      <div id="contact" className="p-2">
        <h2 className="text-lg font-semibold">Contact</h2>
        <a href="mailto:pg@neqsoft.com">E-mail</a>
      </div>

    </div>

    <div className="application">
      <Helmet>
        <meta charSet="utf-8" />
        <title>neqsoft</title>
      </Helmet>
    </div>

  </footer>
);

export default Footer;
