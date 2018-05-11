import React from 'react';
import { Navbar } from 'react-bootstrap';

export default function Header() {
  return (
    <div className="header">
      <header>
        <Navbar inverse className="header">
          <a href="/">Museu da imprensa</a>
        </Navbar>
      </header>
    </div>
  );
}
