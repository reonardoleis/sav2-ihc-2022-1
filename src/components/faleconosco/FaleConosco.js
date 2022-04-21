import React from "react";
import classNames from "classnames";
import { Button, Container, Card, Accordion } from "react-bootstrap";
import NavBar from '../navbar/Navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faEnvelope, faFileExport, faMinus, faPhone, faPlus } from "@fortawesome/free-solid-svg-icons";

class FaleConosco extends React.Component {


  componentDidMount() {
    this.props.setCurrentTab()
  }

  render() {
    return (
      <Container
        fluid
        className={classNames("content", { "is-open": this.props.isOpen })}
      >
        <NavBar toggle={this.props.toggle} />
        <p>Geral {'>'} Fale Conosco</p>
        <Container fluid className="bg-white pt-5 pb-5 pl-3">
          <h3><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> Telefone: (51) 1234-4567<br></br><br></br></h3>
          <h3><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> E-mail: sav@ufrgs.br</h3>
        </Container>
      </Container>
    );
  }
}

export default FaleConosco;
