import React from "react";

export default function SkillDiv(props){
    return (
    <>
        <div className='skillbox'>
            <img src={`image/${props.image}` } alt={props.alter} className="icon"/>
            <h5>{props.skill}</h5>
            <p>Rating: {props.rating}</p>
        </div>
    </>
    );
}
