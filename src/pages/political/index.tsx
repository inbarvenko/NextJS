import { NewsDataType } from "@/types/news";
import { getAllNews } from "../api/strapiApi";

type Props = {
  politicalNews: NewsDataType[];
};

export const getStaticProps = async () => {
  const politicalNews = await getAllNews("politics");

  return { props: { politicalNews } };
};

const PoliticalNews = ({ politicalNews }: Props) => {
  return <p>PoliticalNews</p>;
};

export default PoliticalNews;
