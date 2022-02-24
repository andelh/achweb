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
      <Title>{title}</Title>
      <Container>
        <MDXRemote
          {...mdxSource}
          components={{
            Button,
            SyntaxHighlighter,
            a: A,
            p: P,
            h1: H1,
            h2: H2,
            h3: H3,
            h4: H4,
            h5: H5,
          }}
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
const Title = styled.h1`
  font-size: 50px;
  max-width: 21ch;

  @media (max-width: 550px) {
    font-size: 40px;
  }
`
// Updating MDX base html elements
const A = styled.a`
  color: ${colors.primary};
`
const P = styled.p`
  color: white;
  opacity: 0.9;
  line-height: 1.6;
  font-size: 18px;
`
const H1 = styled.h1`
  font-size: 48px;
`
const H2 = styled.h2`
  font-size: 39px;
`
const H3 = styled.h3`
  font-size: 31px;
`
const H4 = styled.h4`
  font-size: 25px;
`
const H5 = styled.h5`
  font-size: 20px;
`
const H6 = styled.h6``
