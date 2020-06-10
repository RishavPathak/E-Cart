import React, { Component } from 'react'
import Product from '..///Product/Product';
import './ProductList.css'
import { ProductConsumer } from '../../Context'


export class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='container'>
                    <div className='title'>
                        <div>OUR</div>
                        <div className='productName'>PRODUCT</div>
                    </div>
                    <div className='row'>
                            <ProductConsumer>
                                {(value) => {
                                    return value.product.map((product) => {
                                        return <Product key={product.id} product={product} />
                                    })
                                }}
                            </ProductConsumer>
                            <div>
                            </div> 
                        </div>
                   </div>
            </React.Fragment>
            // <div className='container'>
            //     <div className='row'>
                    
            //         <ProductConsumer>
            //             {(value) => {
            //                 return value.product.map((product) => {
            //                     return <Product key={product.id} product={product} />
            //                 })
            //             }}
            //         </ProductConsumer>
                    
            //     </div>
            // </div>

        )
    }
}

export default ProductList
