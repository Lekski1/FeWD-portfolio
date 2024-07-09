import Link from 'next/link';
import '../styles/main.css';
import React from 'react';

const Header = () => {
    return (
        <div id="bar">
            <div id="name_section">
                <h1 id="site_name">M.E.Blog</h1>
            </div>
            <div id="other_section_block">
                <div id="other_section">
                    <Link href="/" className="other_name">
                        <img src="./icon/WhoIam.png" alt="Who I am icon" /> Who I am
                    </Link>
                    <Link href="/blog" className="other_name">
                        <img src="./icon/Blog.png" alt="Blog" /> Blog
                    </Link>
                    <Link href="/it" className="other_name">
                        <img src="./icon/IT.png" alt="IT" /> IT
                    </Link>
                    <Link href="/contact" className="other_name">
                        <img src="./icon/Contact.png" alt="Contact" /> Contact
                    </Link>
                    <Link href="/comic" className="other_name">
                        <img src="./icon/comic.png" alt="Comic" /> Comic
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
