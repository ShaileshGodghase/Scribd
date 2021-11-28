import React, { Component } from 'react'
import '../App.css'
import logo from '../Images/logo.svg'
import playstore from '../Images/playstore.svg'
import apple from '../Images/apple.svg'

class Navbar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             menuState: false,
             sticky: ""
        };
        this.menuClickHandler= this.menuClickHandler.bind(this);
        this.menuCloseHandler = this.menuCloseHandler.bind(this);
        this.listenToScroll = this.listenToScroll.bind(this);
    }
    componentDidMount() {
        window.addEventListener('scroll', this.listenToScroll)
    }
    listenToScroll(){
        window.scrollY > 0 ? this.setState({sticky: "sticky"}) : this.setState({sticky:""});
    }
    menuClickHandler(){
        this.setState({
            menuState: true
        })
    }
    menuCloseHandler(){
        this.setState({
            menuState: false
        })
    }
    render() {
        const {menuState,sticky} = this.state;
        return (
            <>
                <nav className={menuState ? `Navbar show ${sticky}`:`Navbar ${sticky}`}>
                    <div className="content">
                        <div className="logo">
                            <div className={menuState ? "icon menu-btn hide":"icon menu-btn"} onClick={this.menuClickHandler}>
                                <i className="fas fa-bars"></i>
                            </div>
                            <img src={logo} alt="SG" className="logo-icon" />
                        </div>
                        <ul className="menu-list">
                            <img src={logo} alt="SG" className="logo-icon" style={{width:"30%"}} />
                            <div className="icon cancel-btn" onClick={this.menuCloseHandler}>
                                <i className="fas fa-times"></i>
                            </div>
                            <li>
                                <a onClick={this.menuCloseHandler}href="/">
                                <div className="menu-div">
                                    <div className="browse-by">
                                        <h4>BROWSE BY</h4>
                                        <div className="browse-by-links">
                                            <div className="links-1">
                                                <a href="/">Books</a>
                                                <a href="/">AudioBooks</a>
                                                <a href="/">Magazines</a>
                                            </div>
                                            <div className="links-2">
                                                <a href="/">Podcasts</a>
                                                <a href="/">Documents</a>
                                                <a href="/">Sheet Music</a>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="interest">
                                        <h4>INTERESTS</h4>
                                        <div className="interest-links">
                                            <a href="/">Career & Growth</a>
                                            <a href="/">Business</a>
                                            <a href="/">Politics</a>
                                            <a href="/">Sports</a>
                                            <a href="/">Games</a>
                                            <a href="/">Comics</a>
                                            <a href="/">Social Science</a>
                                            <a href="/">True Crime</a>
                                            <a href="/">Travel</a>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="nav-social-icons">
                                        <i class="fab fa-twitter"></i>
                                        <i class="fab fa-facebook-f"></i>
                                        <i class="fab fa-instagram"></i>
                                    </div>
                                    <img src={playstore} alt="Playstore" style={{marginBottom: "10px"}}/>
                                    <img src={apple} alt="Apple" />
                                </div>
                                </a>
                            </li>
                        </ul>
                        <a onClick={this.menuCloseHandler}href="/" className="nav-btn tff">Sign In</a>
                    </div>
                </nav>
            </>
        )
    }
}

export default Navbar