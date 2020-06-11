<template>
  <div class="blog-page container">
    <blogPostCard
      v-for="post in pageData"
      :key="post.id"
      :post="post"
    />
  </div>
</template>

<script>
import blogPostCard from '~/components/blog/blog-post-card';

export default {
  props: {
    pageData: {
      type: Array,
      default: () => []
    }
  },

  components: {
    blogPostCard
  }
}
</script>
