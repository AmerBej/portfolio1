import Projekt from "./Components/Projekt"
import speicher from "./Pictures/speicher.png"
import tagebuch from "./Pictures/tagebuch.png"
import mmrtracker from "./Pictures/mmrtracker.png"
import rubenportfolio from "./Pictures/rubenportfolio.png"
import github from "./Pictures/github.png"
import './App.css'

function App() {
  return (
  <div className="App">
    <div className="test"> Amer Bejtulahovic <a className="centerGit" href="https://github.com/AmerBej" target="_blank"><img className="test__github" src={github} alt="" /></a></div>
    <div className="bio">Das sind die Projekte, die ich fertigemacht habe, <br/> und auch regelmäßig benutze: </div>
    <div className="kleingedrucktes"> (und eine Webseite für einen Freund)</div>
    <div className="projects__overview">
      <Projekt github={github} bild={rubenportfolio} bildDesc="Portfolio Ruben Bäppler"githubUrl="https://github.com/AmerBej/rubenbaeppler" hostUrl="https://amerbej.github.io/rubenbaeppler/" descMain="Brochure- Seite für einen Audio Engineer" descHigh="React" />
      <Projekt github={github} bild={speicher} bildDesc="notizapp passwortgeschützt"githubUrl="https://github.com/AmerBej/nuevoversuch" hostUrl="https://amerbej.github.io/nuevoversuch/" descMain="passwortgeschützte- Online Notizen App" descHigh="React + Firebase" />
      <Projekt github={github} bild={mmrtracker} bildDesc="notizapp passwortgeschützt"githubUrl="https://github.com/AmerBej/testing" hostUrl="https://amerbej.github.io/testing/" descMain="online videospiel- punkte tracker" descHigh="HTML, CSS, JavaScript und Lokaler Speicher." />
      <Projekt github={github} bild={tagebuch} bildDesc="tagebuch app mit notizen"githubUrl="https://github.com/AmerBej/testing4" hostUrl="https://amerbej.github.io/testing4/" descMain="Tagebuch und Notizen- App" descHigh="HTML, CSS, JavaScript und Lokaler Speicher." />
    </div>
  </div>
  )
}

export default App
