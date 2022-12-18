import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import logo from '../../src/img/petro.png';

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
      return (
       
        <div id="header">
              <div id="petro">
                  <img src={logo} />
              </div>
              <NavMenu />
               
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
