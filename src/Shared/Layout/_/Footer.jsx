import React from 'react';
import { Grid, Navbar, Row, Col } from 'react-bootstrap';

export default function Footer() {
  return (
    <Navbar inverse className="layout-footer">
      <Grid>
        <Row className="show-grid">
          <Col md={8} mdOffset={0} />
          <Col md={4} />
        </Row>
      </Grid>
    </Navbar>
  );
}
