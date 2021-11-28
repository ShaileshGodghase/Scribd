import React from 'react'
import apple from '../Images/apple.svg'
import playstore from '../Images/playstore.svg'

const SubSection = (props)=>{
    return (
        <div className="footer-section">
            <h4>{props.item.title}</h4>
                <div className="sub-section">
                    {
                        props.item.content.map((it,index)=>{
                            return(
                                <p key={index}><a href="/">{it}</a></p>
                            )
                        })
                    }
                </div>
        </div>
    )
}
function Footer() {
    const Section = [ 
        {   
            id: "1",
            title: "About",
            content: ["About Scribd","Press","Our Blog","Contact US","Invite Friends"]
        },
        {
            id: "2",
            title: "Support",
            content: ["Help / FAQ","Accessibility","Purchase Help","AdChoices","Publishers"]
        },
        {
            id: "3",
            title: "Legal",
            content: ["Terms","Privacy","copyright","Cookie","Preferences"]
        },
        {
            id: "4",
            title: "Social",
            content: ["Instagram","Twitter","Facebook","Pinterest"]
        }
    ]
    return (
        <>
        <section className="footer">
            <div className="content">
                <div className="footer-content">
                    {
                    Section.map((it,index)=> {
                        return <SubSection item={it} key={index} />
                    })}
                    <div className="company-info">
                        <h1>Get our free apps</h1>
                        <img src={apple} alt="Apple" />
                        <img src={playstore} alt="Playstore" />
                    </div>
                </div>
            </div>
        </section>    
        </>
    )
}

export default Footer