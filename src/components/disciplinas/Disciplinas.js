import React from "react";
import classNames from "classnames";
import { Badge, Button, Container, Table } from "react-bootstrap";
import NavBar from '../navbar/Navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faFileExport } from "@fortawesome/free-solid-svg-icons";
import { getDisciplinas } from "../../mocks/api";

class Disciplinas extends React.Component {

  state = {
    classes: [
      
    ]
  }

  componentDidMount() {
    const classes = getDisciplinas();
    this.setState({ classes: classes });
    this.props.setCurrentTab()
  }


  render() {
    return (
      <Container
        fluid
        className={classNames("content", { "is-open": this.props.isOpen })}
      >
        <NavBar toggle={this.props.toggle} />
        <p>Geral {'>'} Disciplinas</p>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Código</th>
              <th>Nome</th>
              <th>Turma</th>
              <th>Professor</th>
              <th>Acesso</th>
            </tr>
          </thead>
          <tbody>
            { 
              this.state.classes.map((item, index) => (
                <tr>
                  <td><Badge variant="dark">{ item.code }</Badge></td>
                  <td>{ item.title }</td>
                  <td>{ item.group }</td>
                  <td>{ item.teacher }</td>
                  <td><a href={`${item.code}/info-geral`}>{ <Button variant="success">Acessar Disciplina <FontAwesomeIcon icon={faArrowRight}/></Button> }</a></td>
                </tr>
              ))
            }
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default Disciplinas;
