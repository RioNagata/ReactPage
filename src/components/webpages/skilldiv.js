import React from "react";

export default function SkillDiv(props){
    return (
    <>
        <div className='skillbox'>
            <img src={props.img} alt={props.alter}/>
            <h4>{props.skill}</h4>
            <p>Rating: {props.rating}</p>
        </div>
    </>
    );
}
