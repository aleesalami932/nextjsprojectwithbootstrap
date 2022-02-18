/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import Card from "../../UI/Cards/LearningCards";
import {
  ILearningMethodePros,
  LearningMethode,
} from "../../context/Interfaces";
import { ref, onValue } from "firebase/database";
import { db } from "../../firebase";

export async function getStaticProps() {
  const learningMethode = ref(db, "learnig_methodes/");
  onValue(learningMethode, (snapshot) => {
    const data = snapshot.val();
  });
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      learningMethode,
    },
  };
}

const Boxes = (props: ILearningMethodePros) => {
  const [data, setData] = useState();
  const learningMethode = ref(db, "learnig_methodes/");
  onValue(learningMethode, (snapshot) => {
    const data = snapshot.val();
  });

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

// {
//   Object.values(data).forEach((o) => {
//     return o.map((item) => {
//       <div className="col-md">
//         <Card
//           key={item.methodeId}
//           methodeImg={item.methodeImg}
//           methodeDescription={item.methodeDescription}
//           methodeId={item.methodeId}
//           methodeName={item.methodeName}
//           methodeClipart={item.methodeClipart}
//         />
//       </div>;
//     });
//   });
// }
