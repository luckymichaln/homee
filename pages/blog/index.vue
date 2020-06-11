<template>
  <blogPage :pageData="posts" />
</template>

<script>
import { mapGetters } from 'vuex';
import blogPage from '~/components/page-content/blog-page';

export default {
  async fetch ({ store }) {
    if (!store.getters['blog/posts'].length) {
      await store.dispatch('blog/GET_ALL_POSTS')
    }
  },

  computed: {
    ...mapGetters('blog', ['posts']),
  },

  mounted () {
    console.log(this.posts, '/blog')
  },

  components: {
    blogPage
  }
}
</script>

<style>

</style>