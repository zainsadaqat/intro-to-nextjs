import React from 'react';
import Link from 'next/link';

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <Link href="/" className="navbar-brand mb-0 h1">
            Cats World
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
