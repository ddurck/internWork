<template>
  <div class="step">
    <div class="title">What additional skills would you like to display?</div>
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
      this.$router.push('/info/additional_skills')
    }
  },
};
</script>

<style scoped>

</style>
