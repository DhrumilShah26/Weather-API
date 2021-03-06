import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component {
    render() {
        return(
          <React.Fragment>
            <Navbar dark expand="md">
              <div className="container">
                <NavbarBrand className="mr-auto" href="/">
                  <span>Weather Finder</span>
                </NavbarBrand>
              </div>
            </Navbar>
            <Jumbotron>
              <div className="container">
                <div className="row row-header">
                  <div className="col-12 col-sm-6">
                    <h1>Weather Finder</h1>
                    <p>Enter the city and the country that you want to know about the weather of, in the below field and hit the search button.</p>
                  </div>
                </div>
              </div>
            </Jumbotron>
          </React.Fragment>
        );
    }
}

export default Header;