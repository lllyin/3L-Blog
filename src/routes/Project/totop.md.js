//  返回顶部
const totop = `
#### 功能介绍
  当页面过长时，能够让用户迅速从前当前位置返回到页面顶部，免去拖动滚动条的繁琐。

#### 使用方法
1. 引入jQuery
2. 引入项目中的totop.js
3. 在需要返回顶部的页面${'`<head>`'}标签内添加 ${'`<meta name="totop" toggle="true">`'} 一行代码即可

#### 演示地址
  [http://liaolunling.top/demo/totop/index.html](http://liaolunling.top/demo/totop/index.html)

#### github
  [https://github.com/Andesome/topTop](https://github.com/Andesome/topTop)

`;

// 轮播图
const lightbox = `
#### 功能介绍
页面中有一组或多组图片（或称之为预览图），点击图片，弹出当前图片的详情。 并在弹出层中可以切换上一张和下一张图片。

#### 使用方法
1. 引入jQuery
2. 引入项目中的lightBox.js
3. 在图片组的最外层div添加属性 ${'`data-role="light-box"`'} 即可，具体的DOM结构请移除github查看。

#### 演示地址
  [http://liaolunling.top/demo/totop/light-box/index.html](http://liaolunling.top/demo/totop/light-box/index.html)

#### github
  [https://github.com/Andesome/light-box](https://github.com/Andesome/light-box)
`;

const fixnav = `
#### 功能介绍
在网页的时候常常会遇到需要一直把导航条固定在顶部，我们做起来也很简单， 只需要给导航条添加css: 
${'```position:fixed;top:0 ```'}
但是还有一种情况就是，我们的导航条并不在页面最顶部，它前面还有一部分内容，那么怎么解决呢？ 其实，也很简单，请参照demo。

#### 使用方法
1. 引入jQuery
2. 引入项目中的fixnav.js
3. 在导航条添加属性：如导航条是nav标签,则： 
  ${'`<nav name="navbar-fixed-top-xxx"> .... <nav>`'} 。
  ${'`navbar-fixed-top-xxx`'},后面的xxx是初始时（还没有拖动滚动条），导航条距离页面顶端的位置，如导航条距离顶端200px,则
   ${'`navbar-fixed-top-200`'}.

#### 演示地址
  [http://liaolunling.top/demo/fix-navbar-anyposition/index.html](http://liaolunling.top/demo/fix-navbar-anyposition/index.html)

#### github
  [https://github.com/Andesome/](https://github.com/Andesome/)
`;

export {
  totop,
  lightbox,
  fixnav,
};
