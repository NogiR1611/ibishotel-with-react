import React,{Component} from "react";
import {Link} from "react-router-dom";
import location from "./img/location.png";
import "./style.css";
 
class Footer extends Component{
    render(){
        const hearts = {
            color: "#fc3f5e",
            fontSize:"15px"
        };
        
        let time = new Date();
        let years = time.getFullYear();
        
        return(
            <footer>
                <div className="top-footer">
                    <p>
                        <Link to="/About">About Us</Link>
                        <span id="mini-vertical-border"></span>
                        <Link to="/contact">Contact Us</Link>
                    </p> 
                </div>
                <div className="middle-footer">
                    <div id="left-middle-footer">
                        <div className="maps">
                            <a href="https://goo.gl/maps/DKHRMJyk9mtuZPuJA">
                                <img src={location} alt="" />
                                Go to Maps
                            </a>
                        </div>
                        <a href="https://goo.gl/maps/DKHRMJyk9mtuZPuJA">
                            <p>
                                Jl. Dr. Djunjunan No.22<br />
                                Sukabungah, Kec. Sukajadi<br />
                                Kota Bandung, Jawa Barat<br />
                                40162
                            </p>
                        </a>
                    </div>
                    <div id="right-middle-footer">
                        <ul>
                            <li><p>Tel: +622282602020</p></li>
                            <li><p>Faks: (+62)22/82601896</p></li>
                            <li><p>Email kontak : H9397-RE@accor.com</p></li>
                        </ul>
                    </div>
                </div>
                <div id="big-horizontal-border"></div>
                <div className="bottom-footer">
                    <p>&copy; Ibis Hotel {years} Made by Ibis Hotel Pasteur with <span style={hearts}>&hearts;</span></p> 
                </div>
            </footer>
        );
    }
}

export default Footer;