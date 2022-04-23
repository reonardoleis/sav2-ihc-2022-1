import React from "react";
import classNames from "classnames";
import { Badge, Button, Container, Table } from "react-bootstrap";
import NavBar from '../navbar/Navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faFileExport } from "@fortawesome/free-solid-svg-icons";
import { getByCode } from "../../mocks/api";
import { useParams } from "react-router-dom";

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}


class Participantes extends React.Component {

  state = {
    code: '',
    disciplina: { members: [] }
  }

  componentDidMount() {
    this.props.setCurrentTab();

    const disciplina = getByCode(this.props.params.disciplina);
    this.setState({ code: this.props.params.disciplina });
    this.setState( { disciplina: disciplina });
  }

  render() {
    return (
      <Container
        fluid
        className={classNames("content", { "is-open": this.props.isOpen })}
      >
        <NavBar toggle={this.props.toggle} />
        <p>{`${this.state.code} - ${this.state.disciplina.title}`}  {'>'} Participantes</p>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Curso</th>
            </tr>
          </thead>
          <tbody>
            { 
              this.state.disciplina.members.map((item, index) => (
                <tr>
                  <td>{ item.name }</td>
                  <td>{ item.email }</td>
                  <td>{ item.graduation }</td>
                </tr>
              ))
            }
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default withParams(Participantes);
