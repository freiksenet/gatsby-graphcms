import React from "react"
import ReactMarkdown from "react-markdown"

export default ({ data }) => {
  const blogPost = data.cms.blogPost
  return (
    <div>
      <h1>{blogPost.title}</h1>
      <div>Posted at: {blogPost.createdAt}</div>
      <ReactMarkdown source={blogPost.post} />
    </div>
  )
}

export const query = graphql`
  query($blogId: ID!) {
    cms {
      blogPost(where: { id: $blogId }) {
        title
        createdAt
        post
      }
    }
  }
`
