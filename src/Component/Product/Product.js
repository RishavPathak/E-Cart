import React, { Component } from 'react'
import './Product.css'
import { Link } from 'react-router-dom'
// import {ProductConsumer} from '../../Context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import PropTypes from  'prop-types'
export class Product extends Component {

    render() {
        const { id, title, img, price, inCart } = this.props.product
        return (
            
            <div className='col-9 mx-auto col-md-6 col-lg-3'>
                <div className='card'>
                    <div className='img-container p-5'>
                    <Link to='/details'>
                        <img src={img} alt="product" className="card-img-top" />
                    </Link>
                    </div>
                    <button className='cart-btn' disabled={inCart ? true : false} onClick={() => { console.log('rishav') }}>
                        {inCart ? (<p disabled>In Cart</p>) : <FontAwesomeIcon icon={faShoppingCart} aria-hidden="true" />}
                    </button>
                    
                    {/* card footer */}
                    <div className='card-footer'>
                        <p>{title}</p>
                        <h5>${price}</h5>
                    </div>
                </div>
            </div>
            
        )
    }
}

Product.propTypes={
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool,
    }).isRequired
}

export default Product
