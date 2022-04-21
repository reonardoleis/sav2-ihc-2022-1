import React from "react";
import classNames from "classnames";
import { Badge, Button, Container, Table } from "react-bootstrap";
import NavBar from '../navbar/Navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faFileExport, faArrowsAltH, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { getByCode } from "../../mocks/api";
import { useParams } from "react-router-dom";
import { Checkbox } from "react-bootstrap";
import Form from "react-bootstrap/FormGroup";

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}


class Bibliografia extends React.Component {

  state = {
    code: '',
    disciplina: { bibliography: [] }
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
        <p>{this.state.code} {'>'} Bibliografia</p>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Livro</th>
              <th>Autor(es)</th>
              <th>Ano</th>
              <th>Link Sabi+</th>
            </tr>
          </thead>
          <tbody>
            { 
              this.state.disciplina.bibliography.map((item, index) => (
                <tr>
                  <td> { item.title } </td>
                  <td>{ item.author }</td>
                  <td>{ item.year } </td>
                  <td>{ item.link !== '' ? <Button variant="success"><FontAwesomeIcon icon={faExternalLinkAlt}/> Acessar</Button> : 'Não disponível' }</td>
                </tr>
              ))
            }
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default withParams(Bibliografia);
