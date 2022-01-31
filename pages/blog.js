import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
//NPM
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Link from "next/link"
import Image from "next/image"

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"))
  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    )
    const { data: frontMatter } = matter(markdownWithMeta)
    return {
      frontMatter,
      slug: filename.split(".")[0],
    }
  })
  return {
    props: {
      posts,
    },
  }
}

export default function IndexPage({ posts }) {
  console.log({ posts })
  // const projectsData = projects.data.map(project => project.attributes)
  // console.log({ projectsData })
  return (
    <Layout>
      <SEO
        title="Blog"
        description="A web and software developer based in Trinidad and Tobago. My aim is to raise the bar in the quality of products that come out of our home soil. Contact me for work!"
      />
      {posts.map((post, index) => (
        <Link href={"/posts/" + post.slug} passHref key={index}>
          <div className="card mb-3 pointer" style={{ maxWidth: "540px" }}>
            <div className="row g-0">
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{post.frontMatter.title}</h5>
                  <p className="card-text">{post.frontMatter.description}</p>
                  <p className="card-text">
                    <small className="text-muted">
                      {post.frontMatter.date}
                    </small>
                  </p>
                </div>
              </div>
              <div className="col-md-4 m-auto">
                <Image
                  src={post.frontMatter.thumbnailUrl}
                  className="img-fluid mt-1 rounded-start"
                  alt="thumbnail"
                  width={500}
                  height={400}
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </Layout>
  )
}
