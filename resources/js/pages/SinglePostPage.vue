<template>

    <h1>Pagina del Single Post</h1>
  
</template>

<script>
export default {
    name: 'SinglePost',
    methods:{
        getSinglePost(){

            const slug = this.$route.params.slug;
            axios.get('/posts/'+ slug)
            .then((response) => {
                console.log(response);
            });
             
        }
    },
    mounted() {
        this.getSinglePost();
    }


}
</script>

<style>

</style>