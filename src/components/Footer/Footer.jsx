import React from "react";
import "./Footer.scss";
import {FaLocationArrow, FaMobileAlt, FaEnvelope} from 'react-icons/fa';
import Payment from '../../assets/payments.png'

 

const Footer = () => {
    return  (
        <footer className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam fugit optio doloribus, tenetur voluptas, dolorem adipisci quisquam inventore perferendis pariatur repellat. Libero laborum distinctio dolore laboriosam praesentium neque officiis obcaecati?
                        </div> 
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text"> Lorem ipsum dolor, sit amet consectetur adipisicing elit.</div>
                    </div>

                    <div className="c-item">
                        < FaMobileAlt />
                        <div className="text">Phone no - 68795 48594 48594</div>
                    </div>

                    <div className="c-item">
                        < FaEnvelope/>
                        <div className="text">E mail: abc@gmail.com </div>
                    </div>
                    </div>
                <div className="col">
                    <div className="title">Categories</div>
                     <span className="text">Headphones</span>
                     <span className="text">Smart Watches</span>
                     <span className="text">Bluetooth Speakers</span>
                     <span className="text">Wireless Earbuds</span>
                     <span className="text">Home Theatre</span>
                     <span className="text">Projectors</span>
                     </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">Contact</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Policy</span>
                    <span className="text">Contact US</span>
                    </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">
                        20223 CREATED  BY SOMEONE PREMIUM E-COMMERCE
                        SOLUTION
                    </div>
                    <img src={Payment} alt="" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
