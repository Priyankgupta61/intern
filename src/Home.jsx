import { useContext } from "react";
import { DataContext } from "./MYContext";
import "./Home.scss"
import {AiFillStar} from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Home(){
     const {data, setselected } = useContext(DataContext);
    return (<>
    <div className="home_con">
        <h2>My Recommendation</h2>
    <div className="main_container">
            {data ? data.map((item, index)=>{

                let rating  = '' ;
                if(item.show.rating && item.show.rating.average) 
                { 
                    rating = item.show.rating.average;
                }
                return (
                    <Link  to='/selected'  key={index}>
                <div className="main_card" onClick={e=>setselected(item)}>
                    <div className="wrapper">
                         <img height={350} src={(item.show.image !== null) ? item.show.image.medium : ""} alt="hello" />
                         <div className="overlay"></div>
                         <div className="text">
                            <div className="star"><AiFillStar />{rating}</div>

                            <div className="name">{item.show.name}</div>
                         </div>
                    </div>
                </div>
                </Link>
                )
            }) : ""}
    </div>
    </div>
    </>)
}