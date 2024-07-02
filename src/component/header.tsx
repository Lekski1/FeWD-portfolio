import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/main.css';
import { textMoving } from '../tsc/text_moving';

const Header: React.FC = () => {
  useEffect(() => {
    textMoving();
  }, []);

  return (
    <div id="bar">
      <div id="name_section">
        <h1 id="site_name">M.E.Blog</h1>
      </div>
      <div id="other_section_block">
        <div id="other_section">
          <Link to="/" className="other_name">
            <img src="src/icon/WhoIam.png" alt="Who I am icon" /> Who I am
            <span className="underline" />
          </Link>
          <Link to="/blog" className="other_name">
            <img src="src/icon/Blog.png" alt="Blog" /> Blog
            <span className="underline" />
          </Link>
          <Link to="/it" className="other_name">
            <img src="src/icon/IT.png" alt="IT" /> IT
            <span className="underline" />
          </Link>
          <Link to="/contact" className="other_name">
            <img src="src/icon/Contact.png" alt="Contact" /> Contact
            <span className="underline" />
          </Link>
          <Link to="/comic" className="other_name">
            <img src="src/icon/comic.png" alt="Comic" /> Comic
            <span className="underline" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;