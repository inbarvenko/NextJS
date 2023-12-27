import Link from "next/link";
import { getAllNews } from "../api/strapiApi";
import { NewsDataType } from "@/types/news";

type Props = {
  allNews: NewsDataType[];
};

export const getStaticProps = async () => {
  const allNews = await getAllNews();

  return { props: { allNews } };
};

export default function Home(props: Props) {
  const { allNews } = props;

  const sportNews = allNews
    .filter((news) => news.attributes.type == "sport")
    .splice(0, 4);
  const politicNews = allNews
    .filter((news) => news.attributes.type == "politic")
    .splice(0, 4);

  return (
    <main>
      <h1>Новости к этому часу</h1>
      <hr />

      <Link className="text-dec-none" href="/sport">
        <h2 className="title">Спортивные новости</h2>
      </Link>
      <div className="news">
        {sportNews.map((news) => (
          <article className="item" key={`sportNews--${news.id}`}>
            <Link className="text-dec-none" href={`/sport/${news.id}`}>
              <h3 className="name">{news.attributes.main[0].name}</h3>
              <p className="descr">{news.attributes.main[0].description}</p>
            </Link>
          </article>
        ))}
      </div>

      <Link className="text-dec-none" href="/sport">
        <h3 className="title">Читать далее ...</h3>
      </Link>

      <hr />

      <Link className="text-dec-none" href="/politic">
        <h2 className="title">Политические новости</h2>
      </Link>
      <div className="news">
        {politicNews.map((news) => (
          <article className="item" key={`politicNews--${news.id}`}>
            <Link className="text-dec-none" href={`/politic/${news.id}`}>
              <h3 className="name">{news.attributes.main[0].name}</h3>
              <p className="descr">{news.attributes.main[0].description}</p>
            </Link>
          </article>
        ))}
      </div>
      <Link className="text-dec-none" href="/politic">
        <h3 className="title">Читать далее ...</h3>
      </Link>
      <hr />
    </main>
  );
}
