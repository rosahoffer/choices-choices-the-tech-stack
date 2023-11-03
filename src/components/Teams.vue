<template>
    <div>
      <div v-for="team in teams" :key="team.id">
        <h2>{{ team.name }}</h2>
        <p>{{ team.description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        teams: [],
      };
    },
    created() {
      fetch('http://localhost:1337/teams')
        .then((response) => response.json())
        .then((data) => {
          this.teams = data;
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    },
  };
  </script>
  