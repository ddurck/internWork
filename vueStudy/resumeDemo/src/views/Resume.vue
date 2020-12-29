<template>
<div class="paper">
<BasicInformation></BasicInformation>
<EduExperience></EduExperience>
</div>
</template>

<script>
// import Comp from '../components/index'
// import BasicInformation from '../components/BasicInformation'
// import EduExperience from '../components/EduExperience'
// import Others from '../components/Others'
// import Project from '../components/Project'
// import Skills from '../components/Skills'

export default {
  name: 'Resume',
  data () {
    return {
      msg: 'resume'
    }
  },
  components:{
    // BasicInformation,
    // EduExperience,
    // Others,
    // Project,
    // Skills,
    // Project
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.paper{
  position: relative;
  color: black;
  width: 735px;
  height: 1039.5px;
  margin: 0 auto;
  border:solid black;
  font-size: 1rem;
}
</style>
