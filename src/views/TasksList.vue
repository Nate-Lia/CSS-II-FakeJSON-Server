<template>
  <div class="card" style="width: 24rem';">
    <div class="card-header">
      Tasks
    </div>
    <task-card v-for="task in tasks" :key="task.id" :task="task"></task-card>
  </div>
</template>

<script>
// @ is an alias to /src
import TaskCard from "@/components/TaskCard.vue";

export default {
  name: "TasksList",
  components: {
    TaskCard
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.home {
  border: 1px solid green;
  width: 90%;
  margin: auto;
}
</style>
