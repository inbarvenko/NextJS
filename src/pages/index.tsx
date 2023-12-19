import Link from "next/link";
import { getAllNews } from "./api/strapiApi";
import { NewsDataType } from "@/types/news";

type Props = {
  sportNews: NewsDataType[];
  politicalNews: NewsDataType[];
};

export const getStaticProps = async () => {
  const politicalNews = await getAllNews('politics');
  const sportNews = await getAllNews('news');

  return { props: { sportNews, politicalNews } };
};

export default function Home(props: Props) {
  const { sportNews, politicalNews } = props;

  return (
    <main>
      <p>Новости к этому часу</p>

      <Link href="/sport">Спортивные новости</Link>
      <ul>
        {sportNews.map((news) => (
          <li key={`sportNews--${news.id}`}>
            <Link href={`/sport/${news.id}`}>{news.attributes.name}</Link>
          </li>
        ))}
      </ul>

      <Link href="/political">Политические новости</Link>
      <ul>
        {politicalNews.map((news) => (
          <li key={`politicalNews--${news.id}`}>
            <Link href={`/political/${news.id}`}>{news.attributes.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
