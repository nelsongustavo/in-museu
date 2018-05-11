import React, { Component } from 'react';
import { Grid, Button } from 'react-bootstrap';
import Layout from '../../Shared/Layout';
import Modal from '../../Shared/Modal';
import Collection from './_/Collection';
import Museum from './_/Museum';
import Videos from './_/Videos';
import VirtualTour from './_/VirtualTour';

import './Home.css';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showForm: false
    };
    this.handleFormButton = this.handleFormButton.bind(this);
    this.closeForm = this.closeForm.bind(this);
  }

  handleFormButton() {
    this.setState({
     showForm: true
   });
  }

  closeForm() {
    this.setState({
      showForm: false
    })
  }

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
            <Button bsStyle="warning" onClick={this.handleFormButton}>VIDEO BOLADO</Button>
            { this.state.showForm ? <Modal
                                      title="Video Boladão"
                                      closeForm={this.closeForm}
                                    /> : null }
          </Grid>
        </Layout>
      </div>
    );
  }
}
