import React from 'react';
import Layout from '../../Shared/Layout';
import Collection from './_/Collection';
import Museum from './_/Museum';
import Videos from './_/Videos';
import VirtualTour from './_/VirtualTour';

import './Home.css';

export default function Home(){
  return (
    <div className="home">
      <Layout>
        <Collection />
        <Museum />
        <Videos />
        <VirtualTour />
      </Layout>
    </div>
  );
}
