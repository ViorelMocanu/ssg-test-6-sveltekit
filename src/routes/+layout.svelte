<script>
import Header from '$lib/components/Header.svelte'
import { fade } from 'svelte/transition'
import '$lib/resources/style.scss'
export let data;
</script>

<Header />

{#key data.currentRoute}
  <main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
    <slot />
  </main>
{/key}

<footer>Hello, I'm the footer.</footer>