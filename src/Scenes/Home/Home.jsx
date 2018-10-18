import React from 'react';
import Layout from '../../Shared/Layout';
import Collection from './_/Collection';
import Museum from './_/Museum';
import VirtualTour from './_/VirtualTour';
import Videos from './_/Videos';
import MuseumCompetition from './_/MuseumCompetition';

import './Home.css';

export default function Home(){
  return (
    <div className="home">
      <Layout>
        <Museum />
        <Collection />
        <Videos />
        <VirtualTour />
        <MuseumCompetition />
      </Layout>
    </div>
  );
}
