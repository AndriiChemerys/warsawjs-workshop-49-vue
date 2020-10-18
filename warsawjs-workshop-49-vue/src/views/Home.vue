<template>
  <div id="app">
    <h1>
      {{title}}
    </h1>

    <div v-for="post in posts">
      <h2>{{post.title}} by {{post.author}}.</h2>
      <p>{{post.text}}</p>
      <router-link :to="post.link">Czytaj dalej</router-link>
      <p>{{post.data}}</p>
    </div>

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  computed: mapState('blog', [ 'posts', 'title' ]),
  methods: mapActions('blog', [ 'getPosts' ]),
  created() {
    this.getPosts();
  },
}
</script>

<style>

</style>
