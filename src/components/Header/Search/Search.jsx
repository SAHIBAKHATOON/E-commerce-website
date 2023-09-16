import { useState } from "react";
import { MdClose } from "react-icons/md";
import "./Search.scss";
 
 import useFetch from "../../../hooks/useFetch";

import prod from '../../../assets/products/earbuds-prod-1.webp'
 
const Search = ({setShowSearch}) => {
    const [query, setQuery] = useState("");
    
    const onChange = (e) => {
    setQuery(e.target.value)
    }
    let {data} = useFetch(`/api/product?populate=*&filters[title][$contains]=${query}`);
    if(!query.length){
     data = null;
    }
    return( 
    <div className="search-modal">
        <div className="form-field">
            <input type="text" autoFocus 
            placeholder="Search for products" 
            value={query}
            onChange={onChange}
            />
            <MdClose onClick={() => setShowSearch(false)}/>
        
        </div>
        <div className="search-result-content">
            <div className="search-results">
               
                  <div 
            
                  className="search-result-item" 
              
                  >
                  
                  <div className="img-container">
                  <img src={prod} alt="" />
              </div>
              <div className="prod-details">
                  <span className="name">product name</span>
                  <span className="desc">product desc</span>
              </div>
          </div>
              
                
        </div>
    </div>
    </div>
    
    )
};

export default Search;
