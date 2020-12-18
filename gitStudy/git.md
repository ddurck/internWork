# git学习
## 1.简介
git: 
  英 [ɡɪt]   美 [ɡɪt]  n.蠢货;饭桶;讨厌鬼
  Global Information Tracker（全局信息跟踪器）

仓库（repository）：Git 进行版本控制的项目



操作：

-git status 查看状态

-git add <filename> :添加到暂存区

-git commit -m “修改说明”  ：提交commit

-git push origin master  ：push到远程仓库





下面先不讨论git的深入原理。先从一个小例子出发：



## 2.浏览器中使用github

新建一个仓库，可以看到有一个1 commit的标识。

commit的引文意思是执行某个重要的操作。在git中：作为动词：保存版本， 作为名词:版本

已经有几个版本了的意思。

在这里新建一个文件，`love.md`, 在commit new file中填写版本留言（版本更新说明），然后保存，回到仓库主页，可以看到

![Alt text](L:\picture\temporarry\commit.png)

变成了2 commits，点击2 commits, 所有版本构成了“项目历史线”（project history）



点进一个版本，可以看到谁在什么时候做了什么，以及该版本更新的原因

在右上方也可以看到它的父版本（parent）是谁，以及当前版本号（commit id）

它的底层原理是每个commit内部保存了parent版本号，这样就会在节约空间的基础上将所有版本连成一条历史线。

不过通常不会在github上直接编辑操作，而是在自己机器上编辑项目，再通过git更新



## 3.git

### 3.1 git commit

前面是利用github接触到了关于git的版本控制，下面开始从git的角度进行学习。

git仓库的提交记录保存的是**目录下所有文件的快照**，就像是把整个目录复制，再保存起来。git希望提交记录尽量**轻量级**，所以再每次提交时不会盲目地复制整个目录。条件允许的情况下，它会将当前版本与仓库中的上一个版本进行对比，并且把**所有的差异**打包到一起作为一个提交记录。

每一个提交记录都会记录上一个版本的版本号（`parent`），这样就会形成一条记录每个版本变化的时间线了。父节点是当前提交变更的基础



### 3.2 git branch

git最核心的操作对象是版本（`commit`），最核心的操作技巧就是分支了。

残仓库创建后，一旦有了新commit，默认就会放到一个分支上，名字叫做`master`。前面所说的版本历史线就是master分支。一个仓库内，用户可以创建其他的分支，可以有多条历史线。master一般被成为“`主分支`”，但是从技术底层来讲它和我们创建的其他分支没有区别，只不过它是默认的分支。实际工程中**master用来存放稳定的代码**。

> master 分支上所有的代码都应该是可部署的

即使创建再多分的支也不会造成更多的储存或内存上的开销，并且**按逻辑分解工作到不同的分支**要比维护那些特别臃肿的分支简单多了。 

其实master本身是一个**指针**，指向master分支上的最新一个版本，每个commit都能找到上一个commit，所以这条历史线也就能确定了。

* 创建新分支

在github上操作：

![Alt text](L:\picture\temporarry\createNewMaster.png)



对于git命令：

```
git branch <name>
```

创建一个名为newMaster的分支。在newMaster分支下，可以看到历史线和master分支一模一样。其底层的实现是：**创建一个新的newMaster指针，跟master指向同一个版本**，不拷贝历史线。

切换分支：

```
git checkout <name>
```

此时如果我在newMaster分支下做一个修改，然后commit，那么移动的只是newMaster指针，master的不会改变。这样就出现了两个历史线不同的分支了。

切换分支的**原理**：底层一个名为**HEAD**的指针发生变化，比如当HEAD 指向master，那master就是当前指针。发生的commit变化都只发生在当前分支。

![Alt text](L:\picture\temporarry\HEAD.png)

 对了，有个更简洁的方式：

如果你想创建一个新的分支同时切换到新创建的分支的话，可以通过 `git checkout -b  <your-branch-name>  ` 来实现。 



### 3.3 git merge合并分支



#### 3.3.1 pull request来合并分支

一个分支上的代码经过测试没有问题之后，就要把这个分支合并（merge）到master分支，因为master分支才是最后被上线的分支。



##### 3.3.1.1 github上merge

同样：在先看github上的操作：

首先在切换到newMaster分支，可以看到

![Alt text](L:\picture\temporarry\pullRequest.png)

点击右边的`pull request`按钮。Pull request就是“拉取请求”的意思，意思是请求master分支去把newMaster分支的代码拉取到master之上。

然后来到Open a pull request页面，

可以看到绿色的`“Able to merge”`，意思是newMaster上面修改的和master上的没有冲突。可以直接融合。

然后填写本次pull request的理由，解释给master分支维护者，**要拉取这些修改内容都实现了哪些有意义的功能**。然后点击create pull request：



![Alt text](L:\picture\temporarry\mergeTest.png)



master分支维护者将会看到这个pull request的请求的详细内容，审核之后，点`merge pull request`，newMaster分支的内容就merge进master分支了。

![Alt text](L:\picture\temporarry\mergesucceed.png)

![Alt text](L:\picture\temporarry\mergesucceed1.png)

上图是master分支的历史线。原来属于newMaster的分支c3现在到了master分支之上，另外还生成了c4，

c4这个特殊的commit叫做**“融合版本”**（`merge commit`），它的特点是**同时有两个parent commit**， 翻译成自然语言相当于：“我要把这两个父节点本身及它们所有的祖先都包含进来。”  

假如从 master开始沿着箭头向上看，在到达起点的路上会经过所有的提交记录。这意味着 master 包含了对代码库的所有修改。

被合并的分支一般在这里就可以删除了。



##### 3.3.1.1 git上merge

```
git merge <your branch name>
```



#### 3.3.2 代码冲突conflicts

在两个branch中分别都有新的commit，可以直接合并在一起。但是当两个commit更新的是同一个文件的时候，就会发生**代码冲突**。因为git不知道该听那个分支的，所以只好报出冲突的位置，让开发者手动解决。

示例：

新创建一个conflictTest的branch，分别修改master和conflictTest的同一个文件，然后再conflictTest里提交pull request，会发现提交有冲突:

![Alt text](L:\picture\temporarry\mergeConflict.png)点击继续：

![Alt text](L:\picture\temporarry\conflictResolve.png)

点击Resolve conflicts，进入手动解决冲突的界面：

![Alt text](L:\picture\temporarry\conflictResolve1.png)

根据情况对冲突的地方进行修改：

![Alt text](L:\picture\temporarry\conflictResolve2.png)

点击commit merge ，合并完成。



以上是在同一个仓库里发生的冲突行为。同样地，在本地仓库（`local`）和远端仓库（`remote`）里也会出现代码冲突的问题。比如在github上和在本地文件commit了同一个文件，就会发生冲突。解决方法和上面的一样。



### 3.4 git rebase合并分支

合并分支除了融合（ merge ）还有另外一种形式叫“变基”（ rebase ) 。Rebase 实际上就是取出一系列的提交记录，“复制”它们，然后在另外一个地方逐个的放下去。 

前面使用的merge在操作完成后会出现一个有两个parent的commit，而rebase的实现将使得版本变成线性的一条线。

Rebase 的优势就是可以创造更线性的提交历史，这听上去有些难以理解。如果只允许使用 Rebase 的话，代码库的提交历史将会变得异常清晰。 



下面的模拟来自 https://learngitbranching.js.org/?locale=zh_CN ：



![Alt text](L:\picture\temporarry\rebase.png)

这里HEAD指向bugFix，输入命令：

```shell
git rebase master
```

此时bugFix会先复制出一个和c3一样的commit c3’(c3依然存在)，然后将c3‘的parent指向rebase了的分支master，这样就得到了一个线性的提交序列，

如下图所示：

![Alt text](L:\picture\temporarry\rebase1.png)

实际上它是提取在 `C2` 中引入的补丁和修改，然后在 `C3` 的基础上应用一次 

使用 `rebase` 命令将提交到某一分支上的所有修改都移至另一分支上，就好像“重新播放”一样。 

它的原理是首先找到这两个分支（即当前分支 `bugFix`、变基操作的目标基底分支 `master`） 的最近共同祖先 `C1`，然后对比当前分支相对于该祖先的历次提交，提取相应的修改并存为临时文件， 然后将当前分支指向目标基底 `C3`, 最后以此将之前另存为临时文件的修改依序应用。  



### 3.5 移动操作

#### 3.5.1 分离HEAD

HEAD 是一个对当前检出记录的符号引用 —— 也就是指向你正在其基础上进行工作的提交记录。

HEAD 总是指向当前分支上最近一次提交记录。大多数修改提交树的 Git 命令都是从改变 HEAD 的指向开始的。

HEAD 通常情况下是指向分支名的。在你提交时，改变了该分支的状态，这一变化通过 HEAD 变得可见。

通过命令

```
git checkout master
```

指向从HEAD-->master-->c1 变成了HEAD-->c1



#### 3.5.2  *相对引用（^）* 

通过指定提交记录哈希值的方式在 Git 中移动不太方便。在实际应用时，你不得不用 `git log` 来查查看提交记录的哈希值。

并且哈希值在真实的 Git 世界中也会更长（译者注：基于 SHA-1，共 40 位）。较令人欣慰的是，Git 对哈希的处理很智能。你只需要提供能够唯一标识提交记录的前几个字符即可。因此我可以仅输入前四位而不是上面的一长串字符。

两个简单的用法：

- 使用 `^` 向上移动 1 个提交记录

- 使用 `~` 向上移动多个提交记录，如 `~3`

 

##### 3.5.2.1 操作符 (^)。

把这个符号加在引用名称的后面，表示让 Git 寻找指定提交记录的父提交。

所以 `master^` 相当于HEAD指向“`master` 的父节点”。

`master^^` 是 `master` 的第二个父节点

 也可以将 `HEAD` 作为相对引用的参照 ，

```
git checkout HEAD^
```

 代表以HEAD指向的记录开始向上移动一个节点 



##### 3.5.2.2“~”操作符：

移动多个提交记录，如 `~3`

`~<num>`

如

```
git branch -f master HEAD~3
```

强制将master分支移动到当前位置的上三个的位置





#### 3.5.3撤销变更

在 Git 里撤销变更的方法很多。和提交一样，撤销变更由底层部分（暂存区的独立文件或者片段）和上层部分（变更到底是通过哪种方式被撤销的）组成。我们这个应用主要关注的是后者。

主要有两种方法用来撤销变更 —— 一是 `git reset`，还有就是 `git revert`。接下来咱们逐个进行讲解。

##### 3.5.3.1  git reset

`git reset` 通过把分支记录回退几个提交记录来实现撤销改动。你可以将这想象成“改写历史”。`git reset` 向上移动分支，原来指向的提交记录就跟从来没有提交过一样。 

```
git reset HEAD~1
```

现在我们的本地代码库根本就不知道有 `C2` 这个提交了。在reset后， `C2` 所做的变更还在，但是处于未加入暂存区状态。）



##### 3.5.3.2 git revert

虽然在你的本地分支中使用 `git reset` 很方便，但是这种“改写历史”的方法对大家一起使用的**远程分支**是无效的

为了撤销更改并**分享**给别人，我们需要使用 `git revert`

```
git revert HEAD
```

此时在撤销的提交记录后面多了一个新提交。这个新提交（c2’）里面的更改刚好是用来**撤销**想要撤销的提交状态（c2）的，也就是说`c2'`的状态与从`c1`是相同的

这样别人就能够知道你的撤销操作了。



### 3.6 团队协作

 https://guides.github.com/introduction/flow/index.html 

创建一个仓库，setting——Manage access——invite a collaborator, 这样就有了队友

较为常见的情形是把代码clone到本地，使用者自己的编辑器和测试工具。然后利用本地git bash将自己的代码push到github仓库。



标准的流程是：

Create a branch->Add commits->Open a Pull Request->Discuss and review your code

->Deploy->Merge

##### 3.6.1 Create a branch

先创建一个新分支，用来开发某个新功能。

这个分支的名字越清楚越好，最好一下就能知道这个分支在干嘛。

新分支一定要在刚刚更新过的master的基础上开。



##### 3.6.2 Add commits

通过commit不断实现这个功能，以后这个分支每实现一个小功能就push到远端，这样的好处是队友可以随时看到我的进度。

提交操作也建立一个关于你工作的透明历史，通过查看这些提交记录，其他人可以知道你做了什么和为什么这么做。每个提交操作都有一个相关的提交信息（Commit messages），用于描述你做出的修改。此外， 每一个提交操作都被视为一个“修改单元”。如果发现了 bug 或者决定走不同的开发方向，你也可以通过这些“修改单元”进行回滚操作。 

提交信息非常的重要，特别是当你将修改的内容提交到服务器之后，Git 可以追踪到你的修改内容并展示它们。通过写清楚的提交信息，你可以让其他人更容易跟上我们的思路并提供反馈。 

##### 3.6.3 Open a Pull Request

发起“拉取请求”，请求该分支的审核



##### 3.6.4 Discuss and review your code

这样master的维护者就可以用这个pull request进行讨论和代码审核了。队友之间也可以相互审核讨论。

大家发表意见之后觉得有道理，diamagnetic需要调整，就继续在该分支上改代码然后同步过来。

Pull Request 讨论不断继续，会形成一条由评论和代码穿插而成的线。最后达成一致。



#####  3.6.5 Deploy

 只要你的 Pull 请求被审查并且通过了你的测试，你就可以部署这些修改，在生产环境中验证她们。如果分支发生了问题，你也可以回滚到之前的状态。 



#####  3.6.6 merge

达成一致，之后就可以点一下上面的大大的 `Merge Pull Request` （ 融合拉取请求 ）的按钮，这样话题分支上的代码就合并到 master 之上了。接下来这个话题分支也就可以删掉，然后关闭这个 pull request了。 

