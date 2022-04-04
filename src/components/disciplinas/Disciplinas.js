import React from "react";
import classNames from "classnames";
import { Badge, Button, Container, Table } from "react-bootstrap";
import NavBar from '../navbar/Navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faFileExport } from "@fortawesome/free-solid-svg-icons";

class Disciplinas extends React.Component {

  state = {
    classes: [
      {
        code: 'INF0000',
        title: 'Programação 1',
        group: 'Turma A',
        teacher: 'Professor A'
      },
      {
        code: 'INF0001',
        title: 'Programação 2',
        group: 'Turma B',
        teacher: 'Professor B'
      },
      {
        code: 'INF0002',
        title: 'Programação 3',
        group: 'Turma C',
        teacher: 'Professor C'
      },
      {
        code: 'INF0003',
        title: 'Programação 4',
        group: 'Turma D',
        teacher: 'Professor D'
      }
    ]
  }

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
                  <td>{ <Button variant="success">Acessar Disciplina <FontAwesomeIcon icon={faArrowRight}/></Button> }</td>
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
