<script>
export let data;
const { title, posts } = data;
</script>

<h1>Categoria {title}</h1>
  
<ul>
  {#each posts as post}
    <li>
      <h2>
        <a href={post.path}>
          {post.meta.title}
        </a>
      </h2>
      Published {post.meta.date}
    </li>
  {/each}
</ul>