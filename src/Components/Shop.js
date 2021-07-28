import React, { useState } from 'react';
import shoe from './shoe';

const ProductCard = (props) => {
    return (
        <div id='product-card'>
            <div id='product-card-background'>
                <div id='product-card-background-element'>
                </div>
                    <div id='product-icons'>
                    <img src="https://img.icons8.com/fluent-systems-filled/48/000000/shopping-bag.png" alt='cart-icon' id='add-to-cart' onClick={props.handle}/>
                    </div>
                    <div id='background-blur'></div>
                    <div id={props.color}>
                    <div id='yellow-circle'></div>
                    <div id='shoe-details-image'>
                    <img src={props.image} alt='shoe' id='shoe-image'/>
                    </div>
                    </div>
                    <div id='shoe-details-name'>
                    <div id='shoe-name'>{props.name}</div>
                    </div>
                    <div id='shoe-details-price'>
                    <div id='shoe-price'>₹{props.price}</div>
                    </div>
        </div>
        </div>
    )
}


const Shop = () => {

    let [cart,addtocart] = useState(0)
    let [cartValue, newCartValue] = useState(0)

    function handleCart(a){
        // eslint-disable-next-line 
        return (addtocart(cart + 1), 
        newCartValue(cartValue + 14500))
    }

    return (
    <div>
        <div id='main-background'>
        <div id='shopping-background-2'></div>
            <div id='shopping-background'>
            <div id='shopping-background-elements'>
                <div id='shopping-background-circle-1'></div>
                    <div id='shopping-background-circle-2'></div>
                        <div id='shopping-background-circle-3'></div>
                           <div id='shopping-background-circle-4'></div>                                    
                                <div id='shopping-background-circle-5'></div>
                                    <div id='shopping-background-circle-6'></div>
                                <div id='crop'></div>
            </div>
                <div id='Home-page-bar'>
                <a href='/'>
                    <div id='logo'>
                        <div id='logo-text'>Shoehub</div>
                        <div id='logo-icon'>
                            <img src="https://img.icons8.com/plumpy/24/000000/four-squares.png" alt='logo icon'/>
                        </div>
                    </div>
                </a>
                    <div id='nav-bar'>
                        <a href='./Home' id='home'>Home</a>
                        <a href='./' id='shop'>Shop</a>
                        <a href='./' id='blog'>Blog</a>
                        <a href='./' id='contact'>Contact</a>
                    </div>
                    <div id='cart'>
                            <div id='cart-value'>₹{cartValue}</div>
                            <div id='cart-item-count'>{cart}</div>
                            <div id='cart-icon'>
                                <img src="https://img.icons8.com/fluent-systems-filled/48/000000/shopping-bag.png" alt='cart-icon' id='main-cart' />
                            </div>
                    </div>
                </div>
                <div id='Shop-page'>
                    <div id='shop-page-bar'>
                        <div id='home-products'>
                        <a href='./' id='home-product'>Home</a>/<a href='/shop'id='product-home'>Product</a>
                        </div> 
                        <h1><strong id='shop-page-heading'>Shop</strong></h1>
                        <div id='results'>Showing 1 of 20 results</div>
                        <select name='sorting' id='sorting-menu'>
                            <option value='Default-Sorting'>Default Sorting</option>
                            <option value='Popularity'>Popularity</option>
                            <option value='Relevance'>Relevance</option>
                            <option value='Price-Highest-to-Lowest'>Price:Highest to Lowest</option>
                            <option value='Price-Lowest-to-Highest'>Price:Lowest to Highest</option>
                        </select>
                        <div id='social-media'>
                            <strong>
                                Follow - Fb. / In. / Tw.
                            </strong>
                        </div>
                    </div>
                </div>
                <div id='product-list'>
                <ProductCard id="card1" name={shoe[0].name} image={shoe[0].image} price={shoe[0].price} color='orange' handle={handleCart}/>
                <ProductCard id="card2" name={shoe[1].name} image={shoe[1].image} price={shoe[1].price} color='blue' handle={handleCart}/>
                <ProductCard id="card3" name={shoe[2].name} image={shoe[2].image} price={shoe[2].price} color='green' handle={handleCart}/>
                </div>
            </div>
        </div>
    </div>)
}



export default Shop;