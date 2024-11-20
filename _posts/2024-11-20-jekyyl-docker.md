---
layout:     post
title:      "jekyll docker compose"
subtitle:   " \"github ssh gpg\""
date:       2024-11-20 10:50:31
author:     "zhaodj"
header-img: "img/post-bg-2015.jpg"
tags:
    - github docker compose jekyll
---

> “hah It's on. ”

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

