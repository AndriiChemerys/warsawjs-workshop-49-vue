<template>
  <div id="app">
    <h1>
      {{title}}
    </h1>

    <div v-for="article in articles">
      <h2>{{article.title}} by {{article.author}}.</h2>
      <p>{{article.text}}</p>
      <p>{{article.data}}</p>
    </div>

  </div>
</template>

<script>

export default {
  created(){
    console.log('created')
  },
  data(){
    return {
      title: 'WarsawJS',

      person: {
        data: {
          name: 'Janek'
        }
      },

      articles: [{
        data: '12-12-2020',
        title: 'The Success Principles',
        author: 'Jack Canfield',
        text: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour'
      },
      {
        data: '11-11-2020',
        title: 'The Only Skill That Matters',
        author: 'Jonathan A.',
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using'
      },
      {
        data: '10-10-2020',
        title: 'Think and Grow Rich',
        author: 'Napoleon Hill ',
        text: 'The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using'
      },]

    }
  }
}
</script>

<style>

</style>
