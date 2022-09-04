import React from 'react';
import { Button, Card } from 'react-bootstrap';
import Rating from './Rating';
import './styles.css';
import {CartState} from '../context/Context';

function SingleProduct({prod}) {
    const { state : { cart } , dispatch} = CartState();
  return (
    <div className='products'>
        <Card>
            <Card.Img variant="top" src={prod.imgUrl} alt={prod.name}/>
            <Card.Body>
                <Card.Title>{prod.name}</Card.Title>
                <Card.Subtitle>
                    <span>$ {prod.price}</span>
                    {prod.fastDelvery ? (
                        <div>Fast Delivery</div>
                    ) : (
                        <div>4 Days Delivery</div>
                    )}
                    <Rating rating={prod.ratings}/>
                </Card.Subtitle>
                {
                    cart.some(p=>p.id === prod.id) ?
                    <Button 
                        variant="danger" 
                        style={{marginRight:10}}
                        onClick={() => dispatch({
                            type: 'REMOVE_FROM_CART',
                            payload: prod
                        })}
                    >Remove From Cart</Button> :
                    <Button 
                        disabled={!prod.inStock}
                        onClick={() => dispatch({
                            type: 'ADD_TO_CART',
                            payload: prod
                        })}
                    >
                        {prod.inStock ? "Add to Cart" : "Out of Stock"}
                    </Button>
                }
            </Card.Body>
        </Card>
    </div>
  );
}

export default SingleProduct;
