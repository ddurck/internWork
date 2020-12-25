<template>
  <div class="one">
    <div class="page">
      <router-link v-if="page > 1" :to="'/' + type + '/' + (page - 1)">prev</router-link>
      <a v-else class="disabled">prev</a>
      <span>{{page}}/{{maxPage}}</span>
      <router-link v-if="hasMore" :to="'/' + type + '/' + (page + 1)">more</router-link>
      <a v-else class="disabled">more</a>
    </div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import listItem from "../components/listItem";
export default {
  name: "ListPage",
  components: {
    listItem,
  },

  props: {
    type: String,
  },

  data() {
    return {
      msg: "这个是listPage",
      transition: "side-right",
      displayedPage: Number(this.$route.params.page) || 1,
      // displayedItems: this.$store.getters.activeItems,
    };
  },

  computed: {
    page() {
      return Number(this.$route.params.page) || 1;
    },
    maxPage() {
      const { itemsPerPage, list } = this.$store.state;
      return Math.ceil(lists[this.type].length / itemsPerPage);
    },
    hasMore() {
      return this.page < this.maxPage;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.page {
  background-color: darkgray;
  padding: 0.5rem;
}
</style>
