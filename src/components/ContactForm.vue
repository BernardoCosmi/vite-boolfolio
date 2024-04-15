<script>
import {store} from '../store.js'
import axios from 'axios'

export default {
    name: 'ContactForm',

    components: {


    },
    data() {
        return {
            store,
            name:'', 
            email:'',
            message:'',
            errrors:{},
            success: false,
        }
    },
    methods: {
        sendForm(){

            const data={
                name: this.name,
                email: this.email,
                message: this.message,
            }

            this.errors = {};

            axios.post(`${this.store.apiBaseUrl}/api/contacts`, data)
            .then(res=>{

                this.success = res.data.success;

                if(!this.success){
                    this.errors = res.data.errors
                }else{
                    this.name = ''
                    this.email = ''
                    this.message = ''

                }
            })
        }
    },
    mounted() {

    }
}

</script>

<template>
    <div class="container text-center">
        <h2>Contact Form</h2>

        <div class="alert alert-success" v-if="success" role="alert">
            Messaggio inviato
        </div>

        <div>
            <form @submit.prevent="sendForm()">
                <div class="mb-3">
                    <input 
                    type="text" 
                    class="form-control" 
                    :class="{'is-invalid':errors?.name}" 
                    name="name" 
                    placeholder="Nome" 
                    v-model="name">

                    <p v-for="(error, index) in error?.name" 
                    :key='`message-errors-${index}`' 
                    class="invalid-feedback">
                    {{  error }}
                    </p>
                </div>

                <div class="mb-3">
                    <input 
                    type="text" 
                    class="form-control" 
                    :class="{'is-invalid':errors?.email}" 
                    name="email" 
                    placeholder="Email" 
                    v-model="email">

                    <p v-for="(error, index) in error?.email" 
                    :key='`message-errors-${index}`' 
                    class="invalid-feedback">
                    {{  error }}
                    </p>
                </div>

                <div class="mb-3">
                    <textarea 
                    class="form-control"
                    :class="{'is-invalid':errors?.message}" 
                    name="message" 
                    id="message" 
                    cols="30" 
                    rows="10"
                    v-model="message"></textarea>

                    <p v-for="(error, index) in error?.message" 
                    :key='`message-errors-${index}`' 
                    class="invalid-feedback">
                    {{  error }}
                    </p>
                </div>

                <button class="btn btn-primary" type="submit">Send</button>
            </form>
        </div>
    </div>

</template>

<style scoped>
</style>