import React from "react";

export default function SmallButton({ styleName, value }) {
    return (
        <button className={`small-button ${styleName}`}>{value}</button>
    )
}