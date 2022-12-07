<script>
export default {
  name: "CardPlayer",
  props: ["dataPlayers"],
};
</script>

<template>
  <div class="col-sm-2 mb-5">
    <div class="card">
      <div class="card-body">
        <h4 class="card-text">{{dataPlayers.first_name}} {{dataPlayers.last_name}}</h4>
        <p class="card-text">Position {{dataPlayers.position}}</p>
        <p class="card-text">Team: {{dataPlayers.team.full_name}}</p>
        <p class="card-text">Conference: {{dataPlayers.team.conference}} </p>
        <p class="card-text">Division: {{dataPlayers.team.division}}</p>
      </div>
    </div>
  </div>
</template>
