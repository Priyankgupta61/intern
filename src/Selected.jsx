import { useContext, useEffect, useState } from "react";
import { DataContext } from "./MYContext";
import { useNavigate } from "react-router-dom";
import "./seleected.scss"
import {AiFillStar} from "react-icons/ai";

export default function Selected() {
  const navigate = useNavigate();
  const { selected } = useContext(DataContext);
  const [rating, setrating] = useState();
  console.log(selected);
  if (!selected) {
    navigate("/");
  }
const [back, setback] = useState();
useEffect(()=>{
  if(selected && selected.show.image !== null){
   setback(selected.show.image.original);
  } 
  if (selected && selected.show.rating && selected.show.rating.average) 
  { 
      setrating(selected.show.rating.average);
  }
},[selected])
  return (
    <>
      <div className="main_select">
        <div className="backgroundOverlay" style={{backgroundImage : `url(${back})`}}>
            <div className="overlay"></div>
            <div className="text">
                <div className="name">
                    {selected ? selected.show.name : ""}
                </div>
                     <div className="star"><AiFillStar className="icon" />{rating}</div>
                     <div className="genre">  {selected ? selected.show.genres.map((item, index) => {
                  return index !== selected.show.genres.length - 1 ? item + ", " : item;
                }) : ""}</div>
            </div>
        </div>
        <div className="text_para">
          <h2>Summery</h2>
          {selected ? <div dangerouslySetInnerHTML={{__html: selected.show.summary}}></div> : ""}
        </div>
      </div>
    </>
  );
}
