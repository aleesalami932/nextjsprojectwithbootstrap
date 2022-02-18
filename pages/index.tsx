import type { NextPage } from "next";
import NavBar from "../components/Navbar";
import Showcase from "../components/Showcase";
import NewsLetter from "../components/NewsLetter";
import Boxes from "../components/Boxes";
import Learn from "../components/Learn";
import LearnReact from "../components/Learn/learnReact";
import {
  DUMMY_LEARNING_MATIRAL,
  DUMMY_CONTACT,
  DUMMY_FAQ,
  DUMMY_INATRUCTORS,
} from "../context/DummyData";
import { GetStaticProps } from "next";
import FAQ from "../components/Faq";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";

export const getStaticProps: GetStaticProps = async () => {
  const BoxesData = DUMMY_LEARNING_MATIRAL;
  const contactData = DUMMY_CONTACT;
  const faq = DUMMY_FAQ;
  const instructorsInfo = DUMMY_INATRUCTORS;
  return {
    props: {
      BoxesData,
      contactData,
      faq,
      instructorsInfo,
    },
  };
};

const Home: NextPage = () => {
  const isauth = useSelector((state) => state.auth.isAuthenticated);
  const idtoken = useSelector((state) => state.auth.token);

  console.log(isauth, idtoken);
  const dispatch = useDispatch();
  // dispatch(authActions.setToken(token));
  return (
    <div>
      <NavBar />
      <Showcase />
      <NewsLetter />
      <Boxes items={DUMMY_LEARNING_MATIRAL} />
      <Learn />
      <LearnReact />
      <FAQ items={DUMMY_FAQ} />
      {/* <Instructors items={DUMMY_INATRUCTORS} /> */}
      <Contact
        enrollmentEmail={DUMMY_CONTACT.enrollmentEmail}
        enrollmentPhone={DUMMY_CONTACT.enrollmentPhone}
        mainLocation={DUMMY_CONTACT.mainLocation}
        studentEmail={DUMMY_CONTACT.studentEmail}
        studentPhone={DUMMY_CONTACT.studentPhone}
      />
      <Footer />
    </div>
  );
};

export default Home;
