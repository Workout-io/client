import React from 'react'

const Button = ({title, route}) => {
    function handleClick() {
        window.location.href = route;
    }

    return (
        <div
            style={{ cursor: "pointer", boxShadow: "5px 5px 0px 0px rgb(59, 130, 246, 1)" }}
            onClick={handleClick}
            className="w-auto h-full flex items-center rounded-md px-5 font-medium bg-blue-400 text-white"
        >
            {title}
        </div>
    );
}

export default Button
