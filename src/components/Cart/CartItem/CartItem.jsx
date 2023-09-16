import { MdClose } from "react-icons/md";
import prod from '../../../assets/products/earbuds-prod-1.webp'
import "./CartItem.scss";
import { useContext } from "react";
import { Context } from "../../../utils/context";
 
const CartItem = () => {
   const { cartItems,   handleRemoveFromCart,   handleCartProductQuantity} = useContext(Context);

    return <div className="cart-products">
      

     
        <div  className="cart-product">
            <div className="img-container">
            <img src={prod} alt="" />
            </div>
            <div className="prod-details">
                <span className="name">product name</span>
                <MdClose  className="close-btn" onClick={() => handleRemoveFromCart()}/>
                <div className="quantity-buttons">
                            <span onClick={() => handleCartProductQuantity('dec',  )}>-</span>
                            <span>5</span>
                            <span onClick={() => handleCartProductQuantity('inc',  )}>+</span>
                        </div>
                        <div className="text">
                            <span>3</span>
                            <span>x</span>
                            <span className="highlight">&#8377;4567</span>
                        </div>
            </div>
        </div>
          
    </div>;
};

export default CartItem;
