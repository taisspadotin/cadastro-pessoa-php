import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import './style.scss';
import {Link} from 'react-router-dom';

class Cabecalho extends Component{
		render(){
			return(
			<>
				<Navbar className="cabecalho_Principal" expand="lg">
				  <Navbar.Toggle aria-controls="basic-navbar-nav" />
				  <Navbar.Collapse id="basic-navbar-nav" >
					<Nav className="mr-auto" style={{width:'100%', justifyContent: 'center', alignItems: 'center'}}>
					 <Link to="/">Home</Link>
					 <Link to="cadastro">Cadastro</Link>
					  <Link to="/">Buscar</Link>
					  {/*<NavDropdown title="Buscar" id="basic-nav-dropdown">
						<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
						<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
					  </NavDropdown>*/}
					</Nav>
				  </Navbar.Collapse>
				</Navbar>
			</>
			)
		}
}

export default Cabecalho;