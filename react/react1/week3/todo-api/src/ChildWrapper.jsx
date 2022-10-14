import React from "react";
export default function ChilWrapper(props) {
    const {children} = props;

    return (
        <div className="childrenWrap">
            {children} 
        </div>
    )
}