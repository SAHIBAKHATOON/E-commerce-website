import { useNavigate } from "react-router-dom";
import "./Product.scss";
import prod from '../../../assets/products/earbuds-prod-1.webp';
 
const Product = ({ } ) => {
    
const navigate = useNavigate()
    return <div className="product-card" onClick={() => navigate("/product/1" )}>

        <div className="thumbnail">
            <img src={prod} alt=""/>
           
        </div>
        <div className="prod-details">
            <span className="name">Earbuds</span>
            <span className="price">&#8377;999</span>
        </div>
    </div>
};

export default Product;
