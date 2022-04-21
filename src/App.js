import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import Disciplinas from "./components/disciplinas/Disciplinas";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Agenda from "./components/agenda/agenda";
import Duvidas from "./components/duvidas/Duvidas";

import "react-big-calendar-like-google/lib/css/react-big-calendar.css";
import FaleConosco from "./components/faleconosco/FaleConosco";
import SideBar2 from "./components/sidebar/SideBar2";
import InformacoesGerais from "./components/informacoesgerais/InformacoesGerais";
import Participantes from "./components/participantes/Participantes";
import Freq from "./components/freq/Freq";
import Grades from "./components/grades/Grades";
import Bibliografia from "./components/bibliografia/Bibliografia";

class App extends React.Component {
  constructor(props) {
    super(props);

    // Moblie first
    this.state = {
      isOpen: false,
      isMobile: true,
      currentTab: 0
    };

    this.previousWidth = -1;
  }

  updateWidth() {
    const width = window.innerWidth;
    const widthLimit = 576;
    const isMobile = width <= widthLimit;
    const wasMobile = this.previousWidth <= widthLimit;

    if (isMobile !== wasMobile) {
      this.setState({
        isOpen: !isMobile
      });
    }

    this.previousWidth = width;
  }

  /**
   * Add event listener
   */
  componentDidMount() {
    this.updateWidth();
    window.addEventListener("resize", this.updateWidth.bind(this));
    document.title = "SAV2 - Sala de Aula Virtual"
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth.bind(this));
  }

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  changeMenuItem  (itemNumber) {
    this.setState( { currentTab: itemNumber });
  }

  handleSidebar() {
    const sidebar1 = ['disciplinas', 'agenda',  'duvidas', 'fale-conosco'];
    const l = document.location.href;
    for (let i = 0; i < sidebar1.length; i++) {
      if (l.includes(sidebar1[i])) {
        return   <SideBar toggle={this.toggle} isOpen={this.state.isOpen} changeMenuItem={this.changeMenuItem} currentTab={this.state.currentTab} />
      }
    }
   
    return   <SideBar2 toggle={this.toggle} isOpen={this.state.isOpen} changeMenuItem={this.changeMenuItem} currentTab={this.state.currentTab} />
  }

  render() {
    return (
      <div className="App wrapper">
        {
         this.handleSidebar()
        }
      
        <BrowserRouter>
          <Routes>
            <Route exact path="disciplinas" element={<Disciplinas toggle={this.toggle} setCurrentTab={() => {this.setState({ currentTab: 0})}}/>}></Route>
            <Route exact path="agenda" element={<Agenda  toggle={this.toggle} setCurrentTab={() => {this.setState({ currentTab: 1})} }/>}></Route>
            <Route exact path="duvidas" element={<Duvidas  toggle={this.toggle} setCurrentTab={() => { this.setState({ currentTab: 2}) }}/>}></Route>
            <Route exact path="fale-conosco" element={<FaleConosco  toggle={this.toggle} setCurrentTab={() => { this.setState({ currentTab: 3}) }}/>}></Route>
            <Route exact path=":disciplina/info-geral" element={<InformacoesGerais  toggle={this.toggle} setCurrentTab={() => { this.setState({ currentTab: 1}) }}/>}></Route>
            <Route exact path=":disciplina/participantes" element={<Participantes  toggle={this.toggle} setCurrentTab={() => { this.setState({ currentTab: 2}) }}/>}></Route>
            <Route exact path=":disciplina/frequencia" element={<Freq  toggle={this.toggle} setCurrentTab={() => { this.setState({ currentTab: 4}) }}/>}></Route>
            <Route exact path=":disciplina/notas" element={<Grades  toggle={this.toggle} setCurrentTab={() => { this.setState({ currentTab: 5}) }}/>}></Route>
            <Route exact path=":disciplina/bibliografia" element={<Bibliografia  toggle={this.toggle} setCurrentTab={() => { this.setState({ currentTab: 6}) }}/>}></Route>
            <Route path="/" element={<Disciplinas  toggle={this.toggle} setCurrentTab={() => { this.setState({ currentTab: 0}) }}/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
