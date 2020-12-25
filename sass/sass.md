## sass

css预编译语言，用写js的方式写css（变量，嵌套，函数...）

##### 编译
sass转css：`sass --watch input.scss output.css`
监听变化： `sass --watch app/sass:public/stylesheets`   (冒号分隔输入和输出文件夹路径)


##### 变量
变量：储存信息并在将来重复利用
在ass中：用`$`作为变量标识
sass：

```
$font-stack:    Helvetica, sans-serif
$primary-color: #333

body
  font: 100% $font-stack
  color: $primary-color
```
css:
```scss
body {
  font: 100% Helvetica, sans-serif;
  color: #333;
}
```

##### 嵌套
html有清晰的层级嵌套和可视化结构，css无
sass允许使用者嵌套css选择器
sass
```scss
nav
  li
    display: inline-block
```
css
```scss
nav li {
  display: inline-block;
}
```
嵌套规则是利用后代选择器



伪类时：

sass的父选择器 `&`

```scss
article a {
  color: blue;
  &:hover { color: red }
}
```

当包含父选择器标识符的嵌套规则被打开时，它不会像后代选择器那样进行拼接，而是`&`被父选择器直接替换

子选择器和同层组合选择器 ：`>` `+` `~`

`>`:紧跟着的子元素

`+`:同层相邻

`~`：同层全体选择器



嵌套属性（border-style， border-width...可以用一个border括起来）

sass

```scss
nav {
  border: {
  style: solid;
  width: 1px;
  color: #ccc;
  }
}
```

css

```scss
nav {
  border-style: solid;
  border-width: 1px;
  border-color: #ccc;
}
```



##### 模块

css中@import是执行到这个@import才会去下载那个css，这样加载比较慢

sass中： 在生成css文件的时候就把相关css文件导入进来

sass局部文件：`_`开头，如_night-sky.scss

默认变量值：`!default`, 对于局部文件，如果有就用那个已经存在的，没有就用这里设置的这个值

```scss
$fancybox-width: 400px !default;
.fancybox {
width: $fancybox-width;
}
```



嵌套导入：将@import命令写在css规则之内



##### 混合器

定义的时候`@mixin <sass name>`   使用的时候`@include <sacc name>`

下边的这段`sass`代码，定义了一个非常简单的混合器，目的是添加跨浏览器的圆角边框。

```
@mixin rounded-corners {
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
}
```

然后就可以在你的样式表中通过`@include`来使用这个混合器，放在你希望的任何地方。`@include`调用会把混合器中的所有样式提取出来放在`@include`被调用的地方。如果像下边这样写：

```
notice {
  background-color: green;
  border: 2px solid #00aa00;
  @include rounded-corners;
}

//sass最终生成：
.notice {
  background-color: green;
  border: 2px solid #00aa00;
  -moz-border-radius: 5px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
}
```

在`.notice`中的属性`border-radius``-moz-border-radius`和`-webkit-border-radius`全部来自`rounded-corners`这个混合器。

判断一组属性是否应该组合成一个混合器，一条经验法则就是你能否为这个混合器想出一个好的名字。

在混合器传参：

混合器并不一定总得生成相同的样式。可以通过在`@include`混合器时给混合器传参，来定制混合器生成的精确样式。当`@include`混合器时，参数其实就是可以赋值给`css`属性值的变量。如果你写过`JavaScript`，这种方式跟`JavaScript`的`function`很像：

```
@mixin link-colors($normal, $hover, $visited) {
  color: $normal;
  &:hover { color: $hover; }
  &:visited { color: $visited; }
}
```

当混合器被`@include`时，你可以把它当作一个`css`函数来传参。如果你像下边这样写：

```
a {
  @include link-colors(blue, red, green);
}

//Sass最终生成的是：

a { color: blue; }
a:hover { color: red; }
a:visited { color: green; }
```

当你@include混合器时，有时候可能会很难区分每个参数是什么意思，参数之间是一个什么样的顺序。为了解决这个问题，`sass`允许通过语法`$name: value`的形式指定每个参数的值。这种形式的传参，参数顺序就不必再在乎了，只需要保证没有漏掉参数即可：

```
a {
    @include link-colors(
      $normal: blue,
      $visited: green,
      $hover: red
  );
}
```



##### 继承 

使用`sass`的时候，最后一个减少重复的主要特性就是**选择器继承**。基于`Nicole Sullivan`面向对象的`css`的理念，选择器继承是说一个选择器可以继承为另一个选择器定义的所有样式。这个通过`@extend`语法实现，

```
//通过选择器继承继承样式
.error {
  border: 1px solid red;
  background-color: #fdd;
}
.seriousError {
  @extend .error;
  border-width: 3px;
}
```

在上边的代码中，`.seriousError`将会继承样式表中任何位置处为`.error`定义的所有样式。以`class="seriousError"` 修饰的`html`元素最终的展示效果就好像是`class="seriousError error"`。相关元素不仅会拥有一个`3px`宽的边框，而且这个边框将变成红色的，这个元素同时还会有一个浅红色的背景，因为这些都是在`.error`里边定义的样式。

`.seriousError`不仅会继承`.error`自身的所有样式，任何跟`.error`有关的组合选择器样式也会被`.seriousError`以组合选择器的形式继承，如下代码:

```
//.seriousError从.error继承样式
.error a{  //应用到.seriousError a
  color: red;
  font-weight: 100;
}
h1.error { //应用到hl.seriousError
  font-size: 1.2rem;
}
```

因为继承是基于类的（有时是基于其他类型的选择器），所以继承应该是建立在语义化的关系上。当一个元素拥有的类（比如说`.seriousError`）表明它属于另一个类（比如说`.error`），这时使用继承再合适不过了。

















todo 本地仓库关联到远程仓库，然后合并代码

Delete source branch 建临时分支的时候合并之后就可以删了这样用的





