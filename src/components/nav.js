import {Link} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ShopContext } from "../context/shopContext";
import './nav.css'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Nav =()=>{
const {cartItems} = useContext(ShopContext)
const itemCount = cartItems?.reduce((prev , current)=>{
  return prev + current.count
},0)
return(

<div className="navbar navbar-dark bg-dark navbar-expand-lg p-4 m-1 mt-2">

 <div className="container">

   <a className="navbar-brand fw-light fs-2  border-black">Apocalypse Shop</a>

    <ul className="navbar-nav">

      <li className="nav-item">

        <Link to="/" className="nav-link fs-5 fw-semibold ">Shop</Link>
        

      </li>

      <li className="nav-item">

        <Link to= "/cart" className="nav-link fs-4 fw-bold p-2 ">

            <FontAwesomeIcon icon={faShoppingCart} />
           {itemCount > 0 && <span className="cart-items-count">{itemCount}</span>}
        </Link>

      </li>

    </ul>

 </div>
 
</div>


)

};
export default Nav;