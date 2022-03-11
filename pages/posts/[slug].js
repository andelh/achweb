import styled from "styled-components"
import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote } from "next-mdx-remote"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
// import SyntaxHighlighter from "react-syntax-highlighter"
import Button from "../../components/Button.jsx"
import Layout from "../../components/layout.js"
import SEO from "../../components/seo.js"
import { colors } from "../../styles/colors.js"
import { motion } from "framer-motion"
import Image from "next/image"

const ResponsiveImage = props => (
  <div style={{ position: "relative", height: 400, width: "100%" }}>
    <Image
      alt={props.alt}
      objectFit="contain"
      layout="fill"
      // placeholder={props?.src?.includes(".gif") ? "empty" : "blur"}
      {...props}
    />
  </div>
)

const MySyntaxHighlighter = props => (
  <SyntaxHighlighter style={duotoneSea} {...props}>
    {props.children}
  </SyntaxHighlighter>
)

const AnimatedA = props => {
  return (
    <A
      {...props}
      target="_blank"
      initial={{ y: 0 }}
      whileHover={{ y: -3, rotate: -3 }}
    >
      {props.children}
    </A>
  )
}

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
            SyntaxHighlighter: MySyntaxHighlighter,
            a: AnimatedA,
            p: P,
            h1: H1,
            h2: H2,
            h3: H3,
            h4: H4,
            h5: H5,
            li: Li,
            ol: Ol,
            ul: Ul,
            code: Code,
            blockquote: BlockQuote,
            img: ResponsiveImage,
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
const A = styled(motion.a)`
  color: ${colors.primary};
  text-decoration: none;
  font-weight: 500;
  display: inline-block;
  word-break: break-word;
  cursor: pointer;
`
const P = styled.p`
  color: white;
  opacity: 0.95;
  /* line-height: 1.6; */
  /* font-size: 18px; */
  margin-bottom: 1.5rem;
  font-weight: 500;

  @media (max-width: 550px) {
    font-size: 18px;
  }

  code {
    font-size: 16px;
    /* background: rgba(255, 255, 255, 0.2) !important; */
  }
  em {
    font-weight: 500;
    line-height: 1.4;
  }
`
const H1 = styled.h1`
  font-size: 48px;
  margin-top: 64px;
  margin-bottom: 16px;
  color: ${colors.tertiary};
  letter-spacing: -1.5px;
`
const H2 = styled.h2`
  font-size: 39px;
  margin-top: 64px;
  margin-bottom: 16px;
  color: ${colors.tertiary};
  letter-spacing: -1.5px;
`
const H3 = styled.h3`
  font-size: 31px;
  margin-top: 64px;
  margin-bottom: 16px;
  color: ${colors.tertiary};
  letter-spacing: -1.5px;

  > code {
    font-size: 24px;
  }
`
const H4 = styled.h4`
  font-size: 25px;
  margin-top: 64px;
  margin-bottom: 16px;
  color: ${colors.tertiary};
  letter-spacing: -1.5px;
`
const H5 = styled.h5`
  font-size: 20px;
  margin-top: 64px;
  margin-bottom: 16px;
  color: ${colors.tertiary};
  letter-spacing: -1.5px;
`
const H6 = styled.h6`
  font-size: 19px;
  margin-top: 64px;
  margin-bottom: 16px;
  color: ${colors.tertiary};
`
const Li = styled.li`
  color: white;
  opacity: 0.9;
  line-height: 1.6;
  font-size: 20px;
  font-weight: 500;

  @media (max-width: 550px) {
    font-size: 17px;
  }
`
const Ol = styled.ol`
  margin-left: 40px;
`
const Ul = styled.ul`
  margin-left: 40px;
`
const Code = styled.code`
  font-size: 16px;
  background: rgba(255, 255, 255, 0.2) !important;
  padding: 3px 4px;
  border-radius: 3px;
  margin: 0 3px;
`
const BlockQuote = styled.blockquote`
  border-left: 2px dashed ${colors.tertiary};
  margin-left: 25px;
  padding-left: 25px;
  font-style: italic;
  opacity: 0.9;

  @media (max-width: 550px) {
    margin-left: 15px;
    padding-left: 15px;
  }
  > p {
    font-weight: normal;
    font-size: 17px;
  }
`

// THEMES
const pojoaque = {
  'code[class*="language-"]': {
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
    whiteSpace: "pre-wrap",
    wordBreak: "break-all",
    wordWrap: "break-word",
    fontFamily: 'Menlo, Monaco, "Courier New", monospace',
    fontSize: "15px",
    lineHeight: "1.5",
    color: "#dccf8f",
    textShadow: "0",
  },
  'pre[class*="language-"]': {
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
    whiteSpace: "pre-wrap",
    wordBreak: "break-all",
    wordWrap: "break-word",
    fontFamily: 'Menlo, Monaco, "Courier New", monospace',
    fontSize: "15px",
    lineHeight: "1.5",
    color: "#DCCF8F",
    textShadow: "0",
    borderRadius: "5px",
    border: "1px solid #000",
    background:
      "#181914 url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAMAAA/+4ADkFkb2JlAGTAAAAAAf/bAIQACQYGBgcGCQcHCQ0IBwgNDwsJCQsPEQ4ODw4OERENDg4ODg0RERQUFhQUERoaHBwaGiYmJiYmKysrKysrKysrKwEJCAgJCgkMCgoMDwwODA8TDg4ODhMVDg4PDg4VGhMRERERExoXGhYWFhoXHR0aGh0dJCQjJCQrKysrKysrKysr/8AAEQgAjACMAwEiAAIRAQMRAf/EAF4AAQEBAAAAAAAAAAAAAAAAAAABBwEBAQAAAAAAAAAAAAAAAAAAAAIQAAEDAwIHAQEAAAAAAAAAAADwAREhYaExkUFRcYGxwdHh8REBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AyGFEjHaBS2fDDs2zkhKmBKktb7km+ZwwCnXPkLVmCTMItj6AXFxRS465/BTnkAJvkLkJe+7AKKoi2AtRS2zuAWsCb5GOlBN8gKfmuGHZ8MFqIth3ALmFoFwbwKWyAlTAp17uKqBvgBD8sM4fTjhvAhkzhaRkBMKBrfs7jGPIpzy7gFrAqnC0C0gB0EWwBDW2cBVQwm+QtPpa3wBO3sVvszCnLAhkzgL5/RLf13cLQd8/AGlu0Cb5HTx9KuAEieGJEdcehS3eRTp2ATdt3CpIm+QtZwAhROXFeb7swp/ahaM3kBE/jSIUBc/AWrgBN8uNFAl+b7sAXFxFn2YLUU5Ns7gFX8C4ib+hN8gFWXwK3bZglxEJm+gKdciLPsFV/TClsgJUwKJ5FVA7tvIFrfZhVfGJDcsCKaYgAqv6YRbE+RWOWBtu7+AL3yRalXLyKqAIIfk+zARbDgFyEsncYwJvlgFRW+GEWntIi2P0BooyFxcNr8Ep3+ANLbMO+QyhvbiqdgC0kVvgUUiLYgBS2QtPbiVI1/sgOmG9uO+Y8DW+7jS2zAOnj6O2BndwuIAUtkdRN8gFoK3wwXMQyZwHVbClsuNLd4E3yAUR6FVDBR+BafQGt93LVMxJTv8ABts4CVLhcfYWsCb5kC9/BHdU8CLYFY5bMAd+eX9MGthhpbA1vu4B7+RKkaW2Yq4AQtVBBFsAJU/AuIXBhN8gGWnstefhiZyWvLAEnbYS1uzSFP6Jvn4Baxx70JKkQojLib5AVTey1jjgkKJGO0AKWyOm7N7cSpgSpAdPH0Tfd/gp1z5C1ZgKqN9J2wFxcUUuAFLZAm+QC0Fb4YUVRFsAOvj4KW2dwtYE3yAWk/wS/PLMKfmuGHZ8MAXF/Ja32Yi5haAKWz4Ydm2cSpgU693Atb7km+Zwwh+WGcPpxw3gAkzCLY+iYUDW/Z3Adc/gpzyFrAqnALkJe+7DoItgAtRS2zuKqGE3yAx0oJvkdvYrfZmALURbDuL5/RLf13cAuDeBS2RpbtAm+QFVA3wR+3fUtFHoBDJnC0jIXH0HWsgMY8inPLuOkd9chp4z20ALQLSA8cI9jYAIa2zjzjBd8gRafS1vgiUho/kAKcsCGTOGWvoOpkAtB3z8Hm8x2Ff5ADp4+lXAlIvcmwH/2Q==') repeat left top",
    padding: "12px",
    overflow: "auto",
  },
  'pre > code[class*="language-"]': {
    fontSize: "1em",
  },
  ':not(pre) > code[class*="language-"]': {
    borderRadius: "5px",
    border: "1px solid #000",
    color: "#DCCF8F",
    background:
      "#181914 url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAAMAAA/+4ADkFkb2JlAGTAAAAAAf/bAIQACQYGBgcGCQcHCQ0IBwgNDwsJCQsPEQ4ODw4OERENDg4ODg0RERQUFhQUERoaHBwaGiYmJiYmKysrKysrKysrKwEJCAgJCgkMCgoMDwwODA8TDg4ODhMVDg4PDg4VGhMRERERExoXGhYWFhoXHR0aGh0dJCQjJCQrKysrKysrKysr/8AAEQgAjACMAwEiAAIRAQMRAf/EAF4AAQEBAAAAAAAAAAAAAAAAAAABBwEBAQAAAAAAAAAAAAAAAAAAAAIQAAEDAwIHAQEAAAAAAAAAAADwAREhYaExkUFRcYGxwdHh8REBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AyGFEjHaBS2fDDs2zkhKmBKktb7km+ZwwCnXPkLVmCTMItj6AXFxRS465/BTnkAJvkLkJe+7AKKoi2AtRS2zuAWsCb5GOlBN8gKfmuGHZ8MFqIth3ALmFoFwbwKWyAlTAp17uKqBvgBD8sM4fTjhvAhkzhaRkBMKBrfs7jGPIpzy7gFrAqnC0C0gB0EWwBDW2cBVQwm+QtPpa3wBO3sVvszCnLAhkzgL5/RLf13cLQd8/AGlu0Cb5HTx9KuAEieGJEdcehS3eRTp2ATdt3CpIm+QtZwAhROXFeb7swp/ahaM3kBE/jSIUBc/AWrgBN8uNFAl+b7sAXFxFn2YLUU5Ns7gFX8C4ib+hN8gFWXwK3bZglxEJm+gKdciLPsFV/TClsgJUwKJ5FVA7tvIFrfZhVfGJDcsCKaYgAqv6YRbE+RWOWBtu7+AL3yRalXLyKqAIIfk+zARbDgFyEsncYwJvlgFRW+GEWntIi2P0BooyFxcNr8Ep3+ANLbMO+QyhvbiqdgC0kVvgUUiLYgBS2QtPbiVI1/sgOmG9uO+Y8DW+7jS2zAOnj6O2BndwuIAUtkdRN8gFoK3wwXMQyZwHVbClsuNLd4E3yAUR6FVDBR+BafQGt93LVMxJTv8ABts4CVLhcfYWsCb5kC9/BHdU8CLYFY5bMAd+eX9MGthhpbA1vu4B7+RKkaW2Yq4AQtVBBFsAJU/AuIXBhN8gGWnstefhiZyWvLAEnbYS1uzSFP6Jvn4Baxx70JKkQojLib5AVTey1jjgkKJGO0AKWyOm7N7cSpgSpAdPH0Tfd/gp1z5C1ZgKqN9J2wFxcUUuAFLZAm+QC0Fb4YUVRFsAOvj4KW2dwtYE3yAWk/wS/PLMKfmuGHZ8MAXF/Ja32Yi5haAKWz4Ydm2cSpgU693Atb7km+Zwwh+WGcPpxw3gAkzCLY+iYUDW/Z3Adc/gpzyFrAqnALkJe+7DoItgAtRS2zuKqGE3yAx0oJvkdvYrfZmALURbDuL5/RLf13cAuDeBS2RpbtAm+QFVA3wR+3fUtFHoBDJnC0jIXH0HWsgMY8inPLuOkd9chp4z20ALQLSA8cI9jYAIa2zjzjBd8gRafS1vgiUho/kAKcsCGTOGWvoOpkAtB3z8Hm8x2Ff5ADp4+lXAlIvcmwH/2Q==') repeat left top",
    padding: "2px 6px",
  },
  namespace: {
    Opacity: ".7",
  },
  comment: {
    color: "#586e75",
    fontStyle: "italic",
  },
  prolog: {
    color: "#586e75",
    fontStyle: "italic",
  },
  doctype: {
    color: "#586e75",
    fontStyle: "italic",
  },
  cdata: {
    color: "#586e75",
    fontStyle: "italic",
  },
  number: {
    color: "#b89859",
  },
  string: {
    color: "#468966",
  },
  char: {
    color: "#468966",
  },
  builtin: {
    color: "#468966",
  },
  inserted: {
    color: "#468966",
  },
  "attr-name": {
    color: "#b89859",
  },
  operator: {
    color: "#dccf8f",
  },
  entity: {
    color: "#dccf8f",
    cursor: "help",
  },
  url: {
    color: "#dccf8f",
  },
  ".language-css .token.string": {
    color: "#dccf8f",
  },
  ".style .token.string": {
    color: "#dccf8f",
  },
  selector: {
    color: "#859900",
  },
  regex: {
    color: "#859900",
  },
  atrule: {
    color: "#cb4b16",
  },
  keyword: {
    color: "#cb4b16",
  },
  "attr-value": {
    color: "#468966",
  },
  function: {
    color: "#b58900",
  },
  variable: {
    color: "#b58900",
  },
  placeholder: {
    color: "#b58900",
  },
  property: {
    color: "#b89859",
  },
  tag: {
    color: "#ffb03b",
  },
  boolean: {
    color: "#b89859",
  },
  constant: {
    color: "#b89859",
  },
  symbol: {
    color: "#b89859",
  },
  important: {
    color: "#dc322f",
  },
  statement: {
    color: "#dc322f",
  },
  deleted: {
    color: "#dc322f",
  },
  punctuation: {
    color: "#dccf8f",
  },
  bold: {
    fontWeight: "bold",
  },
  italic: {
    fontStyle: "italic",
  },
}

const materialDark = {
  'code[class*="language-"]': {
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    wordWrap: "normal",
    color: "#eee",
    background: "#2f2f2f",
    fontFamily: "Roboto Mono, monospace",
    fontSize: "1em",
    lineHeight: "1.5em",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
  },
  'pre[class*="language-"]': {
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    wordWrap: "normal",
    color: "#eee",
    background: "#2f2f2f",
    fontFamily: "Roboto Mono, monospace",
    fontSize: "1em",
    lineHeight: "1.5em",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
    overflow: "auto",
    position: "relative",
    margin: "0.5em 0",
    padding: "1.25em 1em",
  },
  'code[class*="language-"]::-moz-selection': {
    background: "#363636",
  },
  'pre[class*="language-"]::-moz-selection': {
    background: "#363636",
  },
  'code[class*="language-"] ::-moz-selection': {
    background: "#363636",
  },
  'pre[class*="language-"] ::-moz-selection': {
    background: "#363636",
  },
  'code[class*="language-"]::selection': {
    background: "#363636",
  },
  'pre[class*="language-"]::selection': {
    background: "#363636",
  },
  'code[class*="language-"] ::selection': {
    background: "#363636",
  },
  'pre[class*="language-"] ::selection': {
    background: "#363636",
  },
  ':not(pre) > code[class*="language-"]': {
    whiteSpace: "normal",
    borderRadius: "0.2em",
    padding: "0.1em",
  },
  ".language-css > code": {
    color: "#fd9170",
  },
  ".language-sass > code": {
    color: "#fd9170",
  },
  ".language-scss > code": {
    color: "#fd9170",
  },
  '[class*="language-"] .namespace': {
    Opacity: "0.7",
  },
  atrule: {
    color: "#c792ea",
  },
  "attr-name": {
    color: "#ffcb6b",
  },
  "attr-value": {
    color: "#a5e844",
  },
  attribute: {
    color: "#a5e844",
  },
  boolean: {
    color: "#c792ea",
  },
  builtin: {
    color: "#ffcb6b",
  },
  cdata: {
    color: "#80cbc4",
  },
  char: {
    color: "#80cbc4",
  },
  class: {
    color: "#ffcb6b",
  },
  "class-name": {
    color: "#f2ff00",
  },
  comment: {
    color: "#616161",
  },
  constant: {
    color: "#c792ea",
  },
  deleted: {
    color: "#ff6666",
  },
  doctype: {
    color: "#616161",
  },
  entity: {
    color: "#ff6666",
  },
  function: {
    color: "#c792ea",
  },
  hexcode: {
    color: "#f2ff00",
  },
  id: {
    color: "#c792ea",
    fontWeight: "bold",
  },
  important: {
    color: "#c792ea",
    fontWeight: "bold",
  },
  inserted: {
    color: "#80cbc4",
  },
  keyword: {
    color: "#c792ea",
  },
  number: {
    color: "#fd9170",
  },
  operator: {
    color: "#89ddff",
  },
  prolog: {
    color: "#616161",
  },
  property: {
    color: "#80cbc4",
  },
  "pseudo-class": {
    color: "#a5e844",
  },
  "pseudo-element": {
    color: "#a5e844",
  },
  punctuation: {
    color: "#89ddff",
  },
  regex: {
    color: "#f2ff00",
  },
  selector: {
    color: "#ff6666",
  },
  string: {
    color: "#a5e844",
  },
  symbol: {
    color: "#c792ea",
  },
  tag: {
    color: "#ff6666",
  },
  unit: {
    color: "#fd9170",
  },
  url: {
    color: "#ff6666",
  },
  variable: {
    color: "#ff6666",
  },
}

const tommorrowNightBlue = {
  "hljs-comment": {
    color: "#7285b7",
  },
  "hljs-quote": {
    color: "#7285b7",
  },
  "hljs-variable": {
    color: "#ff9da4",
  },
  "hljs-template-variable": {
    color: "#ff9da4",
  },
  "hljs-tag": {
    color: "#ff9da4",
  },
  "hljs-name": {
    color: "#ff9da4",
  },
  "hljs-selector-id": {
    color: "#ff9da4",
  },
  "hljs-selector-class": {
    color: "#ff9da4",
  },
  "hljs-regexp": {
    color: "#ff9da4",
  },
  "hljs-deletion": {
    color: "#ff9da4",
  },
  "hljs-number": {
    color: "#ffc58f",
  },
  "hljs-built_in": {
    color: "#ffc58f",
  },
  "hljs-builtin-name": {
    color: "#ffc58f",
  },
  "hljs-literal": {
    color: "#ffc58f",
  },
  "hljs-type": {
    color: "#ffc58f",
  },
  "hljs-params": {
    color: "#ffc58f",
  },
  "hljs-meta": {
    color: "#ffc58f",
  },
  "hljs-link": {
    color: "#ffc58f",
  },
  "hljs-attribute": {
    color: "#ffeead",
  },
  "hljs-string": {
    color: "#d1f1a9",
  },
  "hljs-symbol": {
    color: "#d1f1a9",
  },
  "hljs-bullet": {
    color: "#d1f1a9",
  },
  "hljs-addition": {
    color: "#d1f1a9",
  },
  "hljs-title": {
    color: "#bbdaff",
  },
  "hljs-section": {
    color: "#bbdaff",
  },
  "hljs-keyword": {
    color: "#ebbbff",
  },
  "hljs-selector-tag": {
    color: "#ebbbff",
  },
  hljs: {
    display: "block",
    overflowX: "auto",
    background: "#002451",
    color: "white",
    padding: "0.5em",
  },
  "hljs-emphasis": {
    fontStyle: "italic",
  },
  "hljs-strong": {
    fontWeight: "bold",
  },
}

const synthWave = {
  'code[class*="language-"]': {
    color: "#f92aad",
    textShadow: "0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3",
    background: "none",
    fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    fontSize: "1em",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    wordWrap: "normal",
    lineHeight: "1.5",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
  },
  'pre[class*="language-"]': {
    color: "#f92aad",
    textShadow: "0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3",
    background: "none",
    fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
    fontSize: "1em",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    wordWrap: "normal",
    lineHeight: "1.5",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
    padding: "1em",
    margin: ".5em 0",
    overflow: "auto",
    backgroundColor: "transparent !important",
    backgroundImage: "linear-gradient(to bottom, #2a2139 75%, #34294f)",
  },
  ':not(pre) > code[class*="language-"]': {
    backgroundColor: "transparent !important",
    backgroundImage: "linear-gradient(to bottom, #2a2139 75%, #34294f)",
    padding: ".1em",
    borderRadius: ".3em",
    whiteSpace: "normal",
  },
  comment: {
    color: "#8e8e8e",
  },
  "block-comment": {
    color: "#8e8e8e",
  },
  prolog: {
    color: "#8e8e8e",
  },
  doctype: {
    color: "#8e8e8e",
  },
  cdata: {
    color: "#8e8e8e",
  },
  punctuation: {
    color: "#ccc",
  },
  tag: {
    color: "#e2777a",
  },
  "attr-name": {
    color: "#e2777a",
  },
  namespace: {
    color: "#e2777a",
  },
  number: {
    color: "#e2777a",
  },
  unit: {
    color: "#e2777a",
  },
  hexcode: {
    color: "#e2777a",
  },
  deleted: {
    color: "#e2777a",
  },
  property: {
    color: "#72f1b8",
    textShadow: "0 0 2px #100c0f, 0 0 10px #257c5575, 0 0 35px #21272475",
  },
  selector: {
    color: "#72f1b8",
    textShadow: "0 0 2px #100c0f, 0 0 10px #257c5575, 0 0 35px #21272475",
  },
  "function-name": {
    color: "#6196cc",
  },
  boolean: {
    color: "#fdfdfd",
    textShadow:
      "0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975",
  },
  "selector.id": {
    color: "#fdfdfd",
    textShadow:
      "0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975",
  },
  function: {
    color: "#fdfdfd",
    textShadow:
      "0 0 2px #001716, 0 0 3px #03edf975, 0 0 5px #03edf975, 0 0 8px #03edf975",
  },
  "class-name": {
    color: "#fff5f6",
    textShadow:
      "0 0 2px #000, 0 0 10px #fc1f2c75, 0 0 5px #fc1f2c75, 0 0 25px #fc1f2c75",
  },
  constant: {
    color: "#f92aad",
    textShadow: "0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3",
  },
  symbol: {
    color: "#f92aad",
    textShadow: "0 0 2px #100c0f, 0 0 5px #dc078e33, 0 0 10px #fff3",
  },
  important: {
    color: "#f4eee4",
    textShadow: "0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575",
    fontWeight: "bold",
  },
  atrule: {
    color: "#f4eee4",
    textShadow: "0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575",
  },
  keyword: {
    color: "#f4eee4",
    textShadow: "0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575",
  },
  "selector.class": {
    color: "#f4eee4",
    textShadow: "0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575",
  },
  builtin: {
    color: "#f4eee4",
    textShadow: "0 0 2px #393a33, 0 0 8px #f39f0575, 0 0 2px #f39f0575",
  },
  string: {
    color: "#f87c32",
  },
  char: {
    color: "#f87c32",
  },
  "attr-value": {
    color: "#f87c32",
  },
  regex: {
    color: "#f87c32",
  },
  variable: {
    color: "#f87c32",
  },
  operator: {
    color: "#67cdcc",
  },
  entity: {
    color: "#67cdcc",
    cursor: "help",
  },
  url: {
    color: "#67cdcc",
  },
  bold: {
    fontWeight: "bold",
  },
  italic: {
    fontStyle: "italic",
  },
  inserted: {
    color: "green",
  },
}
const duotoneSea = {
  'code[class*="language-"]': {
    fontFamily:
      'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
    fontSize: "14px",
    lineHeight: "1.375",
    direction: "ltr",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
    background: "#1d262f",
    color: "#57718e",
  },
  'pre[class*="language-"]': {
    fontFamily:
      'Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace',
    fontSize: "14px",
    lineHeight: "1.375",
    direction: "ltr",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
    background: "#1d262f",
    color: "#57718e",
    padding: "1em",
    margin: ".5em 0",
    overflow: "auto",
  },
  'pre > code[class*="language-"]': {
    fontSize: "1em",
  },
  'pre[class*="language-"]::-moz-selection': {
    textShadow: "none",
    background: "#004a9e",
  },
  'pre[class*="language-"] ::-moz-selection': {
    textShadow: "none",
    background: "#004a9e",
  },
  'code[class*="language-"]::-moz-selection': {
    textShadow: "none",
    background: "#004a9e",
  },
  'code[class*="language-"] ::-moz-selection': {
    textShadow: "none",
    background: "#004a9e",
  },
  'pre[class*="language-"]::selection': {
    textShadow: "none",
    background: "#004a9e",
  },
  'pre[class*="language-"] ::selection': {
    textShadow: "none",
    background: "#004a9e",
  },
  'code[class*="language-"]::selection': {
    textShadow: "none",
    background: "#004a9e",
  },
  'code[class*="language-"] ::selection': {
    textShadow: "none",
    background: "#004a9e",
  },
  ':not(pre) > code[class*="language-"]': {
    padding: ".1em",
    borderRadius: ".3em",
  },
  comment: {
    color: "#4a5f78",
  },
  prolog: {
    color: "#4a5f78",
  },
  doctype: {
    color: "#4a5f78",
  },
  cdata: {
    color: "#4a5f78",
  },
  punctuation: {
    color: "#4a5f78",
  },
  namespace: {
    Opacity: ".7",
  },
  tag: {
    color: "#0aa370",
  },
  operator: {
    color: "#0aa370",
  },
  number: {
    color: "#0aa370",
  },
  property: {
    color: "#57718e",
  },
  function: {
    color: "#57718e",
  },
  "tag-id": {
    color: "#ebf4ff",
  },
  selector: {
    color: "#ebf4ff",
  },
  "atrule-id": {
    color: "#ebf4ff",
  },
  "code.language-javascript": {
    color: "#7eb6f6",
  },
  "attr-name": {
    color: "#7eb6f6",
  },
  "code.language-css": {
    color: "#47ebb4",
  },
  "code.language-scss": {
    color: "#47ebb4",
  },
  boolean: {
    color: "#47ebb4",
  },
  string: {
    color: "#47ebb4",
  },
  entity: {
    color: "#47ebb4",
    cursor: "help",
  },
  url: {
    color: "#47ebb4",
  },
  ".language-css .token.string": {
    color: "#47ebb4",
  },
  ".language-scss .token.string": {
    color: "#47ebb4",
  },
  ".style .token.string": {
    color: "#47ebb4",
  },
  "attr-value": {
    color: "#47ebb4",
  },
  keyword: {
    color: "#47ebb4",
  },
  control: {
    color: "#47ebb4",
  },
  directive: {
    color: "#47ebb4",
  },
  unit: {
    color: "#47ebb4",
  },
  statement: {
    color: "#47ebb4",
  },
  regex: {
    color: "#47ebb4",
  },
  atrule: {
    color: "#47ebb4",
  },
  placeholder: {
    color: "#47ebb4",
  },
  variable: {
    color: "#47ebb4",
  },
  deleted: {
    textDecoration: "line-through",
  },
  inserted: {
    borderBottom: "1px dotted #ebf4ff",
    textDecoration: "none",
  },
  italic: {
    fontStyle: "italic",
  },
  important: {
    fontWeight: "bold",
    color: "#7eb6f6",
  },
  bold: {
    fontWeight: "bold",
  },
  "pre > code.highlight": {
    Outline: ".4em solid #34659d",
    OutlineOffset: ".4em",
  },
  ".line-numbers .line-numbers-rows": {
    borderRightColor: "#1f2932",
  },
  ".line-numbers-rows > span:before": {
    color: "#2c3847",
  },
  ".line-highlight": {
    background:
      "linear-gradient(to right, rgba(10, 163, 112, 0.2) 70%, rgba(10, 163, 112, 0))",
  },
}

const coldDark = {
  'code[class*="language-"]': {
    color: "#e3e9f2",
    background: "none",
    fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    wordWrap: "normal",
    lineHeight: "1.5",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
  },
  'pre[class*="language-"]': {
    color: "#e3e9f2",
    background: "#111b27",
    fontFamily: 'Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace',
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    wordWrap: "normal",
    lineHeight: "1.5",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
    padding: "1em",
    margin: "0.5em 0",
    overflow: "auto",
  },
  'pre[class*="language-"]::-moz-selection': {
    background: "#304259",
  },
  'pre[class*="language-"] ::-moz-selection': {
    background: "#304259",
  },
  'code[class*="language-"]::-moz-selection': {
    background: "#304259",
  },
  'code[class*="language-"] ::-moz-selection': {
    background: "#304259",
  },
  'pre[class*="language-"]::selection': {
    background: "#304259",
  },
  'pre[class*="language-"] ::selection': {
    background: "#304259",
  },
  'code[class*="language-"]::selection': {
    background: "#304259",
  },
  'code[class*="language-"] ::selection': {
    background: "#304259",
  },
  ':not(pre) > code[class*="language-"]': {
    background: "#111b27",
    padding: "0.1em 0.3em",
    borderRadius: "0.3em",
    whiteSpace: "normal",
  },
  comment: {
    color: "#ccd6e4",
    fontStyle: "italic",
  },
  prolog: {
    color: "#ccd6e4",
    fontStyle: "italic",
  },
  doctype: {
    color: "#ccd6e4",
    fontStyle: "italic",
  },
  cdata: {
    color: "#ccd6e4",
    fontStyle: "italic",
  },
  punctuation: {
    color: "#e3e9f2",
  },
  selector: {
    color: "#5dc2c2",
  },
  tag: {
    color: "#5dc2c2",
  },
  "attr-name": {
    color: "#cdb74a",
  },
  boolean: {
    color: "#cdb74a",
  },
  number: {
    color: "#cdb74a",
  },
  constant: {
    color: "#cdb74a",
  },
  "pseudo-class": {
    color: "#cdb74a",
  },
  "pseudo-element": {
    color: "#cdb74a",
  },
  "selector.attribute": {
    color: "#cdb74a",
  },
  "class-name": {
    color: "#6ab3e4",
  },
  key: {
    color: "#6ab3e4",
  },
  parameter: {
    color: "#6ab3e4",
  },
  property: {
    color: "#6ab3e4",
  },
  "property-access": {
    color: "#6ab3e4",
  },
  variable: {
    color: "#6ab3e4",
  },
  "attr-value": {
    color: "#82c366",
  },
  inserted: {
    color: "#82c366",
  },
  color: {
    color: "#82c366",
  },
  "selector.value": {
    color: "#82c366",
  },
  string: {
    color: "#82c366",
  },
  "string.url-link": {
    color: "#82c366",
  },
  builtin: {
    color: "#ea89ea",
  },
  "keyword-array": {
    color: "#ea89ea",
  },
  package: {
    color: "#ea89ea",
  },
  regex: {
    color: "#ea89ea",
  },
  function: {
    color: "#cf7ef6",
  },
  "selector.class": {
    color: "#cf7ef6",
  },
  "selector.id": {
    color: "#cf7ef6",
  },
  "atrule.rule": {
    color: "#d88b4a",
  },
  combinator: {
    color: "#d88b4a",
  },
  keyword: {
    color: "#d88b4a",
  },
  operator: {
    color: "#d88b4a",
  },
  "selector.token.operator": {
    color: "#d88b4a",
  },
  unit: {
    color: "#d88b4a",
  },
  deleted: {
    color: "#f57a73",
  },
  important: {
    color: "#f57a73",
    fontWeight: "bold",
  },
  "keyword-this": {
    color: "#6ab3e4",
    fontWeight: "bold",
  },
  this: {
    color: "#6ab3e4",
    fontWeight: "bold",
  },
  bold: {
    fontWeight: "bold",
  },
  italic: {
    fontStyle: "italic",
  },
  entity: {
    cursor: "help",
  },
  ".language-markdown .token.title": {
    color: "#6ab3e4",
    fontWeight: "bold",
  },
  ".language-markdown .token.title .token.punctuation": {
    color: "#6ab3e4",
    fontWeight: "bold",
  },
  ".language-markdown .token.code": {
    color: "#5dc2c2",
  },
  ".language-markdown .token.url .token.content": {
    color: "#82c366",
  },
  ".language-markdown .token.url-link": {
    color: "#cdb74a",
  },
  ".language-markdown .token.list.punctuation": {
    color: "#ea89ea",
  },
  ".language-markdown .token.table-header": {
    color: "#e3e9f2",
  },
  ".language-json .token.operator": {
    color: "#e3e9f2",
  },
  "tab:not(:empty):before": {
    color: "#ccd6e4",
  },
  "cr:before": {
    color: "#ccd6e4",
  },
  "lf:before": {
    color: "#ccd6e4",
  },
  "space:before": {
    color: "#ccd6e4",
  },
  "div.code-toolbar > .toolbar a": {
    color: "#111b27",
    background: "#6ab3e4",
  },
  "div.code-toolbar > .toolbar button": {
    color: "#111b27",
    background: "#6ab3e4",
  },
  "div.code-toolbar > .toolbar a:hover": {
    color: "#111b27",
    background: "#6ab3e4da",
    textDecoration: "none",
  },
  "div.code-toolbar > .toolbar a:focus": {
    color: "#111b27",
    background: "#6ab3e4da",
    textDecoration: "none",
  },
  "div.code-toolbar > .toolbar button:hover": {
    color: "#111b27",
    background: "#6ab3e4da",
    textDecoration: "none",
  },
  "div.code-toolbar > .toolbar button:focus": {
    color: "#111b27",
    background: "#6ab3e4da",
    textDecoration: "none",
  },
  "div.code-toolbar > .toolbar span": {
    color: "#111b27",
    background: "#ccd6e4",
  },
  "div.code-toolbar > .toolbar span:hover": {
    color: "#111b27",
    background: "#ccd6e4",
  },
  "div.code-toolbar > .toolbar span:focus": {
    color: "#111b27",
    background: "#ccd6e4",
  },
  ".line-highlight": {
    background: "linear-gradient(to right, #ccd6e41f 70%, #ccd6e415)",
  },
  ".line-highlight:before": {
    backgroundColor: "#ccd6e4",
    color: "#111b27",
    boxShadow: "0 1px #304259",
  },
  ".line-highlight[data-end]:after": {
    backgroundColor: "#ccd6e4",
    color: "#111b27",
    boxShadow: "0 1px #304259",
  },
  "pre[id].linkable-line-numbers span.line-numbers-rows > span:hover:before": {
    backgroundColor: "#ccd6e418",
  },
  ".line-numbers .line-numbers-rows": {
    borderRight: "1px solid #0b121b",
    background: "#0b121b7a",
  },
  ".line-numbers-rows > span:before": {
    color: "#e3e9f296",
  },
  ".rainbow-braces .token.punctuation.brace-level-1": {
    color: "#cdb74a",
  },
  ".rainbow-braces .token.punctuation.brace-level-5": {
    color: "#cdb74a",
  },
  ".rainbow-braces .token.punctuation.brace-level-9": {
    color: "#cdb74a",
  },
  ".rainbow-braces .token.punctuation.brace-level-2": {
    color: "#ea89ea",
  },
  ".rainbow-braces .token.punctuation.brace-level-6": {
    color: "#ea89ea",
  },
  ".rainbow-braces .token.punctuation.brace-level-10": {
    color: "#ea89ea",
  },
  ".rainbow-braces .token.punctuation.brace-level-3": {
    color: "#6ab3e4",
  },
  ".rainbow-braces .token.punctuation.brace-level-7": {
    color: "#6ab3e4",
  },
  ".rainbow-braces .token.punctuation.brace-level-11": {
    color: "#6ab3e4",
  },
  ".rainbow-braces .token.punctuation.brace-level-4": {
    color: "#cf7ef6",
  },
  ".rainbow-braces .token.punctuation.brace-level-8": {
    color: "#cf7ef6",
  },
  ".rainbow-braces .token.punctuation.brace-level-12": {
    color: "#cf7ef6",
  },
  "pre.diff-highlight > code .token.deleted:not(.prefix)": {
    backgroundColor: "#f57a731f",
  },
  "pre > code.diff-highlight .token.deleted:not(.prefix)": {
    backgroundColor: "#f57a731f",
  },
  "pre.diff-highlight > code .token.inserted:not(.prefix)": {
    backgroundColor: "#82c3661f",
  },
  "pre > code.diff-highlight .token.inserted:not(.prefix)": {
    backgroundColor: "#82c3661f",
  },
  ".command-line-prompt": {
    borderRight: "1px solid #0b121b",
  },
  ".command-line-prompt > span:before": {
    color: "#e3e9f296",
  },
}
