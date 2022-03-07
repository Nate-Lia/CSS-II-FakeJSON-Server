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
    return {
      tasks: [
        {
          id: 1,
          title: "Task 1",
          description: "Description for Task 1",
          location: "Valletta",
          date: "1st of Jan",
          time: "12:00"
        },
        {
          id: 2,
          title: "Task 2",
          description: "Description for Task 2",
          location: "Valletta",
          date: "1st of Jan",
          time: "12:00"
        },
        {
          id: 3,
          title: "Task 3",
          description: "Description for Task 3",
          location: "Valletta",
          date: "1st of Jan",
          time: "12:00"
        }
      ]
    };
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
