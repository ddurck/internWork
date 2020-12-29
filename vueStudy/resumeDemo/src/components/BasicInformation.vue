<template>
  <div class="step">
    <div class="title">What's your basic information?</div>
    <div class="form">
      <div class="form-item">
        <input placeholder="First Name" v-model="basicInformation.firstName" />
        <input placeholder="Last Name" v-model="basicInformation.lastName" />
      </div>
      <div class="form-item">
        <input placeholder="Email" v-model="basicInformation.email" />
      </div>
      <div class="form-item">
        <input placeholder="Phone" v-model="basicInformation.phone" />
      </div>
      <div class="form-item">
        <input placeholder="Address" v-model="basicInformation.address" />
      </div>
      <div class="form-item">
        <input placeholder="Country" v-model="basicInformation.country" />
        <input placeholder="Province" v-model="basicInformation.province" />
        <input placeholder="City" v-model="basicInformation.city" />
      </div>
    </div>
    <button @click="nextStep()">Continue>>></button>
  </div>
</template>

<script>
export default {
  name: "BasicInformation",
  data() {
    return {
      basicInformation: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        country: "",
        city: "",
        province: "",
      },
    };
  },
  methods: {
    nextStep(){
      this.$router.push('/info/work_experience')
    }
  },
};
</script>

<style scoped>

</style>
