<script>
  let { page } = $props();
</script>

{#if page}
  <div class="wrap">
    <div class="home-head">
        <div class="real-hero">
        <h1>
          <strong>{page.hero_title}</strong>
        </h1>
        <section class="about">
          <div class="inner">
            <div class="intro" style="font-size: 1.25rem">
              {page.hero_subtitle}
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
  <article class="home-page">
    <div class="container">
      <h1>{page.title}</h1>

      {#if page.body}
        <div class="content">
          {@html page.body}
        </div>
      {/if}

      {#if page.content}
        <div class="content">
          {@html page.content}
        </div>
      {/if}
    </div>
  </article>
  
{:else}
  <div class="container">
    <h1>Welcome</h1>
    <p>Loading homepage content...</p>
  </div>
{/if}
