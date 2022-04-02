import React from "react";
import classNames from "classnames";
import { Container } from "react-bootstrap";
import NavBar from '../navbar/Navbar';

class Agenda extends React.Component {
  render() {
    return (
      <Container
        fluid
        className={classNames("content", { "is-open": this.props.isOpen })}
      >
        <NavBar toggle={this.props.toggle} />
        <p>Agenda!</p>
      </Container>
    );
  }
}

export default Agenda;
