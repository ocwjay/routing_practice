import React from "react";
import { useParams } from "react-router-dom";

const WordOrNum = (props) => {
    const {won} = useParams();
    const IsNumber = () => {
        if(isNaN(won)){
            return(
                <h1>The word is: {won}</h1>
            )
        } else {
            return(
                <h1>The number is: {won}</h1>
            )
        }
    }
    return(
        <div>
            <IsNumber />
        </div>
    )
}

export default WordOrNum;