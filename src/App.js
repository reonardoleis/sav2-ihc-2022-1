import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import Disciplinas from "./components/disciplinas/Disciplinas";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Agenda from "./components/agenda/agenda";

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

  render() {
    return (
      <div className="App wrapper">
        <SideBar toggle={this.toggle} isOpen={this.state.isOpen} changeMenuItem={this.changeMenuItem} currentMenuItem={this.state.currentTab} />
        <BrowserRouter>
          <Routes>
            <Route exact path="disciplinas" element={<Disciplinas toggle={this.toggle}/>}></Route>
            <Route exact path="agenda" element={<Agenda  toggle={this.toggle}/>}></Route>
            <Route path="/" element={<Disciplinas  toggle={this.toggle}/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
