import React from "react"
import './header.scss'

function Header(props) {
    const imgPath = '/images/book.svg'
    return (
        <React.Fragment>
            <div className="menu">
                <img src={imgPath} alt="picture" className="book-img" />
                <a href="Home" className="o"> Home</a>
                <a href="About" className="o"> About</a>
                <a href="Contact" className="o">Contact</a>
            </div>
        </React.Fragment>
    )
}
export default Header