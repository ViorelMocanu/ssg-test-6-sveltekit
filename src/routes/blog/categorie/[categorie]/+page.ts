export const load = async ({ fetch, params }) => {
	const { categorie } = params
	const response = await fetch(`/api/posts`)
	const allPosts = await response.json()

	const posts = allPosts
		.filter(post => post.meta.categories.includes(categorie))

	return {
		categorie,
		posts
	}
}