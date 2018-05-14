import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';
import Layout from '../../Shared/Layout';
import Collection from './_/Collection';
import Museum from './_/Museum';
import Videos from './_/Videos';
import VirtualTour from './_/VirtualTour';

import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Layout>
          <Grid>
            <Collection />
            <Museum />
            <Videos />
            <VirtualTour />

            <h1>Museo da Imprensa</h1>
            <h2>Bla Bla Bla Bla Bla Bla</h2>
          </Grid>
        </Layout>
      </div>
    );
  }
}
