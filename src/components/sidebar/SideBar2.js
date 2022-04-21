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
  faPhone,
  faInfoCircle,
  faUsers,
  faAt,
  faChartBar,
  faStar,
  faBookOpen
} from "@fortawesome/free-solid-svg-icons";
import SubMenu from "./SubMenu";
import { Nav, Button } from "react-bootstrap";
import classNames from "classnames";

class SideBar2 extends React.Component {
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

          <Nav.Item className={this.props.currentTab === 0 ? 'active' : ''} onClick={() => { this.props.changeMenuItem(0); console.log('oi') }}>
            <Nav.Link href="/disciplinas" >
              <FontAwesomeIcon icon={faHome} className="mr-2" />
              Geral
            </Nav.Link>
          </Nav.Item>


          <Nav.Item className={this.props.currentTab === 1 ? 'active' : ''} onClick={() => { this.props.changeMenuItem(1) }}>
            <Nav.Link href="info-geral" onClick={() => { this.props.changeMenuItem(1) }}>
              <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
              Informações Gerais
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className={this.props.currentTab === 2 ? 'active' : ''}>
            <Nav.Link href="participantes">
              <FontAwesomeIcon icon={faUsers} className="mr-2" />
              Participantes
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className={this.props.currentTab === 3 ? 'active' : ''}>
            <Nav.Link href="email">
              <FontAwesomeIcon icon={faAt} className="mr-2" />
              E-mail SAV
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className={this.props.currentTab === 4 ? 'active' : ''}>
            <Nav.Link href="frequencia">
              <FontAwesomeIcon icon={faChartBar} className="mr-2" />
              Lista de Frequência
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className={this.props.currentTab === 5 ? 'active' : ''}>
            <Nav.Link href="notas">
              <FontAwesomeIcon icon={faStar} className="mr-2" />
              Notas
            </Nav.Link>
          </Nav.Item>
          

          <Nav.Item className={this.props.currentTab === 6 ? 'active' : ''}>
            <Nav.Link href="bibliografia">
              <FontAwesomeIcon icon={faBookOpen} className="mr-2" />
              Bibliografia
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}

export default SideBar2;
