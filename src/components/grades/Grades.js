import React from "react";
import classNames from "classnames";
import { Badge, Button, Container, Table } from "react-bootstrap";
import NavBar from '../navbar/Navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faFileExport } from "@fortawesome/free-solid-svg-icons";
import { getByCode } from "../../mocks/api";
import { useParams } from "react-router-dom";
import { Checkbox } from "react-bootstrap";
import Form from "react-bootstrap/FormGroup";

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}


class Grades extends React.Component {

  state = {
    code: '',
    disciplina: { grades: [] }
  }

  componentDidMount() {
    this.props.setCurrentTab();

    const disciplina = getByCode(this.props.params.disciplina);
    this.setState({ code: this.props.params.disciplina });
    this.setState( { disciplina: disciplina });
  }

  getGrade() {
    let grade = 0;
    for (let i = 0; i < this.state.disciplina.grades.length; i++) {
      grade += (this.state.disciplina.grades[i].grade * this.state.disciplina.grades[i].weight) / 10;
    }

    return {
      grade: grade,
      label: grade >= 9 ? 'A' : (grade >= 7.5 ? 'B' : (grade >= 6 ? 'C' : 'D'))
    }
  }

  render() {
    return (
      <Container
        fluid
        className={classNames("content", { "is-open": this.props.isOpen })}
      >
        <NavBar toggle={this.props.toggle} />
        <p>{`${this.state.code} - ${this.state.disciplina.title}`}  {'>'} Notas </p>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Avaliação</th>
              <th>Nota</th>
              <th>Peso</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            { 
              this.state.disciplina.grades.map((item, index) => (
                <tr>
                  <td> { item.title } </td>
                  <td>{ item.grade }</td>
                  <td>{ item.weight } </td>
                  <td>{ item.date }</td>
                </tr>
              ))
            }
          </tbody>
        </Table>
        <h3>Nota: {this.getGrade().grade}</h3>
        <h3>Conceito: {this.getGrade().label}</h3>
      </Container>
    );
  }
}

export default withParams(Grades);
