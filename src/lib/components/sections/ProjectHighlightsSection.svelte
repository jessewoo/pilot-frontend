<script>
  import { getImageUrl } from '$lib/utils/image.js';

  let { data } = $props();
</script>

<section class="project-highlights-section">
  <div class="container">
    {#if data.section_title}
      <h2 class="section-title">{data.section_title}</h2>
    {/if}

    <div class="projects-grid">
      {#each data.projects as project}
        <a href={project.link_url} class="project-card">
          {#if project.image}
            <div class="project-image">
              <img src={getImageUrl(project.image.url)} alt={project.image.title} width={project.image.width} height={project.image.height} />
            </div>
          {/if}
          <div class="project-content">
            <h3 class="project-title">{project.title}</h3>
            {#if project.authors}
              <p class="project-authors">{project.authors}</p>
            {/if}
            {#if project.description}
              <p class="project-description">{project.description}</p>
            {/if}
            {#if project.tags && project.tags.length > 0 && project.tags[0]}
              <div class="project-tags">
                {#each project.tags as tag}
                  {#if tag}
                    <span class="tag">{tag}</span>
                  {/if}
                {/each}
              </div>
            {/if}
            {#if project.link_text}
              <span class="project-link">{project.link_text} →</span>
            {:else}
              <span class="project-link">Learn More →</span>
            {/if}
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>

<style>
  .project-highlights-section {
    padding: 60px 20px;
    background: white;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .section-title {
    text-align: center;
    font-size: 2.5rem;
    color: #1a1a1a;
    margin-bottom: 40px;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 30px;
  }

  .project-card {
    display: block;
    background: #f8f9fa;
    border-radius: 8px;
    overflow: hidden;
    text-decoration: none;
    color: inherit;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }

  .project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 16px rgba(0,0,0,0.15);
    text-decoration: none;
  }

  .project-image {
    width: 100%;
    height: 220px;
    overflow: hidden;
    background: #e0e0e0;
  }

  .project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .project-content {
    padding: 25px;
  }

  .project-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 10px;
    line-height: 1.4;
  }

  .project-authors {
    font-size: 0.95rem;
    color: #666;
    margin-bottom: 10px;
    font-style: italic;
  }

  .project-description {
    font-size: 1rem;
    color: #555;
    line-height: 1.6;
    margin-bottom: 15px;
  }

  .project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 15px;
  }

  .tag {
    display: inline-block;
    padding: 4px 10px;
    background: #0066cc;
    color: white;
    font-size: 0.75rem;
    border-radius: 12px;
    font-weight: 500;
  }

  .project-link {
    display: inline-block;
    color: #0066cc;
    font-weight: 500;
    transition: transform 0.2s ease;
  }

  .project-card:hover .project-link {
    transform: translateX(3px);
  }

  @media (max-width: 768px) {
    .section-title {
      font-size: 2rem;
    }

    .projects-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
