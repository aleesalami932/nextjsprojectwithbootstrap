import React from "react";
import { Faqs, Faq } from "../../context/Interfaces";
import AccordionItem from "../../UI/AccordionItems/AccordionItems";
import { Accordion } from "react-bootstrap";
const FAQ = (props: Faqs) => {
  return (
    <section className="p-5 text-center" id="questions">
      <div className="container">
        <h2 className="text-center mb-4">Frequently Asked Questions</h2>
        <Accordion>
          {props.items.map((item: Faq) => {
            return (
              <AccordionItem
                faqAnswer={item.faqAnswer}
                faqId={item.faqId}
                faqQuestion={item.faqQuestion}
                key={item.faqId}
              />
            );
          })}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
