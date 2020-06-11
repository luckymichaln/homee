<template>
  <div class="blog-post-card">
    <header class="card-header">
      <prismic-rich-text
        class="heading-primary"
        :field="post.data.post_title"
      />
      <div class="card-meta">
        <div class="card-meta__avatar">
          <span>
            <img src="~static/favicon.svg" alt="Homee waw icon" />
          </span>
          Homee
        </div>
        <span class="card-meta__date">{{ $moment(post.first_publication_date).format('LL') }}</span>
      </div>
    </header>
    <nuxt-link
      :to="`blog/${post.uid}`"
    >
      <div class="card-image">
        <img :src="post.data.post_hero_image.url" :alt="post.data.post_hero_image.alt" />
      </div>
      <div class="card-desc">
        <span class="text">{{ postShortText }}</span>
        <prismic-rich-text
          ref="postText"
          :field="post.data.post_text"
          class="text"
        />
      </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      default: () => {}
    }
  },

  data() {
    return {
      postShortText: null,
    }
  },

  methods: {
    stringChop(str, size) {
      if (str == null) return [];
      str = String(str);
      size = ~~size;
      return size > 0 ? str.match(new RegExp('.{1,' + size + '}', 'g')) : [str];
    }
  },

  mounted () {
    this.postShortText = this.stringChop(this.$refs.postText.innerText, 350)[0] + '...';
    this.$refs.postText.remove();
  }
}
</script>
