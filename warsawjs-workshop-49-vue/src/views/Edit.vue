<template>
  <div>
    {{ title }}
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default {
  created() {
    console.log(this.title)
    console.log(this.getTitle)
    this.getTitle();
  },
  // data
  computed: mapState('blog', [ 'title' ]),
  // this.getTitle()
  // methods: mapActions('blog', [ 'getTitle' ]),
}
</script>