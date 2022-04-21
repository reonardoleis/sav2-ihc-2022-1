import React from "react";
import classNames from "classnames";
import { Container, Modal, Button } from "react-bootstrap";
import NavBar from "../navbar/Navbar";

import BigCalendar from "react-big-calendar-like-google";
import moment from "moment";
import "moment/locale/pt-br";

import { getEventos } from "../../mocks/api";

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

class Agenda extends React.Component {
  state = {
    events: [],
    show: false,
    selectedEvent: {}
  };


  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  componentDidMount() {
    const events = getEventos();
    this.setState({ events: events });
    this.props.setCurrentTab();

    this.setState({ selectedEvent: events[0 ]});

    let spans = document.getElementsByTagName("span");
    for (let i = 0; i < spans.length; i++) {
      if (spans[i].innerText === "TODAY") {
        spans[i].innerText = "hoje";
      }
    }

    setInterval(() => {
      let divs = document.getElementsByTagName("div");
      for (let i = 0; i < divs.length; i++) {
        if (divs[i].innerHTML === "month") {
          divs[i].innerText = "mês";
        } else if (divs[i].innerHTML === "day") {
          divs[i].innerText = "dia";
        } else if (divs[i].innerHTML === "week") {
          divs[i].innerText = "semana";
        }
      }
    }, 1);
  }

  render() {
    return (
      <>
      <Container
        fluid
        className={classNames("content", { "is-open": this.props.isOpen })}
      >
      
        <NavBar toggle={this.props.toggle} />
        <p>Geral {">"} Agenda</p>
        <div className="bg-dark p-5 agenda-container">
          <BigCalendar
            events={this.state.events}
            step={60}
            timeslots={1}
            defaultView="month"
            defaultDate={new Date()}
            onSelectEvent={(event) => {
              this.setState({ selectedEvent: event });
              this.setState({ show: true });
            }}
            onSelectSlot={(slotInfo) =>
              alert(
                `selected slot: \n\nstart ${slotInfo.start.toLocaleString()} ` +
                  `\nend: ${slotInfo.end.toLocaleString()}` +
                  `\naction: ${slotInfo.action}`
              )
            }
          />
        </div>
      </Container>
      <Modal
        show={this.state.show}
        onHide={this.handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Agenda</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <strong>Evento: </strong> { this.state.selectedEvent.title}<br></br>
          <strong>Início: </strong> { this.state.selectedEvent.start? this.state.selectedEvent.start.toLocaleString('pt-br') : '' } <br></br>
          <strong>Fim: </strong> { this.state.selectedEvent.end? this.state.selectedEvent.end.toLocaleString('pt-br') : '' }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={this.handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>

      </>
    );
  }
}

export default Agenda;
