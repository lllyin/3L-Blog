import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="zh-cmn-Hans">
        <Head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="keywords" content="前端开发 JavaScript HTML Web前端 React" />
          <meta name="description" content="3L先生是个人博客网站，他想和你分享一些IT和人生中有趣的事情" />
          <meta name="author" content="廖伦灵" />
          <link rel="stylesheet" href="/_next/static/style.css" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/bootstrap/3.2.0/css/bootstrap.css" />
          <link href="https://cdn.bootcss.com/normalize/8.0.0/normalize.min.css" rel="stylesheet" />
          <link href="https://cdn.bootcss.com/pure/1.0.0/pure-min.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}