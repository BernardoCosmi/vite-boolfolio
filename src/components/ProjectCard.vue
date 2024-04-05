<script>
import axios from 'axios';

export default {
  name: 'ProjectCard',
  data() {
    return {
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
  <main class="d-flex flex-column align-items-center">
    <h1>Project Cards</h1>

    <div class="container py-5">
      <div class="row justify-content-around">
        <div class="col-md-4" v-for="(element,index) in arrayProjects" :key="element.id">
          <div class="card">
            <img :src="'http://127.0.0.1:8000/storage/'+element['thumb']" class="card-img-top" :alt="element.title">
            <div class="card-body">
              <h5 class="card-title">{{ element.title }}</h5>
              <p class="card-text"><strong>Type: </strong> 
                {{ element.type_id }}</p>
              <p class="card-text"><strong>Technology: </strong> 
                <span v-for="technology in element.technologies" :key="technology.id">
                  {{ technology.name }}<span v-if="!$last">, </span>
                </span>
              </p>

              <p class="card-text">{{ element.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <nav aria-label="Page navigation example ">
      <ul class="pagination">
        <li class="page-item" :class=" { 'disabled': currentPage === 1 } ">
          <button class="page-link" @click="getProjects( currentPage - 1 )">Previous</button>
        </li>

        <li class="page-item" v-for=" (element,index) in lastPage " :key="index">
          <button class="page-link" @click="getProjects( element )">{{ element }}</button>
        </li>

        <li class="page-item" :class=" { 'disabled': currentPage === lastPage } " >
          <button class="page-link" @click="getProjects( currentPage + 1 )">Next</button>
        </li>
      </ul>
    </nav>
  </main>
</template>

<style scoped></style>
