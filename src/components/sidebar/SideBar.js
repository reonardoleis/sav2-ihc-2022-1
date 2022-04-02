import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faPaperPlane,
  faQuestion,
  faImage,
  faCopy,
  faTimes,
  faBook,
  faCalendar,
  faPhone
} from "@fortawesome/free-solid-svg-icons";
import SubMenu from "./SubMenu";
import { Nav, Button } from "react-bootstrap";
import classNames from "classnames";

class SideBar extends React.Component {
  render() {
    return (
      <div className={classNames("sidebar", { "is-open": this.props.isOpen })}>
        <div className="sidebar-header">
          <Button
            variant="link"
            onClick={this.props.toggle}
            style={{ color: "#fff" }}
            className="mt-4"
          >
            <FontAwesomeIcon icon={faTimes} pull="right" size="xs" />
          </Button>
          <h3>SAV2</h3>
        </div>

        <Nav className="flex-column pt-2">
          <p className="ml-3">Selecione uma opção</p>

          <Nav.Item className={this.props.currentMenuItem === 0 ? 'active' : ''} onClick={() => { this.props.changeMenuItem(0); console.log('oi') }}>
            <Nav.Link href="/disciplinas" >
              <FontAwesomeIcon icon={faBook} className="mr-2" />
              Disciplinas
            </Nav.Link>
          </Nav.Item>


          <Nav.Item className={this.props.currentMenuItem === 1 ? 'active' : ''} onClick={() => { this.props.changeMenuItem(1) }}>
            <Nav.Link href="/agenda" onClick={() => { this.props.changeMenuItem(1) }}>
              <FontAwesomeIcon icon={faCalendar} className="mr-2" />
              Agenda
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className={this.props.currentMenuItem === 2 ? 'active' : ''}>
            <Nav.Link href="/">
              <FontAwesomeIcon icon={faQuestion} className="mr-2" />
              Dúvidas Frequentes
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className={this.props.currentMenuItem === 3 ? 'active' : ''}>
            <Nav.Link href="/">
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              Fale Conosco
            </Nav.Link>
          </Nav.Item>

          
        </Nav>
      </div>
    );
  }
}

export default SideBar;
