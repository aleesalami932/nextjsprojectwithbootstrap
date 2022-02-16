import {
  DUMMY_CONTACT,
  DUMMY_FAQ,
  DUMMY_INATRUCTORS,
  DUMMY_LEARNING_MATIRAL,
} from "../context/DummyData";

export function getLearningIds() {
  const learningData = DUMMY_LEARNING_MATIRAL;

  return learningData.map((learningId) => {
    return {
      params: {
        id: learningId.methodeId,
      },
    };
  });
}

export async function getPostData(id: string) {
  const requiredData = DUMMY_LEARNING_MATIRAL.find(
    (element) => element.methodeId === id
  );
  return requiredData;
}


