import React from "react";
import classNames from "classnames";
import { Button, Container, Card, Accordion } from "react-bootstrap";
import NavBar from '../navbar/Navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faEnvelope, faFileExport, faMinus, faPhone, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { getByCode} from '../../mocks/api';

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}


class InformacoesGerais extends React.Component {

  state = {
    code: '',
    disciplina: {}
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
        <p>{`${this.state.code} - ${this.state.disciplina.title}`}  {'>'} Informações Gerais</p>
        <Container fluid className="bg-white pt-5 pb-5 pl-3">
          <h3>Unidade: {this.state.disciplina.department}<br></br><br></br></h3>
          <h3>Órgão: {this.state.disciplina.area}<br></br><br></br></h3>
          <h3>Disciplina: {this.state.disciplina.title}<br></br><br></br></h3>
          <h3>Código: {this.state.disciplina.code}<br></br><br></br></h3>
          <h3>Créditos: {this.state.disciplina.credits}<br></br><br></br></h3>
          <h3>Dias: {this.state.disciplina.when}<br></br><br></br></h3>
          <h3>Plano de ensino: <a className="text-primary" href="#">clique aqui para acessar</a></h3>
        </Container>
      </Container>
    );
  }
}

export default withParams(InformacoesGerais);
