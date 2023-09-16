import { useState, useContext } from 'react';
import  RelateProducts from './RelatedProducts/RelatedProducts'
import{
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus,
} from 'react-icons/fa'
import prod from '../../assets/products/earbuds-prod-1.webp';
import "./SingleProduct.scss";
// import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';
import { Context } from '../../utils/context';
import useFetch from '../../hooks/useFetch';


const SingleProduct = () => {
    const {id} = useParams();
    const [quantity, setQuantity] = useState(1);
     const {data} = useFetch(`api/products?populate=*&[filters][id]=${id}`);
const {handleAddToCart} = useContext(Context)
   const increment =  () =>{
    setQuantity((prevState) => prevState + 1)
   }

   const decrement =  () =>{
   setQuantity((prevState) => {
    if(prevState === 1) return 1
    return prevState - 1
   })
   }

  
    return <div className='single-product-main-content'>
        <div className="layout">
            <div className="single-product-page">
                <div className="left">
                    <img src={prod} alt="" />
                </div>
                <div className="right">
                    <span className='name'>Earbuds</span>
                    <span className='price'>999</span>
                    <span className='desc'>Product description</span>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam tempora cumque assumenda quis eum quo nisi minus quam aspernatur, fuga vel architecto repellat facilis provident veritatis quos. Vero praesentium, incidunt aperiam cumque corporis voluptas repudiandae illum beatae officia libero? Porro ea ut at. Omnis perferendis velit saepe ab exercitationem corporis.</p>

                    <div className="cart-buttons">
                        <div className="quantity-buttons">
                            <span onClick={increment} >+</span>
                            <span>{quantity}</span>
                            <span onClick={decrement}>-</span>
                        </div>
                        <button className='add-to-cart-button' onClick={() =>{
                           
                        }}>
                            <FaCartPlus size={20}/>
                            ADD TO CART
                        </button>
                    </div>
                    <span className="divider" />

                     <div className="info-item">
                        <span className="text-bold">

                            Category:{" "}
                        <span>Headphones</span>
                        </span>
                        <span className="text-bold">
                         Share:
                         <span className="social-icons">
                            <FaFacebookF  size={16}/>
                            <FaTwitter   size={16}/>
                            < FaInstagram  size={16}/>
                            < FaLinkedinIn  size={16}/>
                            < FaPinterest  size={16}/>
                         </span>
                        </span>
                     </div>
                </div>
            </div>
             < RelateProducts 
           
             />  
        </div>
    </div>;
};

export default SingleProduct;
