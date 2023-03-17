import React from 'react'
import './card design.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import {Twitter, Instagram, Facebook, GitHub} from import  from '@material-ui/icons';

function card design(){
    return(
        <div className="card">
            <div className="card design">
           <img src="WhatsApp Image 2023-03-09 at 22.17.48" className="caedimg"/>
           <span>lankesh singh</span>
           <p>Graphic Designer</p>
           <p>Highly creative and multitalented Graphic Designer with extensive
             experience in multimedia, marketing, and print design.</p>
             <div className="icon">
                <Instagram style={{ color: "red",marginleft:"5px"}}
                <Twitter style={{ color: "blue",marginleft:"5px"}}
                <Facebook style={{ color: "blue",marginleft:"5px"}}
                <GitHub style={{ color: "red",marginleft:"5px"}}
                </div>
                <div className="upper">
                    <button className="btn">Message</button>
                    <button className="btn">Following</button>
             </div>
            </div>
        </div>

    
    )
}
 export default card design