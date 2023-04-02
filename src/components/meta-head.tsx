import Head from "next/head";

type Props = {
  err: boolean;
  seo: object;
};

export const MetaHead = ({ err, seo }: Props): JSX.Element | null => {
  if (err) return null;
  return (
    <Head>
      <title>Brightsites seo test</title>
      <meta name="description" content="Brightsites seo test" />
      <link rel="icon" href="/favicon.ico" />
      <script
        key="product-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(seo) }}
      />
    </Head>
  );
};
