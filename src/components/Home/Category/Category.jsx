import { useNavigate } from "react-router-dom";

import "./Category.scss";
import cat1 from '../../../assets/category/cat-1.jpg'
const Category = () => {
    const navigate =useNavigate();
    return <div className="shop-by-category" > 
    <div className="categories">
         
            
         <div className="category" onClick={() => navigate('/category/1')} >
            <img src={cat1} alt="" />
        </div>
        <div className="category" onClick={() =>  navigate('/category/2')} >
            <img src={cat1} alt="" />
        </div>
        <div className="category" onClick={() =>   navigate('/category/3')} >
            <img src={cat1} alt="" />
        </div>
        <div className="category" onClick={() =>   navigate('/category/4')} >
            <img src={cat1} alt="" />
        </div>
    </div>
    </div>;
};

export default Category;
