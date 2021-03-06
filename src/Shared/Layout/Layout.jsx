import React from 'react';
import Header from './_/Header/Header';
import Footer from './_/Footer/Footer';
import './Layout.css';

export default function Layout(props) {
  return (
    <div className="layout">
      <Header redirect={props.redirect} />
        {props.children}
      <Footer />
    </div>
  );
}
