import { defineConfig } from "vuepress/config";
import navbar from "./navbar";
import sidebar from "./sidebar";
import footer from "./footer";


const author = "GPT训练师";
const domain = "https://lovechatgpt.netlify.app";
const tags = ["AI学习路线", "编程知识百科", "GPT5", "升级GPT"];


export default defineConfig({
  title: "ChatGPT使用指南",
  description: "分享前沿的AI使用技术，现在包括Onlyfans，ChatGPT注册，GPT升级，幻兽帕鲁服务器，多种方案应有尽有。",
  head: [
    // 站点图标
    ["link", { rel: "icon", href: "/favicon.ico" }],
    // SEO
    [
      "meta",
      {
        name: "keywords",
        content:
          "GPT训练师, AI学习路线, 编程知识百科,GPT4,GPT5,升级GPT，Onlyfans",
      },
    ],
    [
      "meta",
      {
        name: "google-site-verification",
        content: "duhaMEIkkhD4IpsK0yRuny_HzX1-4bkyUdmw9f2feZQ"
      }
    ],
    [
      "meta",
      {
        name: "msvalidate.01",
        content: "C64B0333B5F74E1F660ED1BC1218CC80"
      }
    ],
    [
      "meta",
      {
        name: "sogou_site_verification",
        content: "CdMKrNjlwO"
      }
    ],
    // 百度统计
    [
      "script",
      {},
      `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?a4641e11ce8004c57c32a25231e5a7fd";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
      `,
    ],
  ],
  permalink: "/:slug",

  // 监听文件变化，热更新
  extraWatchFiles: [".vuepress/*.ts", ".vuepress/sidebars/*.ts"],
  markdown: {
    // 开启代码块的行号
    lineNumbers: true,
    // 支持 4 级以上的标题渲染
    extractHeaders: ["h2", "h3", "h4", "h5", "h6"],
  },
  // @ts-ignore
  plugins: [

    ["@vuepress/back-to-top"],
    // Google 分析
    [
      "@vuepress/google-analytics",
      {
        ga: "G-7GKQEKQ9M1", // 补充自己的谷歌分析 ID，比如 UA-00000000-0
      },
    ],
    ["@vuepress/medium-zoom"],
    // https://github.com/lorisleiva/vuepress-plugin-seo
    [
      "seo",
      {
        siteTitle: (_, $site) => $site.title,
        title: ($page) => $page.title,
        description: ($page) =>
          $page.frontmatter.description || $page.description,
        author: (_, $site) => $site.themeConfig.author || author,
        tags: ($page) => $page.frontmatter.tags || tags,
        type: ($page) => "article",
        url: (_, $site, path) =>
          ($site.themeConfig.domain || domain || "") + path,
        image: ($page, $site) =>
          $page.frontmatter.image &&
          (($site.themeConfig.domain &&
            !$page.frontmatter.image.startsWith("http")) ||
            "") + $page.frontmatter.image,
        publishedAt: ($page) =>
          $page.frontmatter.date && new Date($page.frontmatter.date),
        modifiedAt: ($page) => $page.lastUpdated && new Date($page.lastUpdated),
      },
    ],
    // https://github.com/ekoeryanto/vuepress-plugin-sitemap
    [
      "sitemap",
      {
        hostname: domain,
      },
    ],
    // https://github.com/IOriens/vuepress-plugin-baidu-autopush
    ["vuepress-plugin-baidu-autopush"],
    // https://github.com/zq99299/vuepress-plugin/tree/master/vuepress-plugin-tags
    ["vuepress-plugin-tags"],
    // https://github.com/znicholasbrown/vuepress-plugin-code-copy
    [
      "vuepress-plugin-code-copy",
      {
        successText: "代码已复制",
      },
    ],
    // https://github.com/webmasterish/vuepress-plugin-feed
    [
      "feed",
      {
        canonical_base: domain,
        count: 10000,
        // 需要自动推送的文档目录
        posts_directories: [],
      },
    ],
    // https://github.com/tolking/vuepress-plugin-img-lazy
    ["img-lazy"],
    [
        "@vssue/vuepress-plugin-vssue",
      {
        platform: 'github', //v3的platform是github，v4的是github-v4
        locale: 'zh', //语言
        // 其他的 Vssue 配置
        owner: 'summerhoilday', //github账户名
        repo: 'lovechatgpt.github.io', //github一个项目的名称
        clientId: 'c277a5b8b516ad7ffd38',//注册的Client ID
        clientSecret: '844f27992fed3aa131c3529d5a7327107188179b',//注册的Client Secret
        autoCreateIssue:true // 自动创建评论，默认是false，最好开启，这样首次进入页面的时候就不用去点击创建评论的按钮了。
      },
    ],
    // [
    //   "comment1",
    //   {
    //     // 插件选项
    //     type: "waline",
    //     serverURL:"https://blog-review-2ikgws1lv-summerhoildays-projects.vercel.app/"
    //   },
    // ],

  ],
  // 主题配置
  themeConfig: {
    logo: "/logo.png",
    nav: navbar,

    lastUpdated: "最近更新",



    // 编辑链接
    editLinks: true,
    editLinkText: "完善页面",

    // @ts-ignore
    // 底部版权信息
    footer,

  },
});
