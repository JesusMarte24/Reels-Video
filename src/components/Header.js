import React from 'react'
import "../styles/Header.scss"

export const Header = () => {
    return (
        <header className="header">
            <img className="header--logo" src="https://live.staticflickr.com/65535/51381764212_8fbffba6d7_o.png" width="200" height="200" alt="logo__mobile" />
            <img className="header--avatar" src="https://toppng.com/uploads/preview/avatar-png-11554021819gij72acuim.png" alt="" />
        </header>
    )
}

