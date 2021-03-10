import Post from "./Post";
import Newsletter from "./Newsletter";

import { NotionPost } from "../utils/post";

import styles from "../styles/PostMenu.module.css";

const PostMenu = ({ title, description, posts, newsletter }) => {
  return (
    <div className={styles.container + " mx-auto"}>
      <div>
        <h1 className={styles.heading + " text-center"}>{title}</h1>
        <div className="font-normal text-center">
          <h2 className="mb-2">{description}</h2>
        </div>
        <div className="space-y-3 my-6">
          {posts.map(
            (post: NotionPost) => (
              <Post
                key={post.id}
                title={post.title}
                date={post.date}
                slug={post.slug}
                preview={post.preview}
                url={title.toLowerCase()}
              />
            )
          )}
        </div>
        {newsletter ? <Newsletter /> : null}
      </div>
    </div>
  );
};

export default PostMenu;
