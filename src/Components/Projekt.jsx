import React from 'react'

const Projekt = (props) => {
  return (
    <div className="projekt__overview">
        <a className='link__picture' alt={props.bildDesc} target='_blank' href={props.hostUrl}><img src={props.bild} alt={props.bildDesc} className="projekt__picture" /></a>
        <div className="projekt__beschreibung">
          <div className="projekt__beschreibung_main">{props.descMain}</div>
          <div className="projekt__beschreibung_git"><a target="_blank" className="github__picture_link" href={props.githubUrl}><img className="github__picture" src={props.github} alt="" /></a></div>
          <div className="projekt__beschreibung_highlight">{props.descHigh}</div>
        </div>
    </div>
  )
}

export default Projekt