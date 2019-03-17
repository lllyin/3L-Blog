import React, { Component } from 'react';


export default class PanelBody extends Component {
  render() {
    return (
      <div>
        <div className="introduce">
          <span>功能介绍：</span>
          <ol className="text_detail">
            当页面过长时，能够让用户迅速从前当前位置返回到页面顶部，免去拖动滚动条的繁琐。
          </ol>
        </div>
        <div className="how_use">
          <span>使用方法：</span>
          <ol className="text_detail">
            <li>1、引入jQuery</li>
            <li>2、引入项目中的totop.js</li>
            <li>
              3、在需要返回顶部的页面 &lt; head &gt; 标签内添加
              <code> &lt; meta name=&quot;totop&quot; toggle=&quot;true&quot; &gt; </code>
              一行代码即可
            </li>
          </ol>
        </div>
        <div className="online_link">
          <span>演示地址：</span>
          <ol className="text_detail">
            <a href="http://liaolunling.top/demo/totop/index.html" target="_blank" rel="noopener noreferrer">
              http://liaolunling.top/demo/totop/index.html
            </a>
          </ol>
        </div>
        <div className="git_link">
          <span>github地址：</span>
          <ol className="text_detail">
            <a href=" https://github.com/Andesome/topTop" target="_blank">
              https://github.com/Andesome/topTop
            </a>
          </ol>
        </div>
      </div>
    );
  }
}
