import React from "react";

export const Card = ({ children, className }) => {
    return (
        <div className={`bg-white p-4 rounded-lg shadow ${className}`}>
            {children}
        </div>
    );
};

export const CardContent = ({ children }) => {
    return <div>{children}</div>;
};
