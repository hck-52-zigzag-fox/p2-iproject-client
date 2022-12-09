<script>
export default {
  name: "CardTeam",
  props: ["dataTeams"]
};
</script>

<template>
  <div class="col-sm-4 mb-5">
    <div class="card">
      <div class="card-body" style="text-align: center;">
        <h3 class="card-text">{{dataTeams.full_name}}</h3>
        <p class="card-text">Name: {{dataTeams.name}}</p>
        <p class="card-text">City: {{dataTeams.city}}</p>
        <p class="card-text">Conference: {{dataTeams.conference}}</p>
        <p class="card-text">Division: {{dataTeams.division}}</p>
      </div>
    </div>
  </div>
</template>
