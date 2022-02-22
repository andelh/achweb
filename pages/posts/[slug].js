import styled from "styled-components"
import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote } from "next-mdx-remote"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import SyntaxHighlighter from "react-syntax-highlighter"
import Button from "../../components/Button.jsx"
import Layout from "../../components/layout.js"
import SEO from "../../components/seo.js"
import { colors } from "../../styles/colors.js"

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"))
  const paths = files.map(filename => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".mdx"),
    "utf-8"
  )
  const { data: frontMatter, content } = matter(markdownWithMeta)
  const mdxSource = await serialize(content)
  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  }
}

const PostPage = ({ frontMatter: { title }, mdxSource }) => {
  return (
    <Layout>
      <SEO title={title} />
      <h1>{title}</h1>
      <Container>
        <MDXRemote
          {...mdxSource}
          components={{ Button, SyntaxHighlighter, a: A }}
        />
      </Container>
    </Layout>
  )
}

export default PostPage

const Container = styled.div`
  max-width: 690px;
  /* margin: 0 auto; */
`
const A = styled.a`
  color: ${colors.primary};
`
