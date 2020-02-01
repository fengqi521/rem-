###rem布局采用的网易新闻的方案

> 以iphone6设计稿为例
* 750（物理像素） / 7.5 = 100px方案，
* 375（像素） / 7.5 = 50px 

> 最后得出结论 document.documentElement.style.fontSize  = document.documentElement.clientWidth/7.5+px
> 最后只要用设计稿上的尺寸/100就是rem值