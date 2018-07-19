import React from "react"

export default ({ data }) => {
  const blogPost = data.cms.blogPost
  return (
    <div>
      <h1>{blogPost.title}</h1>
      <div>Posted at: {blogPost.createdAt}</div>
      <div>{blogPost.post}</div>
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
