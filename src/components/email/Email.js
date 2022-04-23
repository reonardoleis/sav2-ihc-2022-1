import React, { Component, PropTypes } from 'react';
import classNames from "classnames";
import { Badge, Button, Container, Form } from "react-bootstrap";
import NavBar from '../navbar/Navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faFileExport, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { getByCode } from "../../mocks/api";
import { useParams } from "react-router-dom";
import Select from 'react-select';
import { ToastContainer, toast } from 'react-toastify';
import RichTextEditor from 'react-rte';


function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}

class MyStatefulEditor extends Component {

  state = {
    value: RichTextEditor.createEmptyValue()
  }

  onChange = (value) => {
    this.setState({ value });
    this.props.setConteudoEmail(value.toString("html"))
    if (this.props.onChange) {
      // Send the changes up to the parent component as an HTML string.
      // This is here to demonstrate using `.toString()` but in a real app it
      // would be better to avoid generating a string on each change.

      this.props.onChange(
        value.toString('html')
      );


    }
  };

  render() {
    return (
      <RichTextEditor
        value={this.state.value}
        onChange={this.onChange}
      />
    );
  }
}


class Email extends React.Component {

  state = {
    code: '',
    disciplina: { members: [] },
    conteudoEmail: '',
    destinatarios: []
  }

  sendEmail = () => {
    if (this.state.destinatarios.length === 0) {
      return toast("Você deve selecionar ao menos um destinatário", {
        type: 'error'
      })
    }

    let assunto = document.getElementById("assunto").value;
    
    if (assunto == '') {
      return toast("O assunto não pode ser vazio", {
        type: 'error'
      })
    }

    if (this.state.conteudoEmail.length === 0) {
      return toast("O conteúdo do e-mail não pode ser vazio", {
        type: 'error'
      })
    }

    return toast("O e-mail foi enviado com sucesso!", {
      type: 'success'
    })
  }

  setConteudoEmail = (conteudo) => {
    const regex = /(<([^>]+)>)/ig
    const result = conteudo.replace(regex, "");

    this.setState({ conteudoEmail: result });
    console.log(this.state.conteudoEmail)
  }

  componentDidMount() {
    this.props.setCurrentTab();

    const disciplina = getByCode(this.props.params.disciplina);
    this.setState({ code: this.props.params.disciplina });
    this.setState({ disciplina: disciplina });
  }

  handleChange = (selectedOptions) => {
    this.setState({ destinatarios: selectedOptions });
  }

  render() {
    return (
      <Container
        fluid
        className={classNames("content", { "is-open": this.props.isOpen })}
      >
        <ToastContainer
          position="bottom-right"
          autoClose={4000}
          pauseOnHover
        />
        <NavBar toggle={this.props.toggle} />
        <p>{`${this.state.code} - ${this.state.disciplina.title}`} {'>'} E-mail SAV</p>

        <Container fluid className="border bg-light p-3">
          <label>Destinatários</label>
          <Select
            isMulti
            name="Destinatários"
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={this.handleChange}
            placeholder="Clique aqui para selecionar destinatários"
            noOptionsMessage={() => "Todos destinatários possíveis já foram selecionados."}
            maxMenuHeight={'140px'}
            options={[...(this.state.destinatarios.length === 0 ? [{ value: 'Todos', label: 'Enviar para todos'}] : []), ...(this.state.destinatarios.find(item => item.value === 'Todos') ? [] : (

              this.state.disciplina.members.map(item => {
                return { value: item.email, label: item.name }
             
              })

            ))]} />
            

          <br></br>
          <label className="mt-5">Assunto:</label><br></br>
          <input id="assunto" type="text" className="form-control"></input>
          <br></br>
          <MyStatefulEditor
            setConteudoEmail={this.setConteudoEmail}
          />
          <br></br>
          <Button
            onClick={this.sendEmail}
            variant="success" className="w-100">
            <FontAwesomeIcon icon={faPaperPlane} />  Enviar
          </Button>
        </Container>
      </Container>
    );
  }
}

export default withParams(Email);

/*{ 
              this.state.disciplina.members.map((item, index) => (
                <tr>
                  <td>{ item.name }</td>
                  <td>{ item.email }</td>
                  <td>{ item.graduation }</td>
                </tr>
              ))
            }*/