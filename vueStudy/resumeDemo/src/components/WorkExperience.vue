<template>
  <div class="step">
    <div class="title">Work Experience</div>
    <div class="form">
    </div>
    <button @click="nextStep()">Continue>>></button>
  </div>
</template>

<script>
export default {
  name: "WorkExperience",
  data() {
    return {
    };
  },
  methods: {
    nextStep(){
      this.$router.push('/info/education')
    }
  },
};
</script>

<style scoped>

</style>
