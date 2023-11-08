import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Button, Container, Dropdown, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import { CartState } from '../context/Context';
import { AiFillDelete } from 'react-icons/ai';
import './styles.css';

function Header() {
    const { state: { cart }, dispatch, productDispatch } = CartState();
    const [searchFilter, setSearchFilter] = useState("");
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <Link to="/">
                            <img
                                alt=""
                                src="../../logo.svg.png"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                            <span style={{ color: "white !important" }}>ESCart</span>
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Text className="search">
                        <FormControl
                            style={{ minWidth: 500 }}
                            placeholder={"Search a product"}
                            className="m-auto"
                            value={searchFilter}
                            onChange={(e) => {
                                setSearchFilter(e.target.value)
                                productDispatch({
                                  type: "FILTER_BY_SEARCH",
                                  payload: searchFilter
                                })
                            }
                              }
                        />
                    </Navbar.Text>
                    <Nav>
                        <Dropdown>
                            <Dropdown.Toggle variant='success'>
                                <FaShoppingCart color='white' fontSize={"25px"} />
                                <Badge>{cart.length}</Badge>
                            </Dropdown.Toggle>
                            <Dropdown.Menu style={{ minWidth: 300 }}>
                                {
                                    (cart.length > 0) ? (
                                        <>
                                            {cart.map((prod) => (<span className='cartItem' key={prod.id}>
                                                <img
                                                    src={prod.imgUrl}
                                                    className="cartItemImg"
                                                    alt={prod.name}
                                                />
                                                <div className='cartItemDetail'>
                                                    <span>{prod.name}</span>
                                                    <span>${prod.price}</span>
                                                </div>
                                                <AiFillDelete
                                                    fontSize="20px"
                                                    style={{ cursor: "pointer" }}
                                                    onClick={() => {
                                                        dispatch({
                                                            type: "REMOVE_FROM_CART",
                                                            payload: prod
                                                        })
                                                    }}
                                                />
                                            </span>))
                                            }
                                            <Link to="/cart">
                                                <Button style={{ width: "95%", margin: "0 10px" }} >Go To Cart</Button>
                                            </Link>
                                        </>
                                    ) : (
                                        <span style={{ padding: 10 }}>Cart is empty</span>
                                    )
                                }
                            </Dropdown.Menu>
                        </Dropdown>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;
