# BigInt AST demo

基于Google的jsbi库来吧BigInt的语法转换为jsbi库的函数调用。

简单介绍ast的基本概念以及babel相关内容。

`babel-plugin-transform-bigint.js`是GitHub随便找的一个bigint转换插件的代码，运行`yarn build`会将`input.js`的文件通过这个插件编译成`output.js`。`index.js`是演示用的简单插件逻辑，只针对乘法做了处理。运行后会做同样的事。同时也可以`debug`查看内部数据结构。