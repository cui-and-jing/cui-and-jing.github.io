var posts=["2026/06/14/first-post/","2026/06/14/github-actions-deploy/","2026/06/14/hello-world/","2026/06/14/hexo-deploy-guide/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };