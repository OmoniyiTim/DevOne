import React from 'react'
import './Main.scss'
import {BsArrowRight} from 'react-icons/bs'



const Main = () => {
    return (
        <div className="main">
            <div className="main-1">
                <h3>Modern interior</h3>
                <p>A full-Service residential & commercial interior design and staging company offering professional organizing & eco-services.</p>
                <p>Read more <BsArrowRight/></p>
            </div>
            <div className="main-2"> 
              <img src={process.env.PUBLIC_URL + '/images/photo1.png'} className="room" alt="room"/> 
             <div >
                 <div className="down" >
                     
                     <img src={process.env.PUBLIC_URL + '/images/photo2.png'}  className="lady" alt="room"/>
                     <div>
                        <p>Aliza Webber</p>
                        <p>Interior designer</p>
                        <span>Designed in 2020 by Aliza Webber</span>
                     </div>
                     
                 </div>
                 
             </div>
            </div>
            
        </div>
    )
}

export default Main
