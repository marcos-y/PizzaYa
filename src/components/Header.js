import React, { useState } from 'react';
import logoAzul from './logoAzul.png';
import './Header.css';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import Pizzeria from './Pizzeria';
import Form from 'react-bootstrap/Form';

import ico1 from './Login/user.png';
import ico2 from './Login/pass.png';

import {
    Link,
    useParams
} from "react-router-dom";


const Header = (props) => {

    const [show, setShow] = useState(false);
    const [loginType, setloginType] = useState("");
    const handleClose = () => setShow(false);
    
    const handleShow = (type) => {
        setloginType(type);
        setShow(true);
    }

    const [password, setPassword] = useState("");
    const [user, setUser] = useState("");
    const [users, setUsers] = useState([]);
    const handleChangePassword = event => setPassword(event.target.value);
    const handleChangeUser = event => setUser(event.target.value);

    
    const handleSubmit = () => {
        const usuario = { user, password };
        setUsers([...users, usuario]);
        console.log(users);
        setShow(false);
        props.submitUser(user);
    }

    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const [nombre,setNombre] = useState("");
    const [encontrado,setEncontrado] = useState({});
    
    const handleChangeNombre = event =>setNombre(event.target.value);

    {/* BUSCADOR DE PRODUCTOS Y PIZZERIAS */}
    const handleShow2 = (listado) =>{
        setShow2(true);
        console.log(nombre);
        console.log(listado);
        const busca = listado.find(pizzeria=>(pizzeria.nombre === nombre) || (pizzeria.nombre.toLowerCase())===nombre);
        if(busca === undefined)
        {
            console.log(busca);
            setEncontrado({});
        }
        else{
            console.log(busca);
            setEncontrado(busca);
        }
    } 

    /*BUSCO LA IMAGEN EN EL ARRAY Y LA GUARDO EN UN OBJETO*/
    const {nombrePizzeria} = useParams();
    const busca2 = props.listadoPizzerias.find(pizzeria=>(pizzeria.nombre === nombrePizzeria));
    if(busca2 == undefined)
    {
        var imagenFondo = './logoAzul.png';
    }
    else{
         imagenFondo = busca2.imagen;
    }
   
    return (
        <>
            <div className="Header">
                <img src={imagenFondo} alt="" className="logo1"></img>
                <Navbar bg="light" variant="light" expand="lg">
                    <Link to="/">
                        <Navbar.Brand>Home</Navbar.Brand>
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavDropdown title="Categorias" id="basic-nav-dropdown">
                                <Link to="/Bebidas">
                                    <NavDropdown.Item href="#action/3.1">Bebidas</NavDropdown.Item>
                                </Link>
                                <Link to="Postres">
                                    <NavDropdown.Item href="#action/3.2">Postres</NavDropdown.Item>
                                </Link>
                            </NavDropdown>
                         
                            <Nav.Link href="#link" onClick={() => handleShow("Admin")}>Login</Nav.Link>
                        
                            {/*
                            <Nav.Link onClick={() => handleShow("AdminApp")}>Admin</Nav.Link>
                            */}
                        </Nav>

                        <div className="caja">
                            <FormControl type="text" placeholder="Buscar pizzeria o producto" className="mr-sm-2" onChange={handleChangeNombre} value={nombre}/>
                            <Button variant="outline-success" onClick={() => handleShow2(props.listadoPizzerias)}>Buscar</Button>
                        </div>

                    </Navbar.Collapse>
                </Navbar>

                {/*MODAL DEL CLIENTE */}
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>LogIn</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <label htmlFor="basic-url">Usuario</label>

                        <div className="form1">
                            <img src={ico1} alt="" width="40px" height="40px"></img>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Username"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    onChange={handleChangeUser}
                                    value={user}
                                />
                            </InputGroup>
                        </div>

                        <label htmlFor="basic-url">Clave</label>
                        <div className="form1">
                            <img src={ico2} alt="" width="40px" height="40px"></img>
                            <InputGroup className="mb-3">
                                
                                {/*
                                <FormControl
                                    placeholder="Password"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    onChange={handleChangePassword}
                                    value={password}
                                    type={password}
                                />*/}
                                <Form.Control type="password" placeholder="Password"  onChange={handleChangePassword}
                                    value={password} />
                            </InputGroup>
                        </div>

                    </Modal.Body>

                    <Modal.Footer>

                        <Link to={`/${loginType}`}>
                            <Button variant="outline-primary" onClick={handleSubmit}>
                                Ingresar
                        </Button>
                        </Link>

                        <Button variant="secondary" onClick={handleClose}>
                            Cerrar
                        </Button>

                    </Modal.Footer>
                </Modal>


                {/*Pizzeria encontrada*/}
                <Modal show={show2} onHide={handleClose2}>
                    <Modal.Header closeButton>
                        <Modal.Title>Pizzerias</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {
                            <Pizzeria nombre={encontrado.nombre} img={encontrado.imagen}></Pizzeria>
                         }
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleClose2}>
                            Cerrar
                        </Button>
                    </Modal.Footer>
                </Modal>


            </div>
        </>


    )
}

export default Header;