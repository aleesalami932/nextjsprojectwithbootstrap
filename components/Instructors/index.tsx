import React from "react";
import { InstructorInfo, InstructorsInfo } from "../../context/Interfaces";
import InstructorCard from "../../UI/Cards/InstructorCard";

const Instructors = (props: InstructorsInfo) => {
  return (
    <section className="p-5 bg-primary" id="instructors">
      <div className="container">
        <h2 className="text-center text-white">Our Instructors</h2>
        <p className="lead text-center text-white mb-5">
          Our instructors all have 5+ years working as a web developer in the
          industry
        </p>
        <div className="row g-4">
          {props.items.map((item: InstructorInfo) => {
            return (
              <InstructorCard
                key={item.instructorId}
                instructorBio={item.instructorBio}
                instructorImg={item.instructorImg}
                instructorId={item.instructorId}
                instructorName={item.instructorName}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Instructors;
