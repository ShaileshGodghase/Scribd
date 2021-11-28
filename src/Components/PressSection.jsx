import React from 'react'
import techcrunch from '../Images/logo_techcrunch.svg'
import forbes from '../Images/logo_forbes.svg'
import wsj from '../Images/logo_wallstreetjournal.svg'
import lat from '../Images/logo_los_angeles_times.svg'
import today from '../Images/logo_today.svg'

function PressSection() {
    return (
        <>
        <div className="Press-section">
            <div className="content">
                <div className="press-heading">
                    <h5>IN THE PRESS</h5>
                </div>
                <div className="press-company">
                    <img src={techcrunch} alt="techcrunch" />
                    <img src={forbes} alt="forbes" />
                    <img src={wsj} alt="wall street journal" />
                    <img src={lat} alt="los angeles times" />
                    <img src={today} alt="today" />
                </div>
            </div>
        </div>  
        </>
    )
}

export default PressSection
