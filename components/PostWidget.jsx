import { useState, useEffect } from "react";
import Link from "next/link";
import moment from "moment/moment";
import Image from "next/image";

import { getRecentPosts, getSimilarPosts } from "../services";

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result);
      });
    }
  }, [slug]);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8 pb-4">
      <h3 className="text-xl font-semibold border-b pb-4">{slug ? "Related Posts" : "Recent Posts"}</h3>
      {relatedPosts.map((post, index) => (
        <Link href={`/post/${post.slug}`} key={post.title}>
          <div
            key={index}
            className={`flex items-center w-full p-3 rounded-lg transition duration-200 cursor-pointer hover:bg-slate-100 ${
              index === relatedPosts.length - 1 ? "border-b-0" : "border-b"
            }`}
          >
            <div className="w-16 flex-none">
              <Image
                src={post.featuredImage.url}
                alt={post.title}
                height="64px"
                width="64px"
                className="align-middle rounded-full h-16 w-16 object-cover"
              />
            </div>
            <div className="flex-grow ml-4">
              <p className="text-gray-500 font-xs">{moment(post.createdAt).format("MMM DD, YYYY")}</p>
              <p>{post.title}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default PostWidget;
