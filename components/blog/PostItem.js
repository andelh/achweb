import styled from "styled-components"
import Image from "next/image"
import Link from "next/link"
import { colors } from "../../styles/colors"
import { motion } from "framer-motion"
import readingTime from "reading-time"

export default function PostItem({ post }) {
  const readTime = readingTime(post.markdownWithMeta)
  return (
    <Link href={"/posts/" + post.slug} passHref>
      <Card whileHover={{ opacity: 0.8 }} className="card-body">
        <Title className="card-title">{post.frontMatter.title}</Title>
        <Excerpt className="card-text">{post.frontMatter.description}</Excerpt>
        <Date className="card-text">
          <small className="text-muted">
            {post.frontMatter.date} • {readTime.text}
          </small>
        </Date>
        <Link href={"/posts/" + post.slug}>
          <CTA>Read more</CTA>
        </Link>
      </Card>
    </Link>
  )
}

const Card = styled(motion.div)`
  padding: 10px 0 30px 0;
  margin-bottom: 40px;
  cursor: pointer;
  border-bottom: 1px solid rgba(255, 255, 255, 0.125);
`

const Title = styled.h3`
  font-size: 24px;
  font-weight: 600;
  line-height: 1.3;
  margin-bottom: 15px;
`
const Excerpt = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;
  margin-bottom: 15px;
`
const Date = styled.p`
  font-size: 17px;
  font-weight: 400;
  line-height: 1
  margin-bottom: 25px;
`
const CTA = styled.a`
  color: ${colors.primary};
  font-weight: 600;
  text-transform: uppercase;
`
