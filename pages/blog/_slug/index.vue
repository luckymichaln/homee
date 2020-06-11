<template>
  <singlePost :post="singlePost" />
</template>

<script>
import { mapGetters } from 'vuex';
import singlePost from '~/components/blog/single-post';

export default {
  async fetch ({ store, route }) {
    if (!store.getters['blog/singlePost'] || store.getters['blog/singlePost'].uid !== route.params.slug) {
      await store.dispatch('blog/GET_SINGLE_POST', { uid: route.params.slug })
    }
  },

  computed: {
    ...mapGetters('blog', ['posts', 'singlePost']),
  },

  components: {
    singlePost
  }
}
</script>
