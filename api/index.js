import matter from 'gray-matter'

export async function getAlllPosts() {
	const context = require.context('../posts', false, /\.md$/)
	const posts = []

	for (const key of context.keys()) {
	  const post = key.slice(2);
	  const content = await.import(`../posts/${post}`);
	  const meta = matter(content.default);
	  posts.push({
		slug: post.replace('.md',''),
		title: meta.data.title
	  })
	}
	return posts;
}
