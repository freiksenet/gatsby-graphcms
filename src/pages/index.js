import React from "react"
import { makeBlogPath } from "../utils"

export default ({ data }) => (
  <div>
    <h1>My Gatsby Blog</h1>
    {data.cms.blogPosts.map((blog, i) => (
      <a key={i} href={makeBlogPath(blog)}>
        <h2>
          {blog.createdAt} - {blog.title}
        </h2>
      </a>
    ))}
  </div>
)

export const query = graphql`
  query {
    cms {
      blogPosts(where: { status: PUBLISHED }) {
        title
        createdAt
        slug
      }
    }
  }
`
