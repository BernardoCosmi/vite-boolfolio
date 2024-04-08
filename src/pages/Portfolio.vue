<script>
import axios from 'axios';

import AppProject from '../components/AppProject.vue'

export default {
    name: 'Portfolio',
    components: {
    AppProject,
    },
    data() {
        return {
            currentPage: 1,
            lastPage: 1,
            arrayProjects: [],
        }
    },
    methods: {
        getProject(projectApiPage) {

            axios.get('http://127.0.0.1:8000/api/test',
                {
                    params: {
                        page: projectApiPage
                    }
                }
            )
                .then(res => {
                    console.log(res.data.projects.data)

                    this.arrayProjects = res.data.projects.data
                    this.currentPage = res.data.projects.current_page
                    this.lastPage = res.data.projects.last_page
                })

        }

    },
    mounted() {
        this.getProject(1);
    }
}
</script>

<template>

    <!-- Cards -->
    <main class="d-flex flex-column align-items-center mt-3">
        <h1>Project Cards</h1>

        <div class="container py-5">
            <div class="row justify-content-around">
                
                <AppProject v-for="(element, index) in arrayProjects" 
                :key="element.id" 
                :title="element.title" 
                :slug="element.slug" 
                :descriptions="element.descriptions" 
                :type="element.type ? element.type.name: ''" 
                :technologies="element.technologies" 
                :thumb="element.thumb"/>

            </div>
        </div>

        <nav aria-label="Page navigation example ">
            <ul class="pagination">
                <li class="page-item" :class="{ 'disabled': currentPage === 1 }">
                    <button class="page-link" @click="getProjects(currentPage - 1)">Previous</button>
                </li>

                <li class="page-item" v-for=" (element, index) in lastPage " :key="index">
                    <button class="page-link" @click="getProjects(element)">{{ element }}</button>
                </li>

                <li class="page-item" :class="{ 'disabled': currentPage === lastPage }">
                    <button class="page-link" @click="getProjects(currentPage + 1)">Next</button>
                </li>
            </ul>
        </nav>
    </main>
</template>

<style scoped></style>