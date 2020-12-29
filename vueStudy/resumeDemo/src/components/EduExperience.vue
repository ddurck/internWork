<template>
  <div class="category-box">
    <div class="title">Education</div>
    <div class="line"></div>
    <ul>
      <Exp />

    </ul>
  </div>
</template>

<script>
import Exp from './Exp';
export default {
  name: "EduExperience",
  data() {
    return {
      msg: "i am EduExperience comp",
    };
  },
  components: {
    Exp
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
$box-color:#ef0200;
ul {
  margin-block-start: .5rem;
  margin-block-end: .5rem;
}
.category-box {
  background-color: box-color;
  padding: 0.2rem 1rem;
}
.title {
  text-align: left;
}
.line {
  height: 1px;
  background-color: black;
}
.item-wrap {
  display: flex;
  justify-content: space-between;
}
input{
  background:none;  
	outline:none;  
	border:none;
  width: 40%;
  margin-bottom:.3rem;
}
ul{
  margin-left: -1rem;
}
.place, .time {
  text-align: right;
}

</style>