import NavBar from "../../components/Navbar";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import { getLearningIds, getPostData } from "../../lib/data";
import Image from "next/image";
import { LearningMethode } from "../../context/Interfaces";
import { DUMMY_LEARNING_MATIRAL } from "../../context/DummyData";

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getLearningIds();

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // const learningData = await getPostData(params.id);
  const learningData = DUMMY_LEARNING_MATIRAL.find(
    (element) => element.methodeId === params!.id
  );
  return {
    props: {
      learningData,
    },
  };
};
interface IPost {
  learningData: LearningMethode;
}

const Post = ({ learningData }: IPost) => {
  
  return (
    <div className="bg-dark text-light d-flex">
      <NavBar />
      <div className="container">
        <h1 className="text-center my-5">{learningData.methodeName}</h1>
        <div className="row align-items-center justify-content-between g-2">
          <div className="col-md">
            <div className="container">
              <Image
                priority
                width={200}
                height={200}
                src={learningData.methodeClipart}
                alt="fundementals img"
                className="img-fluid mb-3"
              />
            </div>
          </div>

          <div className="col-md p-5">
            <div className="container ">
              {/* <h2 className="text-start">Learn The Fundementals</h2> */}
              <p className="lead text-start">
                {learningData.methodeDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
