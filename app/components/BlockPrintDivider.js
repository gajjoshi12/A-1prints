import React from "react";

export default function BlockPrintDivider() {
    return (
        <div className="w-full flex justify-center items-center py-12 opacity-60">
            <svg width="200" height="40" viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 20C15 10 25 10 30 20C35 30 45 30 50 20" stroke="#8B0000" strokeWidth="2" strokeLinecap="round" />
                <path d="M50 20C55 10 65 10 70 20C75 30 85 30 90 20" stroke="#8B0000" strokeWidth="2" strokeLinecap="round" />
                <path d="M90 20C95 10 105 10 110 20C115 30 125 30 130 20" stroke="#8B0000" strokeWidth="2" strokeLinecap="round" />
                <path d="M130 20C135 10 145 10 150 20C155 30 165 30 170 20" stroke="#8B0000" strokeWidth="2" strokeLinecap="round" />
                <path d="M170 20C175 10 185 10 190 20" stroke="#8B0000" strokeWidth="2" strokeLinecap="round" />

                <circle cx="30" cy="10" r="3" fill="#DAA520" />
                <circle cx="70" cy="30" r="3" fill="#DAA520" />
                <circle cx="110" cy="10" r="3" fill="#DAA520" />
                <circle cx="150" cy="30" r="3" fill="#DAA520" />
            </svg>
        </div>
    );
}
