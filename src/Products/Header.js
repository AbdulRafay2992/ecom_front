import React from 'react';

function Header({user}) {
    return (
        <>
            <header className="header">
                <div className="header-logo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="40" fill="blue" />
                        <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="20" fill="white">Logo</text>
                    </svg>
                </div>
                <div className="header-search">
                    <input type="text" placeholder="Search..." />
                    <button><i className="fas fa-search"></i></button> 
                </div>
                
                <div className="header-icons">
                    <div className="cart-icon">
                        <i className="fas fa-shopping-cart"></i>
                    </div>
                    
                    <div className="login-icon">
                        <i className="fas fa-user"></i>
                        <span>{user}</span>
                    </div>
                </div>
            </header>
        </>
    );
}
export default Header;