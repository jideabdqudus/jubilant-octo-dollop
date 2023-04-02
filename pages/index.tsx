import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import styles from "../styles/Home.module.css";
import data from "../data.json";
import { handleSEO } from "../utils";
import { MetaHead } from "../src/components";

const Article: NextPage = ({
  structuredData,
  error,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className={styles.container}>
      <MetaHead err={error} seo={structuredData} />
      <main className={styles.main}>
        <h1 className={styles.title}>Seo brightsites test</h1>
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  context.res.setHeader(
    "Cache-Control",
    "public,  s-maxage=300, stale-while-revalidate=59"
  );
  context.res.setHeader("Content-Security-Policy", `frame-ancestors 'self';`);
  /*
   Typically an API call would be made here to get the available review data, then the result would be handled by the handleSEO function
   */
  // @ts-ignore
  const dataset = handleSEO(data);
  try {
    return {
      props: {
        ...dataset,
        error: false,
      },
    };
  } catch (err) {
    return {
      props: {
        dataset: null,
        error: true,
      },
    };
  }
};
export default Article;
