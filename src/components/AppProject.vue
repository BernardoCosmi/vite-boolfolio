<script>


export default {
    name: 'AppProject',
    props: ['title', 'slug', 'descriptions', 'type', 'technologies', 'thumb'],

    components: {


    },
    data() {
        return {

        }
    },
    methods: {

    },
    mounted() {

    }
}

</script>

<template>

    <div class="col-md-4">
            <router-link class="card-title text-decoration-none" :to="{ name: 'single-project', params: { slug: slug } }">
            
            <div class="card">

                <img :src="`http://127.0.0.1:8000/storage/${thumb}`" class="card-img-top" :alt="title">

                <div class="card-body ">

                    <h5 class="text-center">{{ title }}</h5>

                </div>

            </div>

        </router-link>

        
    </div>

</template>

<style scoped></style>