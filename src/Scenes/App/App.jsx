import React from 'react';
import Layout from '../../Shared/Layout';
import Videos from '../Home/_/Videos';

import './App.css';

export default function Home(){
  return (
    <div className="app">
      <Layout>
        <Videos />
      </Layout>
    </div>
  );
}
