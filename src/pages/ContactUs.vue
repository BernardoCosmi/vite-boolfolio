<script>
import ContactForm from '../components/ContactForm.vue';
import axios from 'axios'

export default {
    name: 'ContactUs',
  components: {
    ContactForm

  },
  data(){
      return{

      }
    },
    methods: {

    },
    mounted() {

    }
  }

</script>

<template>

<div class="container">
    <div class="row">
        <div class="col-12">

            <ContactForm/>

        </div>

    </div>

</div>

</template>

<style scoped>

</style>