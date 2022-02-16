/* eslint-disable react/jsx-key */
import React from "react";
import Card from "../../UI/Cards/LearningCards";
import {
  ILearningMethodePros,
  LearningMethode,
} from "../../context/Interfaces";

const Boxes = (props: ILearningMethodePros) => {
  return (
    <section className="p-5">
      <div className="container">
        <div className="row text-center g-4">
          {props.items.map((item: LearningMethode) => {
            return (
              <div className="col-md">
                <Card
                  key={item.methodeId}
                  methodeImg={item.methodeImg}
                  methodeDescription={item.methodeDescription}
                  methodeId={item.methodeId}
                  methodeName={item.methodeName}
                  methodeClipart={item.methodeClipart}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Boxes;
