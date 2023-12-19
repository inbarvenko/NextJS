import { NewsDataType } from "@/types/news";
import { getOneOfNews } from "../api/strapiApi";

type Props = {
  politicalNews: NewsDataType[];
};

// export const getStaticProps = async () => {
//   const politicalNews = await getOneOfNews('politics', );

//   return { props: { politicalNews } };
// };

const PoliticalItem = () => {
  return <p>PoliticalItem</p>;
};

export default PoliticalItem;
