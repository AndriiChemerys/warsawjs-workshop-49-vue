<template>
  <div id="app">
    <h1>
      {{title}}
    </h1>

    <div v-for="post in posts">
      <h2>{{post.title}} by {{post.author}}.</h2>
      <p>{{post.text}}</p>
      <p>{{post.data}}</p>
    </div>

  </div>
</template>

<script>

const API_URL="https://sheets.googleapis.com/v4/spreadsheets/1qHcnrzbNZ1XHs85IfPeZWoLpZuwWp5nWGadjFFRpE3s/values/vue?key=AIzaSyAtgGjAz3Vk3wFJmoRPYuuRCEwRZpeFy0g"

export default {

  created(){
    fetch('https://sheets.googleapis.com/v4/spreadsheets/1qHcnrzbNZ1XHs85IfPeZWoLpZuwWp5nWGadjFFRpE3s/values/vue?key=AIzaSyAtgGjAz3Vk3wFJmoRPYuuRCEwRZpeFy0g')
    .then(res=>res.json())
    .then(res=>{
      let {values} = res;
      console.log(res)
      let posts = [];
      values.map(v=>{
        posts.push({
          data: v[0],
          title: v[1],
          author: v[2],
          text: v[3]
        })
      })
      this.posts=posts;
      console.log(this.posts)
    }).catch(err=>console.error(err))
  },
  data(){
    return {
      title: 'WarsawJS',

      posts: [],

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
