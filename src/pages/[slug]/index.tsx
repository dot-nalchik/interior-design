"use client";

import styles from "./Page.module.css";

export function getStaticPaths() {
  const posts = ["a", "b", "c"];

  const paths = posts.map((post) => ({
    params: { slug: post },
  }));

  return { paths, fallback: false };
}

interface IGetStaticPropsProps {
  params: { slug: string };
}

export function getStaticProps({ params }: IGetStaticPropsProps) {
  return { props: { data: params.slug } };
}

interface IPageProps {
  data: string;
}

export default function Page({ data }: IPageProps) {
  return <div className={styles.page}>{data}</div>;
}
