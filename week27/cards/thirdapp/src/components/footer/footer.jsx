import React from "react"
import './footer.scss'
function Footer(props) {
    const imgPath = '/images/book.svg'
    return (
        <React.Fragment>
            <footer className="footer">
                <img src={imgPath} alt="picture" className="book-img" />
                <a href="1">Home</a>
                <a href="2">About</a>
                <a href="3">FAQ</a>
                <a href="4">Privacy Statement</a>
            </footer>
        </React.Fragment>
    )
}
export default Footer