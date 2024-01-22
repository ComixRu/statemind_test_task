import React from "react";

type ModalProps = {
    onClose: () => void;
    children: React.ReactNode
}

export const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
    return (
        <div
            className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50"
            onClick={onClose}
        >
            <div className="bg-white p-6 rounded-2xl shadow-md relative">
                <button
                    className="absolute 5 right-5 text-2xl text-gray-600 hover:text-gray-800"
                    onClick={onClose}
                >
                    &times;
                </button>
                <div className="p-10">
                    {children}
                </div>
            </div>
        </div>
    );
};