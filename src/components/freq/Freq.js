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


class Freq extends React.Component {

  state = {
    code: '',
    disciplina: { freq: [] }
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
        <p>{`${this.state.code} - ${this.state.disciplina.title}`}  {'>'} Lista de Frequência</p>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Data</th>
              <th>Presença</th>
              <th>Conteúdo</th>
            </tr>
          </thead>
          <tbody>
            { 
              this.state.disciplina.freq.map((item, index) => (
                <tr>
                  <td>{ item.date }</td>
                  <td><input type="checkbox" checked={item.wasAt} style={{transform: 'scale(2.0)'}}></input></td>
                  <td>{ item.content }</td>
                </tr>
              ))
            }
          </tbody>
        </Table>
        <h3>Frequência Total: {(100*((this.state.disciplina.freq.filter(item => item.wasAt)).length) / this.state.disciplina.freq.length).toFixed(0)}%</h3>
      </Container>
    );
  }
}

export default withParams(Freq);
