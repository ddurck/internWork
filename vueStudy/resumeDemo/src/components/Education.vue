<template>
  <div class="step">
    <div class="title">Education</div>
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
      // window.history.push
      this.$router.push('/info/certifications')
    }
  },
};
</script>

<style scoped>

</style>
