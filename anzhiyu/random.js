var posts=["2026/06/15/github-pages-guide/","2026/06/15/hello-world/","2026/06/15/markdown-guide/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };