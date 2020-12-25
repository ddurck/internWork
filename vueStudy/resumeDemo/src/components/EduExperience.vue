<template>
  <div class="category-box">
    <div class="title">Education</div>
    <div class="line"></div>
    <ul>
      <li class="info-item">
        <div class="item-wrap">
          <div class="institution">xx大学</div>
          <div class="place">hunan china</div>
        </div>
        <div class="item-wrap">
          <div class="degree">xx学位</div>
          <div class="time">2020/6-2020/10</div>
        </div>
        1111
      </li>
      <li class="info-item">
        <div class="item-wrap">
          <div class="institution">xx大学</div>
          <div class="place">hunan china</div>
        </div>
        <div class="item-wrap">
          <div class="degree">xx学位</div>
          <div class="time">2020/6-2020/10</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "EduExperience",
  data() {
    return {
      msg: "i am EduExperience comp",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  margin-block-start: .5em;
  margin-block-end: .5em;
}
.category-box {
  background-color: darkgray;
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

.institution,
.place,
.time,
.degree {
  display: inline-block;
}
</style>