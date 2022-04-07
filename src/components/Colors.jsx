import React from "react";
import { useParams } from "react-router-dom";
import WordOrNum from "./WordOrNum";

const Colors = (props) => {
    const {bgColor, txtColor} = useParams();
    return(
        <div style={{
            backgroundColor : `${bgColor}`,
            color: `${txtColor}`
        }}>
            <WordOrNum />
        </div>
    )
}

export default Colors;