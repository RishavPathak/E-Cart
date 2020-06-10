import React, { Component } from 'react'
import {storeProducts,detailProduct } from "../src/data";

const ProductContext=React.createContext();
//Provide
//Consumer
class ProductProvider extends Component {
    state={
        product: storeProducts,
        detailProduct: detailProduct
    }
    handleDetail=()=>{
        console.log('hello frpm Product')
    }
    addToCart=()=>{
        console.log('hello frpm detail')
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state, 
                handleDetail:this.handleDetail,
                addToCart:this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer=ProductContext.Consumer;
export {ProductProvider , ProductConsumer};
