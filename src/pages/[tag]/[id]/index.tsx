import { NewsDataType } from "@/types/news";
import { getIDOneThemeNews, getThemesAndIds } from "../../../api/strapiApi";

type Props = {
  news: NewsDataType;
};

type Params = {
  params: {
    tag: string;
    id: number;
  }
}

export const getStaticPaths = async () => {
  // Найти все теги и для них все id
  const tags = await getThemesAndIds();

  const paths = tags.map((tag) => {
    return {
      params: {
        tag: tag.attributes.type,
        id: tag.id.toString(),
      }
    }
  });

  // { fallback: false } means other routes should 404
  return { paths, fallback: false }
};

export const getStaticProps = async ({params}: Params) => {

  const res = await getIDOneThemeNews(params.id);

  return { props: { news: res } };
}


const OnlyOneNews = (props: Props) => {
  const {news} = props;

  const item = news.attributes.main[0];

  return (
  <section>
    <article className="container">
      <h2 className="name">{item.name}</h2>
      <h5 className="date">Дата публикации: {item.date.toString()}</h5>
      <p className="descr">{item.description}</p>
    </article>
  </section>
  )
};

export default OnlyOneNews;
