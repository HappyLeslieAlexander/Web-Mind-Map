(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21e399"],{d53e:function(_,v,s){"use strict";s.r(v);var t=function(){var _=this;_._self._c;return _._m(0)},a=[function(){var _=this,v=_._self._c;return v("div",[v("h1",[_._v("Formula 插件")]),v("blockquote",[v("p",[_._v("v0.7.2+")])]),v("blockquote",[v("p",[_._v("该插件仅在富文本模式下支持，所以需要在注册了RichText插件的前提下使用")])]),v("p",[_._v("该插件用于支持给节点插入公式。")]),v("blockquote",[v("p",[_._v("注意：公式是通过"),v("a",{attrs:{href:"https://github.com/KaTeX/KaTeX"}},[_._v("KaTeX")]),_._v("库实现的，"),v("code",[_._v("KaTeX")]),_._v("提供了一些配置，插件默认的一个配置是：")])]),v("pre",{staticClass:"hljs"},[v("code",[_._v("{\n    "),v("span",{staticClass:"hljs-attr"},[_._v("output")]),_._v(": "),v("span",{staticClass:"hljs-string"},[_._v("'mathml'")]),_._v("\n}\n")])]),v("blockquote",[v("p",[_._v("这在少数浏览器上公式可能无法成功渲染，如果你需要兼容这部分浏览器，你可以考虑把该配置改为"),v("code",[_._v("html")]),_._v("，详细文档可以参考："),v("a",{attrs:{href:"https://katex.org/docs/options"}},[_._v("Options")]),_._v("。使用这个配置可能还需要再引入"),v("code",[_._v("KaTeX")]),_._v("的样式文件，你可以自行测试。")])]),v("blockquote",[v("p",[_._v("v.0.9.3+版本内部会判断当前浏览器的Chrome内核版本是否低于100，是的话会自动将"),v("code",[_._v("output")]),_._v("由"),v("code",[_._v("mathml")]),_._v("转为"),v("code",[_._v("html")]),_._v("，此时需要引入"),v("code",[_._v("KaTeX")]),_._v("的样式文件，库内部没有引入，所以需要你手动在项目中引入。如果你是通过"),v("code",[_._v("npm")]),_._v("方式引入"),v("code",[_._v("simple-mind-map")]),_._v("，那么你可以这么引入：")]),v("pre",{staticClass:"hljs"},[v("code",[v("span",{staticClass:"hljs-keyword"},[_._v("import")]),_._v(" "),v("span",{staticClass:"hljs-string"},[_._v("'simple-mind-map/node_modules/katex/dist/katex.min.css'")]),_._v("\n")])]),v("p",[_._v("如果你使用的是"),v("code",[_._v(".umd.js")]),_._v("、"),v("code",[_._v(".esm.js")]),_._v("之类的打包后的文件，那么可以通过在线的CDN服务来引入，比如："),v("code",[_._v("https://unpkg.com/browse/katex@0.16.9/dist/")]),_._v("，当然，最好是把"),v("code",[_._v("katex")]),_._v("的"),v("code",[_._v("css")]),_._v("文件，以及对应的"),v("code",[_._v("fonts")]),_._v("目录下的字体文件上传到你自己的服务器上。")])]),v("blockquote",[v("p",[_._v("v0.10.3+版本会默认引入"),v("code",[_._v("KaTeX")]),_._v("的样式文件。所以你无需再手动引入。当"),v("code",[_._v("Katex")]),_._v("库的渲染模式为"),v("code",[_._v("html")]),_._v("时它会依赖一些字体文件，插件并不包含这些文件，你需要通过"),v("code",[_._v("katexFontPath")]),_._v("实例化选项来设置字体文件的路径。")])]),v("h2",[_._v("问题")]),v("p",[_._v("1.在有的浏览器上显示的是公式源码")]),v("p",[_._v("这是因为有的浏览器不支持"),v("code",[_._v("KaTex")]),_._v("库的"),v("code",[_._v("mathml")]),_._v("输出模式，可以通过"),v("code",[_._v("getKatexOutputType")]),_._v("实例化选项来将输出模式改为"),v("code",[_._v("html")]),_._v("。")]),v("p",[_._v("2.有时公式和文本会换行显示")]),v("p",[_._v("这一般是因为公式渲染使用的是"),v("code",[_._v("html")]),_._v("模式，这种模式依赖于字体文件，所以当字体文件没有加载完就渲染思维导图时，计算出来的公式内容大小和加载完字体文件后的实际公式大小不一致导致换行，可以想办法让字体文件加载完成后再渲染思维导图。")]),v("p",[_._v("3.在一个浏览器上导出的svg文件在另一个浏览器上打开样式不一致")]),v("p",[_._v("因为计算节点大小时是依赖浏览器的代理样式的，不同浏览器默认样式不一致，所以计算出来的节点大小也不一致。")]),v("p",[_._v("4.在一个浏览器上导出的smm或json文件在另一个浏览器上导入无法正常渲染")]),v("p",[_._v("因为有的浏览器可能是使用"),v("code",[_._v("mathml")]),_._v("模式渲染的，有的可能是"),v("code",[_._v("html")]),_._v("模式渲染的，通常支持"),v("code",[_._v("mathml")]),_._v("模式的肯定支持"),v("code",[_._v("html")]),_._v("，反过来则不行。")]),v("p",[_._v("5.在使用"),v("code",[_._v("html")]),_._v("模式渲染时导出图片公式异常")]),v("p",[_._v("这个因为没有加载字体导致的，目前没有解决方法。")]),v("h2",[_._v("注册")]),v("pre",{staticClass:"hljs"},[v("code",[v("span",{staticClass:"hljs-keyword"},[_._v("import")]),_._v(" MindMap "),v("span",{staticClass:"hljs-keyword"},[_._v("from")]),_._v(" "),v("span",{staticClass:"hljs-string"},[_._v("'simple-mind-map'")]),_._v("\n"),v("span",{staticClass:"hljs-keyword"},[_._v("import")]),_._v(" Formula "),v("span",{staticClass:"hljs-keyword"},[_._v("from")]),_._v(" "),v("span",{staticClass:"hljs-string"},[_._v("'simple-mind-map/src/plugins/Formula.js'")]),_._v("\n\nMindMap.usePlugin(Formula)\n")])]),v("p",[_._v("注册完且实例化"),v("code",[_._v("MindMap")]),_._v("后可通过"),v("code",[_._v("mindMap.formula")]),_._v("获取到该实例。")]),v("h2",[_._v("使用")]),v("p",[_._v("注册了该插件后，可以使用命令"),v("code",[_._v("INSERT_FORMULA")]),_._v("来给节点插入指定公式：")]),v("pre",{staticClass:"hljs"},[v("code",[_._v("mindMap.execCommand("),v("span",{staticClass:"hljs-string"},[_._v("'INSERT_FORMULA'")]),_._v(", "),v("span",{staticClass:"hljs-string"},[_._v("'a^2'")]),_._v(")\n")])]),v("p",[_._v("上述命令会给当前激活的节点插入"),v("code",[_._v("a^2")]),_._v("公式。")]),v("p",[_._v("如果要指定给某个或某些节点插入公式，可以传递第二个参数：")]),v("pre",{staticClass:"hljs"},[v("code",[_._v("mindMap.execCommand("),v("span",{staticClass:"hljs-string"},[_._v("'INSERT_FORMULA'")]),_._v(", "),v("span",{staticClass:"hljs-string"},[_._v("'a^2'")]),_._v(", [Node])\n")])]),v("p",[_._v("通过第二个参数传入指定的节点实例即可。")]),v("h2",[_._v("方法")]),v("h3",[_._v("getKatexConfig()")]),v("p",[_._v("获取当前传递给"),v("code",[_._v("Katex")]),_._v("的配置。")])])}],e={},o=e,c=s("2877"),l=Object(c["a"])(o,t,a,!1,null,null,null);v["default"]=l.exports}}]);