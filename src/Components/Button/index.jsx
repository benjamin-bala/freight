import React from 'react'

export default function Button(props) {

    const buttonStyle = {
    border: `0.1rem solid ${props.borderColor}`,
    background: props.background,
    padding: "0.7rem 2rem",
    color: props.color,
    whiteSpace: "nowrap",
    height: "max-content",
    borderRadius: "0.7rem",
    fontSize: "1.4rem",
    cursor: "pointer",
    fontWeight: "600",
    textTransform: "capitalize"
}

    return (
        <div style={buttonStyle}>
            <p>{props.name}</p>
        </div>
    )
}
