import { NewsDataType } from "@/types/news";
import { getOneThemeNews, getThemes } from "../../api/strapiApi";
import Link from "next/link";

type Props = {
  oneThemeNews: NewsDataType[];
  tag: string;
};

type Context = {
  params: {
    tag: string;
  };
};

export const getStaticPaths = async () => {
  const tags = await getThemes();

  const paths = tags.map((tag) => {
    return {
      params: {
        tag,
      },
    };
  });

  // blocking - перерисовывает пути, чекает новые, добавляет их по возможности
  return { paths, fallback: "blocking" };
};

export const getStaticProps = async (context: Context) => {
  const oneThemeNews = await getOneThemeNews(context.params.tag);

  return { props: { oneThemeNews, tag: context.params.tag } };
};

const ThemeNews = ({ oneThemeNews, tag }: Props) => {
  const theme =
    oneThemeNews[0].attributes.type === "sport" ? "Спортивные" : "Политические";

  return (
    <div>
      <h1 className="title">{theme} новости</h1>
      <div className="news">
        {oneThemeNews.map((news) => (
          <div className="item" key={`oneThemeNews -- ${news.id}`}>
            <Link className="text-dec-none" href={`/${tag}/${news.id}`}>
              <h3 className="name">{news.attributes.main[0].name}</h3>
              <p className="descr">{news.attributes.main[0].description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThemeNews;
