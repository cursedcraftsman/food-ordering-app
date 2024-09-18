import React from 'react';
import './CockTailPagenation.css';  

export const CockTailPagenation = ({ totalPosts, postPerPage, setCurrentPage }) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pages.push(i);
    }

    return (
        <div className="pagination-container">
            {pages.map((page, index) => (
                <button
                    key={index}
                    className="pagination-btn"
                    onClick={() => setCurrentPage(page)}
                >
                    {page}
                </button>
            ))}
        </div>
    );
};
