<template>
    
    <div class="card col-12 mb-4" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">{{post.title}}</h5>
            <p class="card-text">{{cutText(post.content, 150)}}</p>
            <p class="card-text">{{post.category?post.category.name:'-'}}</p>
            <router-link :to="{name: 'single-post', params: {slug: post.slug} }" class="btn btn-primary">Read more...</router-link>
        </div>
    </div> 
    
</template>

<script>
export default {
    name: 'MyPost',
    props:['post'],
    methods:{
        //accorciare il testo 
        cutText(text, maxLength){
            if (text.length < maxLength){
            return text;
            } else {
            return text.substring(0, maxLength) + '...';
            }
        }

    }
}
</script>

<style>

</style>