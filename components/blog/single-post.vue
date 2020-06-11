<template>
  <div class="blog-post-single">
    <div class="container--wide">
      <header class="post-header">
        <div class="post-header__image">
          <img :src="post.data.post_hero_image.url" :alt="post.data.post_hero_image.alt" />
        </div>
      </header>
      <div class="container--blog-post">
        <div class="post-header__meta">
          <div class="card-meta__avatar">
            <span class="avatar">
              <img src="~static/favicon.svg" alt="Homee waw icon" />
            </span>
            Homee
          </div>
          <span class="card-meta__date">{{ $moment(post.first_publication_date).format('LL') }}</span>
        </div>
        <main class="blog-post-single__main">
          <prismic-rich-text
            class="heading-primary"
            :field="post.data.post_title"
          />

          <prismic-rich-text
            class="text"
            :field="post.data.post_text"
          />
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
