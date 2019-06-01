import React, { PureComponent } from 'react';

export default class LoadingList extends PureComponent {
  tops = [];

  componentDidMount() {
    // 距离底部多少像素开启触发加载，默认50px
    const { distanceBottom = 150, onLoadingMore } = this.props;

    window.addEventListener('scroll', () => {
      const scrollHeight = document.body.scrollHeight || document.documentElement.scrollHeight;
      const scrollTop = this.getScrollTop();

      this.tops.push(scrollTop);
      if (scrollTop + window.innerHeight + distanceBottom >= scrollHeight) {
        const nextTop = this.tops.pop();
        const prevTop = this.tops.pop();

        if (nextTop - prevTop > 0) {
          this.tops = [];
          onLoadingMore && onLoadingMore();
        } 
      }
    });
  }

  getScrollTop = () => {
    return document.body.scrollTop || document.documentElement.scrollTop;
  };

  render() {
    const { children } = this.props;

    return <div className="ly-loading-list">{children}</div>;
  }
}
