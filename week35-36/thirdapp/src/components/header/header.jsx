import React from "react"
import './header.scss'
import {
    Link
} from "react-router-dom";


function Header() {
    const imgPath = '/images/book.svg'
    return (
        <header className="menu">
            <Link to="/"><img src={imgPath} alt="picture" className="book-img" /></Link>
            <Link to="/cards"> Cards</Link>
            <Link className="o"> Contact</Link>
        </header>
    )
}
export default Header