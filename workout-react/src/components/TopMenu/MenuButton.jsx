import React from 'react';

const Button = ({ title, route, color, text }) => {
    function handleClick() {
        window.location.href = route;
    }

    return (
        <div
            style={{ color: text, backgroundColor: color, cursor: "pointer"}}
            onClick={handleClick}
            className="w-auto h-full flex items-center rounded-md px-5 font-medium"
        >
            {title}
        </div>
    );
};

export default Button;
