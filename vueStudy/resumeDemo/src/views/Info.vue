<template>
  <div class="container">
    <Header />
    <div class="sider">
      <div
        v-for="(step, index) in steps"
        :key="index"
        class="info-step"
        @click="changeStep(step)"
      >
        {{ step.name }}
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import Header from "../components/Header";

export default {
  data() {
    return {
      steps: [
        {name: "Basic Information", url:'basic_information'},
        {name: "Work Experience", url:'work_experience'},
        {name: "Education", url: 'education'},
        {name: "Certifications", url :'certifications'},
        {name: "Additional Skills", url:'additional_skills'}
      ],
      cur_step: "Basic Information",
    };
  },
  components: {
    Header,
  },
  methods:{
    changeStep(step){
      this.$router.push(`/info/${step.url}`)
    }
  }
};
</script>
<style>
.sider {
  box-sizing: border-box;
  width: 20%;
  height: 100%;
  position: absolute;
  left: 0rem;
  border: solid blue 2px;
  padding-top: 7%;
  margin-bottom: -1rem;
  /* margin-left: .1rem; */
}
.info-step {
  font-size: 1.2rem;
  text-align: left;
  padding: 1rem 0.5rem;
  /* border-left: solid blue 5px;
  background-color: rgb(210, 210, 210); */
  cursor: pointer;
}

.step {
  position: fixed;
  width: 80%;
  height: 90%;
  top: 10%;
  right: 0;
}
.title {
  font-size: 3rem;
  margin: 1rem 0rem 2rem 2rem;
  text-align: left;
}
.form {
  display: flex;
  flex-flow: column nowrap;
  text-align: left;
  margin-left: 2rem;
  width: 75%;
}
input {
  outline: none;
  border: none;
  font-size: 1.3rem;
  border-bottom: solid blue 2px;
  margin: 2rem 3rem 2rem 0rem;
  width: auto;
  flex-grow: 1;
}
button {
  background-color: blue; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1.2rem;
  position: absolute;
  right: 6rem;
}
.form-item {
  display: flex;
  flex-flow: row nowrap;
}
</style>