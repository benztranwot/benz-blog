import Head from "next/head";
import { getCategoryPost } from "../../services";
import { PostCard, Categories, Loader, PostWidget } from "../../components";

const CategoryPost = ({ posts }) => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Category | Benz Blog</title>
        <meta name="description" content="Benz Blog" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-12">
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} last={posts.length - 1 === index ? true : false} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryPost;

export async function getServerSideProps({ params }) {
  const posts = await getCategoryPost(params.slug);

  return {
    props: { posts },
  };
}
