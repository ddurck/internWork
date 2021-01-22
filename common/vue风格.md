## Vue风格

#### 优先级别A：必要的

* 组件名应该始终是多个单词的，根组件 `App` 以及 `<transition>`、`<component>` 之类的 Vue 内置组件除外。

  这样做可以避免跟现有的以及未来的 HTML 元素[相冲突](http://w3c.github.io/webcomponents/spec/custom/#valid-custom-element-name)，因为所有的 HTML 元素名称都是单个单词的。

* Prop 定义应尽量详细

  prop 的定义应该尽量详细，至少需要指定其类型。

* v-for设置key值

  有利于diff算法的判断（对象的固化）

* 避免v-if和v-for一起使用

* 为样式组件设置作用域

  ```html
  使用 `scoped` attribute
  使用 CSS modules   `<style module>`
  使用 BEM 约定   
  ```

#### 优先级别B：强烈推荐（增强代码可读性）

* 组件文件

* 单文件组件的文件名应该要么始终是单词大写开头 (PascalCase)，要么始终是横线连接 (kebab-case)。

  单词大写开头对于代码编辑器的自动补全最为友好，因为这使得我们在 JS(X) 和模板中引用组件的方式尽可能的一致。然而，混用文件命名方式有的时候会导致大小写不敏感的文件系统的问题，这也是横线连接命名同样完全可取的原因。

* 应用特定样式和约定的基础组件 (也就是展示类的、无逻辑的或无状态的组件) 应该全部以一个特定的前缀开头，比如 `Base`、`App` 或 `V`。如:

  ```text
  components/
  |- AppButton.vue
  |- AppTable.vue
  |- AppIcon.vue
  ```

* 只应该拥有单个活跃实例的组件应该以 `The` 前缀命名，以示其唯一性。如:

  ```text
  components/
  |- TheHeading.vue
  |- TheSidebar.vue
  ```

* 和父组件紧密耦合的子组件应该以父组件名作为前缀命名。

  ```text
  components/
  |- TodoList.vue
  |- TodoListItem.vue
  |- TodoListItemButton.vue
  ```

* 组件名称应该以高阶的 (通常是一般化描述的) 单词开头，以描述性的修饰词结尾。(名词+动名词)

  ```text
  components/
  |- SearchButtonClear.vue
  |- SearchButtonRun.vue
  |- SearchInputQuery.vue
  |- SearchInputExcludeGlob.vue
  |- SettingsCheckboxTerms.vue
  |- SettingsCheckboxLaunchOnStartup.vue
  ```

* 在单文件组件、字符串模板和JSX中没有内容的组件应该是自闭合的——但在 DOM 模板里永远不要这样做。

* 对于绝大多数项目来说，在单文件组件和字符串模板中组件名称应该总是 PascalCase 的——但是在 DOM 模板中总是 kebab-case 的。

* JS/JSX中的组件名应该始终是 PascalCase 的

* 组件名称应该倾向于完整单词而不是缩写。

* 在声明 prop 的时候，其命名应该始终使用 camelCase，而在模板和 JSX中应该始终使用 kebab-case。

* 多个 attribute 的元素应该分多行撰写，每个 attribute 一行。

* 组件模板应该只包含简单的表达式，复杂的表达式则应该重构为计算属性或方法。

* 应该把复杂计算属性分割为尽可能多的更简单的 property。（纯函数式）

  ```js
  computed: {
    basePrice() {
      return this.manufactureCost / (1 - this.profitMargin)
    },
  
    discount() {
      return this.basePrice * (this.discountPercent || 0)
    },
  
    finalPrice() {
      return this.basePrice - this.discount
    }
  }
  ```

* 指令缩写 (用 `:` 表示 `v-bind:`，`@` 表示 `v-on:` 和用 `#` 表示 `v-slot`) 应该要么都用要么都不用。

#### 优先级别C：推荐 (将选择和认知成本最小化)

* 组件/实例顺序
* 元素attribute顺序

