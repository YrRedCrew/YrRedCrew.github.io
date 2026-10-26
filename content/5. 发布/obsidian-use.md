---
pub-blog: true
permalink: /5/obsidian-use/
blog-path: 5. 发布/obsidian-use.md
title: Obsidian使用情况
tags: 
  - obsidian
---

## 前言

关于自己文字记录的过程，真的是可以长篇大论。从笔记本~~纸质的~~->记事本~~TXT~~->Office->OneNote&Notion->有道云笔记&语雀->Typora->Joplin（2021年舍弃）->Obsidian（至今）

太过夸张~~真是一个善变的人~~甚至还有记录了一篇Joplin与Obsidian对比，当时还在狂吹Joplin，没想到打脸了。Obsidian我希望是自己最后一款笔记应用~~千万别打脸了~~，主要是换一个应用得花好几天甚至更长去搬迁美化等等~~自己醒醒吧时间是珍贵的~~。

已这篇记录为证，别在~~善变了~~换了。好了，正文开始！
<!-- more -->

## Obsidian介绍

>[官网与简介](https://obsidian.md)
>Sharpen your thinking.
>Obsidian is the private and flexible writing app that adapts to the way you think.

在网上众说纷纭，这里好哪里好等等。我只是觉得满足自己的需求即可。其实有很多模块与功能我自己基本不使用~~可能是我垃圾吧~~，一个颜控不在意那么多功能。

当时为什么Joplin转战Obsidian，很大的因素就是在UI上其次是互联网上大佬反馈Obsidian数据存储更存粹~~我也不太懂~~。然后就是毅然决然打自己的脸用上了Obsidian。在这里我也推荐大家使用Obsidian呀~~哈哈哈~~！目前v1.5.11做的非常好了，丝滑！

## Obsidian全局设置

其实也没啥讲究的按需调整，单纯说一个“文件与链接”个人的配置习惯吧。
- 内部链接类型：基于当前笔记的相对路径。
- 附件默认存放路径：指定的附件文件夹。

噢~字体我看惯Windows了，比较喜欢`微软雅黑`。

全局设置还有一块关于“外观”的CSS个性的手搓内容。放在下面主题内容去记录。🔽

## Obsidian主题设置

我用的是[Aura](https://github.com/ashwinjadhav818/obsidian-aura)**v1.71**主题，为什么不用作者的最新版本？因为作者在**v1.75**时重写了主题，虽然主题内容风格没有大的改动，但是细节上的东西对于我来说不太喜欢。

这里可以使用[Style Setting](https://github.com/mgmeyers/obsidian-style-settings)快捷设置主题相关内容~~其实也可以手搓CSS🫡~~。

>Aurav1.71 Style Setting的设置文件

```json fold file=style-settings.json
{
  "aura@@aura-accent": "color-default",
  "aura@@aura-colorshemes": "aura-colorschemes-dracula",
  "aura@@bg-primary": "#202127",
  "aura@@bg-secondary": "#202127",
  "aura@@aura-active-line": "aura-no-highlight",
  "aura@@aura-callouts-select": "default",
  "aura@@aura-custom-checkbox": true,
  "aura@@aura-rainbow-tags": true,
  "aura@@h1-color": "#00F7FF",
  "aura@@h2-color": "#00E1FF",
  "aura@@h3-color": "#00CCFF",
  "aura@@h4-color": "#00B7FF",
  "aura@@h5-color": "#00A2FF",
  "aura@@h6-color": "#008CFF",
  "aura@@aura-layout-select": "aura-default-layout",
  "aura@@aura-disable-borders": true,
  "aura@@tab-outline-color": "#FFFFFF00",
  "aura@@aura-card-radius": 16,
  "aura@@aura-card-layout-fileexplorer": true,
  "aura@@aura-workspace-background-image": "aura-workspace-background-image-tokoyo",
  "aura@@aura-colorful-frame-opacity": 1,
  "aura@@aura-rainbow-folders": true
}
```

>Obsidian全局CSS的设置文件

```css fold file=Yr-userstyle_obsidian_v1.css
/*相关字体颜色*/
.theme-dark {
	--bold-color: #E91E63;
	--text-selection: #0080FF;
}


/*代码颜色*/
.markdown-rendered code {
    color: #53dfdd;
	background-color: #242424;
}

.cm-s-obsidian span.cm-inline-code {
    color: #53dfdd;
	background-color: #242424;
}

/*全局表格样式*/

/*基本样式*/
table {
    width: 100%; /*表格宽度*/
    max-width: 65em; /*表格最大宽度，避免表格过宽*/
    border: 1px solid #dedede; /*表格外边框设置*/
    margin: 15px auto; /*外边距*/
    border-collapse: collapse; /*使用单一线条的边框*/
    empty-cells: show; /*单元格无内容依旧绘制边框*/
}
table th,
table td {
  height: 35px; /*统一每一行的默认高度*/
  border: 1px solid #dedede; /*内部边框样式*/
  padding: 0 10px; /*内边距*/
}


/*表头样式*/
table thead {
    font-weight: bold; /*加粗*/
    text-align: center !important; /*内容居中，加上 !important 避免被 Markdown 样式覆盖*/
    background: rgba(158,188,226,0.2); /*背景色*/
}



table tbody tr:nth-child(2n) {
    background: rgba(158,188,226,0.12); 
}

table tr:hover {
    background: #efefef; 
}


table th {
    white-space: nowrap; /*表头内容强制在一行显示*/
}



table td:nth-child(1) {
    white-space: nowrap; 
}



[].slice.call(document.querySelectorAll('table')).forEach(function(el){
    var wrapper = document.createElement('div');
    wrapper.className = 'table-area';
    el.parentNode.insertBefore(wrapper, el);
    el.parentNode.removeChild(el);
    wrapper.appendChild(el);
})

$("table").wrap("<div class='table-area'></div>");

.table-area {
    overflow: auto;
}

.markdown-rendered blockquote {
    color: var(--blockquote-color);
    font-style: var(--blockquote-font-style);
    background-color: var(--blockquote-background-color);
    border-left: var(--blockquote-border-thickness) solid var(--blockquote-border-color);
    padding: 0 0 0 var(--size-4-6);
    margin-inline-start: 0;
    margin-inline-end: 0;
}

```

### Obsidian界面效果

这个效果自己相当满意，当然也从使用Obsidian时的默认->Minimal->AnuPpuccin
->Aura一路捣鼓~~披荆斩棘~~弄成这样。

![](https://r2.redcrew.cn/image/928d3fba24f9d2df897e9800ddbfe187.png)

## Obsidian插件分享

在这篇文章前，其实也有记录Obsidian使用情况。那会对插件之狂热，甚至一晚上都在搜寻各种好玩的插件。翻回那篇记录看了下30多个插件😅。

在某个时间突然想通，开始整理装了就没咋用的插件。整理到现在只留下了6个！
### Remotely Save
[Remotely Save](https://github.com/remotely-save/remotely-save)顾名思义远程保存的插件，其实就是一个非官方的非官方同步插件。为什么不用官方的这个有得起另外篇记录谈起了😂。插件设置很简单支持Amazon S3 or S3-compatible(Cloudflare R2 / BackBlaze B2 / MinIO / ...)、 Dropbox、 OneDrive for personal、Webdav。

我用的Webdav，服务端在家里。使用要特别注意的就是同步时不用去动服务端文件，为啥会动~~当时抽风了~~然后多端的也在定时同步，搞出了文件误删的事情，当时服务端文件还没做自动备份百度网盘，一下没了好多。😑
### Style Setting

[Style Setting](https://github.com/mgmeyers/obsidian-style-settings)适配较多主题的CSS可视化编辑，DIY主题样式。具体使用可以见上面“Aurav1.71 Style Setting的设置文件”
### Bartender

[Bartender](https://github.com/nothingislost/obsidian-bartender)可以重新排列状态栏和侧栏带、文件列表中的元素。官方没有文件列表自定义排序，使用Bartender手动拖拽实现文件列表自定义排序。
### Image Auto Upload Plugin

[Image Auto Upload Plugin](https://github.com/renmu123/obsidian-image-auto-upload-plugin)可将图片直接拖入Obsidian中，并调用Picgo会自动完成上传功能。

### Awesome Image

[Awesome Image](https://github.com/AwesomeDog/obsidian-awesome-image)我主要使用他的图片预览功能，可以避免Obsidian无法放大缩小查看图片的缺陷。

### Mindmap NextGen

[Mindmap NextGen](https://github.com/james-tindal/obsidian-mindmap-nextgen)看标题也知道是干嘛的了，使用 [Markmap](https://markmap.js.org/) 以思维导图的形式查看笔记。

### Codeblock Customizer

[Codeblock Customizer](https://github.com/mugiwara85/CodeblockCustomizer)可以充分自定义代码块样式，其实我使用到的功能仅限于当前行高亮显示与半折叠代码块。

🙋‍♂️🌰：
![](https://r2.redcrew.cn/image/4e53e3bee3ea12e277729fbc6514f9f5.png)



---
#obsidian 
















