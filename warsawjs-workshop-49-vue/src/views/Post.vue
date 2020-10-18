<template>
    <div>
        <div v-for="post in posts">
            <h2>{{post.title}} by {{post.author}}.</h2>
            <p>{{post.text}}</p>
            <p>{{post.data}}</p>
        </div>
    </div>
</template>

<script>
export default {
    created(){
        console.log(this)
        const {postId} = this.$route.params
        console.log(postId)
        // fetch('https://sheets.googleapis.com/v4/spreadsheets/1qHcnrzbNZ1XHs85IfPeZWoLpZuwWp5nWGadjFFRpE3s/values/vue?key=AIzaSyAtgGjAz3Vk3wFJmoRPYuuRCEwRZpeFy0g')
        fetch(`https://sheets.googleapis.com/v4/spreadsheets/1qHcnrzbNZ1XHs85IfPeZWoLpZuwWp5nWGadjFFRpE3s/values/vue!A${ postId }:D${ postId }?key=AIzaSyAtgGjAz3Vk3wFJmoRPYuuRCEwRZpeFy0g`)
        .then(res=>res.json())
        .then(res=>{
        let {values} = res;
        console.log(res)
        let posts = [];
        values.map((v,i)=>{
            posts.push({
            data: v[0],
            title: v[1],
            author: v[2],
            text: v[3],
            link: `/post/${i+1}`
            })
        })
        this.posts=posts;
        console.log(this.posts)
        }).catch(err=>console.error(err))
  },
  data(){
    return {
      title: 'WarsawJS',

      posts: null,
    }
  }
}
</script>

<style>

</style>
