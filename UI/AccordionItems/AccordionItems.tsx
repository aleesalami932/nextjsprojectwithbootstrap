import React from "react";
import { Faq } from "../../context/Interfaces";
import { Accordion } from "react-bootstrap";

const AccordionItem = (props: Faq) => {
  return (
    <Accordion.Item eventKey={props.faqId}>
      <Accordion.Header>{props.faqQuestion}</Accordion.Header>
      <Accordion.Body>{props.faqAnswer}</Accordion.Body>
    </Accordion.Item>
  );
};

export default AccordionItem;
