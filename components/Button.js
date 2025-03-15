import React from "react";

export const Button = ({ children, onClick, variant }) => {
    const baseStyles = "px-4 py-2 rounded-lg font-semibold";
    const variantStyles = variant === "destructive" ? "bg-red-500 text-white" : "bg-blue-500 text-white";

    return (
        <button onClick={onClick} className={`${baseStyles} ${variantStyles}`}>
            {children}
        </button>
    );
};
