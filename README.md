# Olympic Legends Explorer

[English](README.en.md)

Olympic Legends Explorer（奥运传奇探索）是一个以奥林匹克运动会为主题的静态信息展示网站。项目使用 HTML、CSS 和少量原生 JavaScript 构建，面向浏览器直接访问，不依赖后端服务或构建工具。

网站聚焦三个展示场景：奥运主题首页、运动员检索与人物故事、经典奥运赛事回顾。仓库同时保留了奥运数据 CSV 归档，便于后续扩展检索、数据可视化或动态页面功能。

## 在线入口

仓库根目录的 `index.html` 会自动跳转到主站页面：

```text
Olympic/index.html
```

在 GitHub Pages 中可直接选择从仓库根目录发布；本地预览时也可以直接用浏览器打开 `index.html` 或 `Olympic/index.html`。

## 功能概览

- 首页：以奥运主视觉、关键数字、内容入口和精选人物构成项目入口。
- 搜索页：支持按运动员姓名跳转到对应详情区块。
- 运动员详情页：展示马龙、尤塞恩·博尔特、刘翔的代表性成绩、图片和奥林匹克官网链接。
- 赛事记录页：回顾 1984 洛杉矶、1992 巴塞罗那、2000 悉尼、2008 北京、2012 伦敦等经典奥运会，并展示奖牌榜、吉祥物和赛事亮点。
- 数据归档：`data/archive/` 保留运动员、奖牌、赛程、项目、场馆等 CSV 数据。

## 项目结构

| 路径 | 说明 |
| --- | --- |
| `index.html` | GitHub Pages 和本地访问的根入口，会跳转到主站页面。 |
| `Olympic/index.html` | 网站首页与项目主入口。 |
| `Olympic/search.html` | 运动员搜索页面。 |
| `Olympic/athlete.html` | 运动员详情页面。 |
| `Olympic/html/event.html` | 经典奥运赛事记录页面。 |
| `Olympic/Wstyle.css` | 主页面、搜索页和运动员页共用样式。 |
| `Olympic/picture/` | 首页和运动员页面使用的图片资源。 |
| `Olympic/html/` | 赛事记录页面及其图片资源。 |
| `data/archive/` | 奥运相关 CSV 数据归档。 |

## 本地使用

直接在浏览器中打开：

```text
index.html
```

或使用任意静态文件服务器：

```bash
python3 -m http.server 8000
```

然后访问：

```text
http://localhost:8000/
```

## 数据与素材

页面中的部分图片、文本链接和奥运资料引用自公开网络资源或奥林匹克官网链接。仓库中的 MIT License 适用于本项目代码和文档；第三方数据、图片和外部内容仍遵循其原始来源的许可与使用条款。

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
