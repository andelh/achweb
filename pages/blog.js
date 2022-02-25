import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
//NPM
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import Link from "next/link"
import Image from "next/image"
import PostItem from "../components/blog/PostItem"
import { colors } from "../styles/colors"

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"))
  const posts = files
    .map(filename => {
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
    .filter(post => !post.frontMatter.draft)
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
      <Container>
        <Title>Latest</Title>
        <Grid>
          <StickySection>
            <Tags>
              <Tag>All posts</Tag>
              {/* <Tag>Tutorials</Tag>
              <Tag>React</Tag>
              <Tag>Animation</Tag>
              <Tag>Design for Developers</Tag> */}
            </Tags>
          </StickySection>
          <div>
            {posts.map((post, index) => (
              <PostItem key={index} post={post} />
            ))}
          </div>
        </Grid>
      </Container>
    </Layout>
  )
}

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-top: 50px;
  position: relative;
`
const Title = styled.h1`
  margin-bottom: 50px;
`
const StickySection = styled.div`
  position: sticky;
  top: 120px;
  margin-bottom: 40px;

  @media (max-width: 680px) {
    position: relative;
    top: 0;
  }
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 50px;
  position: relative;

  @media (max-width: 766px) {
    grid-template-columns: 200px 1fr;
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`
const Tags = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 15px;
  row-gap: 4px;
`
const Tag = styled.p`
  margin: 0;
  color: ${colors.primary};
  font-weight: 500;
`
