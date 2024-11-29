---
layout:     post
title:      "jekyll docker compose"
subtitle:   " \"github ssh gpg\""
date:       2024-11-20 10:50:31
author:     "zhaodj"
header-img: "img/post-bg-2015.jpg"
tags:
    - github,docker,compose,jekyll
---

> "这是一个不错的开始." 

使用docker-compose搭建jekyll
目录结构如下:
```
~/docker/docker-compose.yml
~/github/blog
```
blog 是使用的huangxuan.me作为模板修改的。 后续会根据我对html的理解进行修改。添加了gitalk评论功能，将评论功能的配置移动到_data文件夹下，后续将google analytics移动到_data文件夹下 google adsense移动到_data文件夹下.
blog文件夹下的内容如下:
```
blog
├── 404.html
├── about.html
├── ads.txt
├── archive.html
├── bundle
├── _config.yml
├── css
│   ├── bootstrap.css
│   ├── bootstrap.min.css
│   ├── gitalk.css
│   ├── hux-blog.css
│   ├── hux-blog.min.css
│   └── syntax.css
├── _data
│   ├── disqus.yml
│   ├── gitalk.yml
│   ├── gitalk.yml~
│   ├── netease_comment.yml
│   └── netease_comment.yml~
├── feed.xml
├── fonts
│   ├── glyphicons-halflings-regular.eot
│   ├── glyphicons-halflings-regular.svg
│   ├── glyphicons-halflings-regular.ttf
│   ├── glyphicons-halflings-regular.woff
│   └── glyphicons-halflings-regular.woff2
├── Gemfile
├── Gemfile.lock
├── Gruntfile.js
├── img
│   ├── 404-bg.jpg
│   ├── about-bg.jpg
│   ├── bg-little-universe.jpg
│   ├── bg-material.jpg
│   ├── bg-walle.jpg
│   ├── blog-desktop.jpg
│   ├── blog-keynote.jpg
│   ├── blog-md-navbar.gif
│   ├── blog-sidebar.jpg
│   ├── contact-bg.jpg
│   ├── favicon.ico
│   ├── home-bg-art.jpg
│   ├── home-bg-geek.jpg
│   ├── home-bg.jpg
│   ├── home-bg-o.jpg
│   ├── icon_wechat.png
│   ├── in-post
│   │   └── post-js-version
│   │       ├── javascript-java.jpg
│   │       └── keep-calm-and-learn-javascript.png
│   ├── post-bg-2015.jpg
│   ├── post-bg-alibaba.jpg
│   ├── post-bg-alitrip.jpg
│   ├── post-bg-android.jpg
│   ├── post-bg-apple-event-2015.jpg
│   ├── post-bg-css.jpg
│   ├── post-bg-digital-native.jpg
│   ├── post-bg-dreamer.jpg
│   ├── post-bg-e2e-ux.jpg
│   ├── post-bg-farewell-flash.jpg
│   ├── post-bg-halting.jpg
│   ├── post-bg-infinity.jpg
│   ├── post-bg-ios9-web.jpg
│   ├── post-bg-js-module.jpg
│   ├── post-bg-js-version.jpg
│   ├── post-bg-kuaidi.jpg
│   ├── post-bg-miui6.jpg
│   ├── post-bg-miui-ux.jpg
│   ├── post-bg-nextgen-web-pwa.jpg
│   ├── post-bg-os-metro.jpg
│   ├── post-bg-re-vs-ng2.jpg
│   ├── post-bg-rwd.jpg
│   ├── post-bg-see-u-ali.jpg
│   ├── post-bg-universe.jpg
│   ├── post-bg-unix-linux.jpg
│   ├── post-bg-web.jpg
│   ├── post-sample-image.jpg
│   └── tag-bg.jpg
├── _includes
│   ├── about
│   │   ├── en.md
│   │   └── zh.md
│   ├── ads.html
│   ├── disqus.html
│   ├── featured-tags.html
│   ├── footer.html
│   ├── friends.html
│   ├── gitalk.html
│   ├── head.html
│   ├── intro-header.html
│   ├── mathjax_support.html
│   ├── multilingual-sel.html
│   ├── nav.html
│   ├── nav.html~
│   ├── netease_comment.html
│   ├── search.html
│   ├── short-about.html
│   ├── short-about.html~
│   └── sns-links.html
├── index.html
├── js
│   ├── animatescroll.min.js
│   ├── archive.js
│   ├── bing.js
│   ├── bootstrap.js
│   ├── bootstrap.min.js
│   ├── gitalk.min.js
│   ├── hux-blog.js
│   ├── hux-blog.min.js
│   ├── jquery.js
│   ├── jquery.min.js
│   ├── jquery.nav.js
│   ├── jquery.tagcloud.js
│   ├── md5.min.js
│   ├── simple-jekyll-search.min.js
│   ├── snackbar.js
│   └── sw-registration.js
├── _layouts
│   ├── default.html
│   ├── keynote.html
│   ├── keynote.html~
│   ├── page.html
│   └── post.html
├── less
│   ├── highlight.less
│   ├── hux-blog.less
│   ├── mixins.less
│   ├── search.less
│   ├── sidebar.less
│   ├── side-catalog.less
│   ├── snackbar.less
│   └── variables.less
├── LICENSE
├── offline.html
├── package.json
├── package-lock.json
├── _posts
│   ├── 2024-11-20-git-gpg-ssh-key.md
│   ├── 2024-11-20-jekyyl-docker.md
│   └── 2024-11-20-jekyyl-docker.md~
├── pwa
│   ├── icons
│   │   ├── 128.png
│   │   └── 512.png
│   └── manifest.json
├── Rakefile
├── README.md
├── README.zh.md
├── search.json
├── _site
│   ├── 2024
│   │   └── 11
│   │       └── 20
│   │           ├── git-gpg-ssh-key
│   │           │   └── index.html
│   │           └── jekyyl-docker
│   │               └── index.html
│   ├── 404.html
│   ├── about
│   │   └── index.html
│   ├── ads.txt
│   ├── archive
│   │   └── index.html
│   ├── css
│   │   ├── bootstrap.css
│   │   ├── bootstrap.min.css
│   │   ├── gitalk.css
│   │   ├── hux-blog.css
│   │   ├── hux-blog.min.css
│   │   └── syntax.css
│   ├── feed.xml
│   ├── fonts
│   │   ├── glyphicons-halflings-regular.eot
│   │   ├── glyphicons-halflings-regular.svg
│   │   ├── glyphicons-halflings-regular.ttf
│   │   ├── glyphicons-halflings-regular.woff
│   │   └── glyphicons-halflings-regular.woff2
│   ├── img
│   │   ├── 404-bg.jpg
│   │   ├── about-bg.jpg
│   │   ├── bg-little-universe.jpg
│   │   ├── bg-material.jpg
│   │   ├── bg-walle.jpg
│   │   ├── blog-desktop.jpg
│   │   ├── blog-keynote.jpg
│   │   ├── blog-md-navbar.gif
│   │   ├── blog-sidebar.jpg
│   │   ├── contact-bg.jpg
│   │   ├── favicon.ico
│   │   ├── home-bg-art.jpg
│   │   ├── home-bg-geek.jpg
│   │   ├── home-bg.jpg
│   │   ├── home-bg-o.jpg
│   │   ├── icon_wechat.png
│   │   ├── in-post
│   │   │   └── post-js-version
│   │   │       ├── javascript-java.jpg
│   │   │       └── keep-calm-and-learn-javascript.png
│   │   ├── post-bg-2015.jpg
│   │   ├── post-bg-alibaba.jpg
│   │   ├── post-bg-alitrip.jpg
│   │   ├── post-bg-android.jpg
│   │   ├── post-bg-apple-event-2015.jpg
│   │   ├── post-bg-css.jpg
│   │   ├── post-bg-digital-native.jpg
│   │   ├── post-bg-dreamer.jpg
│   │   ├── post-bg-e2e-ux.jpg
│   │   ├── post-bg-farewell-flash.jpg
│   │   ├── post-bg-halting.jpg
│   │   ├── post-bg-infinity.jpg
│   │   ├── post-bg-ios9-web.jpg
│   │   ├── post-bg-js-module.jpg
│   │   ├── post-bg-js-version.jpg
│   │   ├── post-bg-kuaidi.jpg
│   │   ├── post-bg-miui6.jpg
│   │   ├── post-bg-miui-ux.jpg
│   │   ├── post-bg-nextgen-web-pwa.jpg
│   │   ├── post-bg-os-metro.jpg
│   │   ├── post-bg-re-vs-ng2.jpg
│   │   ├── post-bg-rwd.jpg
│   │   ├── post-bg-see-u-ali.jpg
│   │   ├── post-bg-universe.jpg
│   │   ├── post-bg-unix-linux.jpg
│   │   ├── post-bg-web.jpg
│   │   ├── post-sample-image.jpg
│   │   └── tag-bg.jpg
│   ├── index.html
│   ├── js
│   │   ├── animatescroll.min.js
│   │   ├── archive.js
│   │   ├── bing.js
│   │   ├── bootstrap.js
│   │   ├── bootstrap.min.js
│   │   ├── gitalk.min.js
│   │   ├── hux-blog.js
│   │   ├── hux-blog.min.js
│   │   ├── jquery.js
│   │   ├── jquery.min.js
│   │   ├── jquery.nav.js
│   │   ├── jquery.tagcloud.js
│   │   ├── md5.min.js
│   │   ├── simple-jekyll-search.min.js
│   │   ├── snackbar.js
│   │   └── sw-registration.js
│   ├── LICENSE
│   ├── offline.html
│   ├── package-lock.json
│   ├── pwa
│   │   ├── icons
│   │   │   ├── 128.png
│   │   │   └── 512.png
│   │   └── manifest.json
│   ├── Rakefile
│   ├── search.json
│   └── sw.js
└── sw.js

```
docker-compose.yml文件如下:
```shell
#docker-compose.yml
 jekyll:
    image: jekyll/jekyll
    container_name: jekyll
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Asia/Shanghai
    ports:
      - 4000:4000
    command: jekyll serve --force_polling --drafts --trace
    volumes:
      - ../github/blog/:/srv/jekyll
      - ../github/blog/bundle:/usr/local/bundle

```

