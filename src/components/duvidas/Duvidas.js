import React from "react";
import classNames from "classnames";
import { Button, Container, Card, Accordion } from "react-bootstrap";
import NavBar from '../navbar/Navbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faFileExport, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

class Duvidas extends React.Component {

  state = {
    currentQuestion: 0,
    faq: [
      {
        question: 'Lorem ipsum dolor sit amet?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in ante varius, cursus orci ut, placerat lacus. Nullam at quam molestie, iaculis urna in, convallis neque. In hac habitasse platea dictumst. Cras at felis non quam maximus volutpat at a diam. Maecenas id nunc quis arcu facilisis congue hendrerit et mauris. Nam non quam porta, iaculis urna a, ultrices tortor. Cras pulvinar augue lectus, non iaculis nisl ultrices ac. Fusce eu eros a nisi tincidunt varius vitae non ex. Vestibulum sed mi ex. Phasellus eu est faucibus nisl auctor dapibus.',
      },
      {
        question: 'Nam tempor, elit at dictum interdum?',
        answer: 'Nam tempor, elit at dictum interdum, tellus felis aliquet mauris, a rhoncus neque orci in nunc. Proin porta auctor tincidunt. Curabitur sagittis imperdiet leo, at congue libero tristique sit amet. Nunc lobortis, enim id placerat vulputate, tortor ante feugiat mauris, id convallis erat libero eget quam. Nullam arcu dolor, hendrerit vitae vestibulum ut, facilisis sit amet lectus. Integer nisl augue, viverra eget turpis quis, dictum commodo tellus. Nam iaculis sem dui, in feugiat lorem commodo sit amet.',
      },
      {
        question: 'Nullam lobortis massa?',
        answer: 'Nullam lobortis massa a erat dictum, consectetur interdum quam efficitur. Suspendisse tempus condimentum ornare. Mauris in rutrum orci. Pellentesque sollicitudin, ipsum vehicula fringilla malesuada, orci elit porttitor velit, non ornare massa ex sit amet mauris. Donec consectetur sem ut egestas placerat. Proin feugiat, ipsum a elementum eleifend, erat dolor suscipit nibh, vel dapibus ante tellus id tellus. Donec sagittis mattis congue.',
      },
      {
        question: 'Quisque justo nibh, tempus vel aliquam non, feugiat ac risus?',
        answer: 'Quisque justo nibh, tempus vel aliquam non, feugiat ac risus. Duis sed cursus enim, id rhoncus eros. Praesent facilisis dolor vitae ipsum lobortis, eget consequat ante lobortis. Aliquam ut risus luctus, lacinia purus in, egestas erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec tincidunt justo et iaculis consectetur. Aenean condimentum ante a pretium pharetra.',
      },
      {
        question: 'Quisque maximus blandit semper?',
        answer: 'Quisque maximus blandit semper. Vestibulum blandit pellentesque diam, non accumsan nulla tincidunt eget. Vivamus eu lacus non nisi bibendum eleifend at et sem. Etiam et libero nunc. Mauris bibendum magna ut lacus ultricies commodo. Suspendisse at orci vitae elit lacinia vehicula id ut diam. Mauris nec est mauris.',
      },
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
        <p>Geral {'>'} Dúvidas Frequentes</p>
        <Accordion defaultActiveKey={0}>
          { this.state.faq.map((item, key) => (
            <Card>
            <Card.Header className="bg-dark">
              <Accordion.Toggle as={Button} variant="light" eventKey={key} onClick={() => { this.setState({ currentQuestion: key })}}>
                <FontAwesomeIcon icon={this.state.currentQuestion === key ? faPlus : faMinus}/> { item.question }
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={key}>
              <Card.Body className="bg-light">{ item.answer }</Card.Body>
            </Accordion.Collapse>
          </Card>
          ))}
        </Accordion>
      </Container>
    );
  }
}

export default Duvidas;
