<template>
  <div>这是一个post item</div>
</template>

<script>
import {timeAgo} from '../util/filters'
export default {
  name:'posts-item',
  props: ['item'],
  // http://ssr.vuejs.org/en/caching.html#component-level-caching
  serverCacheKey: ({ item: { id, __lastUpdated, time }}) => {
    return `${id}::${__lastUpdated}::${timeAgo(time)}`
  }
}
</script>