<script>
export default {
  name: "CardMatch",
  props: ["dataMatch"]
};
</script>

<template>
  <div class="col-sm-6 mb-5">
    <div class="card">
      <div class="card-body" style="text-align: center;">
        <h3 class="card-text">{{dataMatch.status}}</h3>
        <h4 class="card-text">{{dataMatch.home_team.full_name}} VS {{dataMatch.visitor_team.full_name}}</h4>
        <h4 class="card-text">Score: {{dataMatch.home_team_score}} : {{dataMatch.visitor_team_score}}</h4>
        <h4 class="card-text">Location: {{dataMatch.home_team.city}}</h4>
      </div>
    </div>
  </div>
</template>