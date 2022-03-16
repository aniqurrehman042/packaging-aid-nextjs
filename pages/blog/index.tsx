import { NextPage } from "next";
import Link from "next/link";
import blogs from "../../data/raw/blogs";

const BlogsPage: NextPage = () => {
    const blogsList = blogs.map((blog, index) => {
        return (
            <Link href={`/blog/${blog.id}`} key={index}>
                <a>
                    <div className="blog-posts-area">
                        <div className="blog-box">
                            <h2>{blog.title}</h2>
                            <p>{blog.body}</p>
                            <p className="read-more">Read More</p>
                        </div>
                    </div>
                </a>
            </Link>
        );
    });

    return (
        <section id="blogSection">
            <h1 className="blog-heading">Blog</h1>
            {blogsList}
        </section>
    )
}

export default BlogsPage;