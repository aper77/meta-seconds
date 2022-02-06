import React from "react";

export default function LargeButton({ styleName, divStyle, value }) {
    return (
        <div className={`large ${divStyle}`}>
            <button className={`large-button ${styleName}`}>{value}</button>
        </div>
    )
}