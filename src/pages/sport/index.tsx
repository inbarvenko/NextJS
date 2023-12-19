import { NewsDataType } from "@/types/news";
import { getAllNews } from "../api/strapiApi";

type Props = {
  sportNews: NewsDataType[];
};

export const getStaticProps = async () => {
  const sportNews = await getAllNews('news');

  return { props: { sportNews } };
};

const SportNews = ({ sportNews }: Props) => {
  return <p>SportNews</p>;
};

export default SportNews;
