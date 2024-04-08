<script>

import axios from 'axios'
import {store} from '../store.js'

export default {
    name: 'SingleProject',
  components: {


  },
  data(){
      return{
        project: [],
        store
      }
    },
    methods: {
        getSingleProject(){
            axios.get(`${store.apiBaseUrl}/api/test/${this.$route.params.slug}`)
            .then( res =>{
                if(res.data.success){
                    this.project = res.data.project
                }else{

                }
            })
        }
    },
    mounted() {
        this.getSingleProject()
    }
  }

</script>

<template>
<div class="row justify-content-center my-5">
    <div class="card col-6">

        <img :src="`${store.apiBaseUrl}/storage/${project.thumb}`" class=" col-8 mx-auto my-2 rounded" :alt="title">

        <div class="card-body ">

            <h5 class="text-center">{{ project.title }}</h5>

            <p class="card-text">
                <strong>Type: </strong>
                {{ project.type?.name }}
            </p>

            <p class="card-text"><strong>Technology: </strong>
                <span v-for="(element, index) in project.technologies" :key="index">
                     {{ element.name }}<span v-if="!$last">, </span> 
                </span>
            </p>

            <p class="card-text">
                <strong>Description: </strong>
                {{ project.descriptions }}
            </p>


        </div>

    </div>
</div>
</template>

<style scoped>

</style>
