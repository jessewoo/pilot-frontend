<script>
  let { data } = $props();
</script>

<section class="stats-section">
  <div class="container">
    {#if data.title}
      <h2 class="section-title">{data.title}</h2>
    {/if}

    <div class="stats-grid">
      {#each data.stats as stat}
        <div class="stat-card">
          <div class="stat-number">{stat.number}</div>
          <div class="stat-label">{stat.label}</div>
          {#if stat.description}
            <p class="stat-description">{stat.description}</p>
          {/if}
          {#if stat.cta_text && stat.cta_link}
            <a href={stat.cta_link} class="stat-cta">{stat.cta_text}</a>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>

<style>
  .stats-section {
    padding: 60px 20px;
    background: #f8f9fa;
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

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
  }

  .stat-card {
    background: white;
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    text-align: center;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .stat-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 16px rgba(0,0,0,0.15);
  }

  .stat-number {
    font-size: 3rem;
    font-weight: 700;
    color: #0066cc;
    margin-bottom: 10px;
  }

  .stat-label {
    font-size: 1.1rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 10px;
    line-height: 1.4;
  }

  .stat-description {
    font-size: 0.95rem;
    color: #666;
    margin-bottom: 15px;
  }

  .stat-cta {
    display: inline-block;
    margin-top: 15px;
    padding: 10px 20px;
    background: #0066cc;
    color: white;
    border-radius: 5px;
    font-weight: 500;
    text-decoration: none;
    transition: background 0.2s ease;
  }

  .stat-cta:hover {
    background: #0052a3;
    text-decoration: none;
  }

  @media (max-width: 768px) {
    .section-title {
      font-size: 2rem;
    }

    .stats-grid {
      grid-template-columns: 1fr;
    }

    .stat-number {
      font-size: 2.5rem;
    }
  }
</style>
