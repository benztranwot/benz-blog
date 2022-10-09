import Head from "next/head";
import { PostCard, Categories, PostWidget } from "../components";
import FeaturedPosts from "../components/FeaturedPosts";
import { getPosts } from "../services";

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 pb-8">
      <Head>
        <title>Home | Benz Blog</title>
        <meta name="description" content="Benz Blog" />
      </Head>
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard post={post.node} key={post.node.title} last={posts.length - 1 === index ? true : false} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
