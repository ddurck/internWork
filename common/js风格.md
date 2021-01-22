### js:

https://lin-123.github.io/javascript/

#### Types：

#### References

* 不改初始值:const , 需要重新赋值：let()

* let 块级作用域   var函数级作用域

#### Objects

* 使用字面值创建对象  const item = {}

* 对象的方法简写

* 属性值缩写，并且将缩写放在对象声明的开始

* 去掉属性名的' '

* 不要直接调用`Object.prototype`上的方法，如`hasOwnProperty`, `propertyIsEnumerable`, `isPrototypeOf`。
  Why? 在一些有问题的对象上， 这些方法可能会被屏蔽掉 - 如：`{ hasOwnProperty: false }` - 或这是一个空对象`Object.create(null)`

  ```
  // bad
  console.log(object.hasOwnProperty(key));
  
  // good
  console.log(Object.prototype.hasOwnProperty.call(object, key));
  
  // best
  const has = Object.prototype.hasOwnProperty; // 在模块作用内做一次缓存
  /* or */
  import has from 'has'; // https://www.npmjs.com/package/has
  // ...
  console.log(has.call(object, key));
  ```

  

* 对象浅拷贝用...而不是object.assign

#### Arrays

* 字面量赋值  const items = []
* push添加新值
* 用扩展运算符做浅拷贝（不用循环）
* 用...将可迭代对象转化为数组
* 用Array.from将类数组（有lehgth和012..）转化为数组（不用Array.prototype.slice.call(arrLike)）
* 数组方法的回调函数--return语句

#### Destructuring解构

* 用对象的解构来获取和使用对象某个或多个属性值（不必创建临时的引用）
* 多个返回值使用对象结构而不是数组解构（对象解构可以改变回调的顺序和数量）

#### Strings

* 单引号
* 不换行
* 字符串模板``

#### Functions

* 声明：函数表达式：const func = function() {}
* 立即执行函数IIFE用括号括起来
* 不要在非函数块（if，while等）内声明函数
* 不用arguments命名参数（用...args）
* 不要对传进来的参数重新赋值,不要改参数
* 把默认参数赋值放在参数的最后面
* 空格风格问题 function () {}
* 用...去调用多变的函数

#### Arrow Functions

* return 函数时用箭头函数
* 函数体是无副作用的表达式语句（只有一句话）：删除大括号和return，否则要用大括号和return语句
* 表达式很长，设计多行，将它包含在圆括号里面
* 函数只有一个参数并且函数体没大括号，就不要圆括号

#### Classes & Constructors

* 用class少用prototype
* extends实现继承
* 空的constructor不用写
* 避免重复类成员

#### Modules

* 用import/export
* 尽量少用import通配符
* 不要直接从wxport里import
* 一个路径只import一次（一次就把同个文件里要导入的导完）
* 导出不可变的东西（const）
* 单一文件单一导出（一个文件做一件事）
* import语句放在最开始，中间不要加其他别的处理
* 多行import，缩进

#### Iterators and Generators

* 不要用遍历器，用JavaScript高级函数代替for-in, for-of,

  Why? 这强调了我们不可变的规则。 处理返回值的纯函数比副作用更容易。

  Why? 用数组的这些迭代方法： `map()` / `every()` / `filter()` / `find()` / `findIndex()` / `reduce()` / `some()` / … , 用对象的这些方法 `Object.keys()` / `Object.values()` / `Object.entries()` 去产生一个数组， 这样你就能去遍历对象了。

* 不要用generator（）es5支持的不好

* 用generator的时候： function* () { }

#### Properties

* 访问属性用.
* 属性是变量用[]
* 幂运算用`**` `(2**10)`，不用`Math.pow(2, 10)`

#### Variables

* const let 
* let放一起，const放一起
* 不要使用链接变量分配
* 少用++ --

#### Hoisting

* var和未命名函数：函数提升  ，着声明之前undefined但是不会报错
* lethe const 会报错
* 已命名函数表达式提升他的变量名，不是函数名或函数体

#### Comparison Operators & Equality

* ===代替== ==！代替！=

* object-true

* undefined-false

* null-false

* boolean-看情况

* numbers--- +0 -0 NaN是false，其他true

* string---  ‘ ’为false，其他true

* if判断时 bool用缩写，字符串和数字要明确比较对象

  ```
  // good
  if (isValid) {
    // ...
  }
  
  // good
  if (name !== '') {
    // ...
  }
  
  // good
  if (collection.length > 0) {
    // ...
  }
  ```

* 三元表达式不应该嵌套，通常应该是单行

* 避免不需要的三元表达式

  ```
  // bad
  const foo = a ? a : b;
  const bar = c ? true : false;
  const baz = c ? false : true;
  
  // good
  const foo = a || b;
  const bar = !!c;
  const baz = !c;
  ```

* 用圆括号把很多运算符*/+-出现的情况括起来

  

#### Blocks

* 用大括号包裹多行代码
* 如果if中重视return返回，那后续就不用写else。如果if有returnelse也有return，那就把这个条件判断拆成两个或者多个

#### Control Statements

* 控制语句（if while太长的话，把每个条件哦啊那段放在一行，逻辑操作符放在行首）

  ```
  // good
  if (
    (foo === 123 || bar === 'abc')
    && doesItLookGoodWhenItBecomesThatLong()
    && isThisReallyHappening()
  ) {
    thing1();
  }
  ```

* 不要用选择操作符代替控制语句？

  ```
  // bad
  !isRunning && startRunning();
  
  // good
  if (!isRunning) {
    startRunning();
  }
  ```

#### Comments

* 多行注释： `/** ... */`

  ```
  // good
  /**
   * make() returns a new element
   * based on the passed-in tag name
   */
  function make(tag) {
  
    // ...
  
    return element;
  }
  ```

* 单行注释用`//`，将单行注释放在被注释区域上面。如果注释不是在第一行，那么注释前面就空一行

* 所有注释开头空一格

* 在你的注释前使用`FIXME'或`TODO’前缀， 这有助于其他开发人员快速理解你指出的需要重新访问的问题，动作是`FIXME： - 需要计算出来`或`TODO： - 需要实现`。

* [18.5](https://lin-123.github.io/javascript/#comments--fixme) 用`// FIXME:`给问题做注释

  ```
  class Calculator extends Abacus {
    constructor() {
      super();
  
      // FIXME: shouldn't use a global here
      total = 0;
    }
  }
  ```



- [18.6](https://lin-123.github.io/javascript/#comments--todo) 用`// TODO:`去注释问题的解决方案

  ```
  class Calculator extends Abacus {
    constructor() {
      super();
  
      // TODO: total should be configurable by an options param
      this.total = 0;
    }
  }
  ```

#### Whitespace

* tab用两个空格（4？）
* 在大括号前空一格
* 在控制语句(`if`, `while` 等)的圆括号前空一格。在函数调用和定义时，参数列表和函数名之间不空格。 eslint: [`keyword-spacing`](http://eslint.org/docs/rules/keyword-spacing.html)
* 用空格来隔开运算符
* 文件结尾空一行（？why）
* 当出现长的方法链（>2个）时用缩进。用点开头强调该行是一个方法调用，而不是一个新的语句
* 在一个代码块后下一条语句前空一行
*  不要用空白行填充块
* 不要在代码之间使用多个空白行填充
* 圆括号里不要加空格
* 方括号里不要加空格
* 花括号里加空格
* 避免一行代码超过100个字符（包含空格）
* `,` 前不要空格， `,` 后需要空格。
*  在对象的字面量属性中， `key` `value` 之间要有空格
* 行末不要有空格

#### Commas

* 不要前置逗号
* 对象中最后一个属性加逗号比较好

#### Semicolons

* 自执行函数尾加分号

#### Type Casting & Coercion（类型转换）

* 在语句开始执行强制类型转换。

* Numbers: 用 `Number` 做类型转换，`parseInt`转换string常需要带上基数。 

* 请在注释中解释为什么要用移位运算和你在做什么。无论你做什么狂野的事，比如由于 `parseInt` 是你的性能瓶颈导致你一定要用移位运算。 请说明这个是因为[性能原因](https://jsperf.com/coercion-vs-casting/3),

  ```
  // good
  /**
   * parseInt是代码运行慢的原因
   * 用Bitshifting将字符串转成数字使代码运行效率大幅增长
   */
  const val = inputValue >> 0;
  ```

#### Naming Conventions

* 避免用一个字母命名，让你的命名可描述
* 用小驼峰式命名你的对象、函数、实例
* 用大驼峰式命名类
* 不要用前置或后置下划线
* 不要保存引用`this`， 用箭头函数或[函数绑定——Function#bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
* export default导出模块A，则这个文件名也叫A.*， import 时候的参数也叫A。 大小写完全一致。
* 当你export-default一个函数时，函数名用小驼峰，文件名需要和函数名一致
*  当你export一个结构体/类/单例/函数库/对象 时用大驼峰
* 简称和缩写应该全部大写或全部小写。
* 你可以用全大写字母设置静态变量，他需要满足三个条件。
  1. 导出变量
  2. 是 `const` 定义的， 保证不能被改变
  3. 这个变量是可信的，他的子属性都是不能被改变的

#### Accessors

* 不需要使用属性的访问器函数。
* 不要使用JavaScript的getters/setters，因为他们会产生副作用，并且难以测试、维护和理解。相反的，你可以用 getVal()和setVal(‘hello’)去创造你自己的accessor函数
* 如果属性/方法是`boolean`， 用 `isVal()` 或 `hasVal()`
* 用get()和set()函数是可以的，但是要一起用

#### Events

* 通过哈希而不是原始值向事件装载数据时(不论是DOM事件还是像Backbone事件的很多属性)。 这使得后续的贡献者（程序员）向这个事件装载更多的数据时不用去找或者更新每个处理器。例如：

  ```
  // bad
  $(this).trigger('listingUpdated', listing.id);
  
  ...
  
  $(this).on('listingUpdated', (e, listingId) => {
    // do something with listingId
  });
  ```

  prefer:

  ```
  // good
  $(this).trigger('listingUpdated', { listingId: listing.id });
  
  ...
  
  $(this).on('listingUpdated', (e, data) => {
    // do something with data.listingId
  });
  ```

#### Standard Library

[标准库](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects)中包含一些功能受损但是由于历史原因遗留的工具类

* 用 `Number.isNaN` 代替全局的 `isNaN`

  Why? 全局 `isNaN` 强制把非数字转成数字， 然后对于任何强转后为 `NaN` 的变量都返回 `true` 如果你想用这个功能，就显式的用它。

*  用 `Number.isFinite` 代替 `isFinite`

  Why? 理由同上，会把一个非数字变量强转成数字，然后做判断

#### Testing

- 无论用那个测试框架，你都需要写测试。

- 尽量去写很多小而美的纯函数，减少突变的发生

- 小心 stub 和 mock —— 这会让你的测试变得脆弱。

- 在 Airbnb 首选 [`mocha`](https://www.npmjs.com/package/mocha)。 [`tape`](https://www.npmjs.com/package/tape) 偶尔被用来测试一些小的，独立的模块。

- 100%测试覆盖率是我们努力的目标，即便实际上很少达到。

- 每当你修了一个bug， 都要写一个回归测试。 一个bug修复了，没有回归测试，很可能以后会再次出问题。

  

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




































