import React from 'react'
import Book1 from '../Images/book1.png'
import Book2 from '../Images/book2.png'
import Book3 from '../Images/book3.png'
import Book4 from '../Images/book4.png'
import Book5 from '../Images/book5.png'
import Book6 from '../Images/book6.png'
import Book7 from '../Images/book7.png'
import Book8 from '../Images/book8.png'
import Book9 from '../Images/book9.png'
import Book10 from '../Images/book10.png'
import Book11 from '../Images/book11.png'
import Book12 from '../Images/book12.png'

function AudioBooks() {
    return (
        <>
        <div className="audiobooks">
            <div className="content">
                <div className="audiobooks-content">
                    <div className="audiobooks-heading">
                        <h1>THE BEST BOOKS AND AUDIOBOOKS ARE WAITING FOR YOU</h1>
                    </div>
                    <div className="books">
                        <img src={Book1} alt="book1" />
                        <img src={Book2} alt="book2" />
                        <img src={Book3} alt="book3" />
                        <img src={Book4} alt="book4" />
                        <img className="hide-img" src={Book5} alt="book5" />
                        <img className="hide-img" src={Book6} alt="book6" />
                        <img className="hide-img" src={Book7} alt="book7" />
                        <img className="hide-img" src={Book8} alt="book8" />
                        <img className="hide-img" src={Book9} alt="book9" />
                        <img className="hide-img" src={Book10} alt="book10" />
                        <img className="hide-img" src={Book11} alt="book11" />
                        <img className="hide-img" src={Book12} alt="book12" />
                    </div>
                    <div className="books-btn">
                        <button>Read Free For 30 Days</button>
                        <h5>Cancel anytime.</h5>
                    </div>
                </div>
            </div>
        </div>  
        </>
    )
}

export default AudioBooks
