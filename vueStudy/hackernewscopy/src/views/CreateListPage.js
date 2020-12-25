import ListPage from "@/views/ListPage";

//转为驼峰命名，把第一个变为大写
const camelize = str => str.charAt(0).toUpperCase() + str.slice(1)

export default function CreateListPage (type) {
  return {
    name: `${type}-stories-view`,

    asyncData ({ store }) {
      return store.dispatch('FETCH_LIST_DATA', { type })
    },

    title: camelize(type),

    render (h) {
      return h(ListPage, {props : {type}})
    }
  }
}