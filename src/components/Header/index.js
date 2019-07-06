import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button } from 'reactstrap';

class Header extends React.Component {

  static propTypes = {
    children: PropTypes.object,
    brandName: PropTypes.string.isRequired,
    brandImageUrl: PropTypes.string
  }

  goToNew = (id) => {
    this.props.history.push(`/video/${id}`)
  }

  goHome = () => {
    this.props.history.push('/')
  }

  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { history, brandName, brandImageUrl } = this.props;
    return (
      <header>
        <Navbar color="light" light expand="md">
          {brandName && <NavbarBrand>{brandName}</NavbarBrand>}
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>

            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/new">Nuevo video</NavLink>
              </NavItem>
              <NavItem>
                <Button onClick={() => this.goToNew(1)}>
                  Video 1
                </Button>
              </NavItem>
              <NavItem>
                <Button onClick={() => this.goToNew(2)}>
                  Video 2
                </Button>
              </NavItem>
              <NavItem>
                <Button onClick={history.goForward}>
                  Adelante
                </Button>
              </NavItem>
              <NavItem>
                <Button onClick={history.goBack}>
                  Atras
                </Button>
              </NavItem>
              <NavItem>
                <img style={{ width: '35px' }} src="https://img.lovepik.com/element/40062/8166.png_860.png" alt="" onClick={this.goHome}/>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    )

  }
}

export default withRouter(Header);
