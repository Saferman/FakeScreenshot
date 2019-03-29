(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-a3ed"],{"6uZQ":function(t,a,i){"use strict";i.r(a);var s=i("4d7F"),e=i.n(s),n=i("lR8Q"),c=i.n(n),l={data:function(){return{dialogVisible:!1,title:"关于本项目：虚假截图/FakeScreenshot",edit:!1,upname:"鲁迅",uptype:"up主",ovtenum:1,focusnum:1,content:"\n      「1」\n      之前玩知乎的时候，凑过不少“热闹”。我发现了一个现象：如果某答主在发表对某事的看法时，附带了截图的话，那么往往就能吸引不少“赞同”。因为人们下意识地认为“既然都有截图，那么情况十有八九就是这样吧”。\n      好（wu）玩（yu）的是，有两次我还专门撰写了答案，用我伪造的一些荒唐的截图（让人一看就觉得是假的）来提醒其他用户：不要轻易相信高赞答主提供的“所谓截图证据”。\n      但是...\n      我的回答迅速淹没在洪流中，沉了...\n      那时，我的心情是复杂的...\n      「2」\n      我基本每天都会上网，也有每天在不同渠道看新闻的习惯。当我看到一些明显真实性存疑的东西被广泛传播时，我就很烦，想骂人，想质问他们转发前为什么不先自己去证实下真伪？但理智上说，我也非常清楚：“现实就是这样。因为现在人们每天接受的信息太多，且求证的难度也太高，所以就极少会有人去求证”。这个事实很让人沮丧。所以寒假在家时我就在想：关于这个，作为程序员的我，能做些什么？\n      「3」\n      我最先想到的其实并不是「FakeScreenshot」项目，而是：运营一个专门替别人“求证”某事真实性的微博账户。当然，也不是所有的事情我都可以“搞定”，毕竟我只是一个没有什么社会能量的普通程序员，但仍旧有一些事情我可以求证出来。不过因为近期时间已经被其他事情占用了，因此这个想法一直没有实施。后面我才想到何不做一个“截图造假”的网站，这样任何知道此网站存在的人，心里都会明白：“哦，原来各大网站截图都是可以轻易伪造的啊”。这样当他再次看到其他截图的时候，会想起来此网站的存在，然后就会下意识地怀疑截图的真实性了。\n      这也就是本项目存在的意义了！\n      ",follownum:1,msgnum:1,canvas:"",time:"2019年03月10日 18:31:37",mentionPerson:"",isMentioned:!1,picture:"http://cdn.aixifan.com/dotnet/artemis/u/cms/www/201903/10183608dmsp7ht0.jpg",imageUrl:""}},methods:{changetime:function(t){var a=t.target.innerHTML;console.log(a),this.time=a},download:function(){var t=document.getElementById("download"),a=document.querySelector("canvas").toDataURL("image/png").replace("image/png","image/octet-stream");t.setAttribute("href",a)},showImage:function(){var t=document.querySelector("#image-container");t.childNodes.length&&t.removeChild(t.childNodes[0]),t.appendChild(this.canvas)},changeMessage:function(t){var a=t.target.innerHTML;this.msgnum=a},changeContent:function(t){var a=t.target.innerHTML;this.title=a},changeContentd:function(t){},changeupname:function(t){this.upname=t.target.innerHTML},changeupfollow:function(t){this.follownum=t.target.innerHTML},changeupfocus:function(t){this.focusnum=t.target.innerHTML},changeupvote:function(t){this.ovtenum=t.target.innerHTML},changeuptype:function(t){},changeMode:function(){this.edit=!this.edit},handlePicSuccess:function(t,a){this.picture=URL.createObjectURL(a.raw)},random:function(){var t=list[Math.floor(Math.random()*list.length)];this.nickname=t.nickname,this.content=t.content},getBase64:function(t){return new e.a(function(a,i){var s=new FileReader;s.readAsDataURL(t),s.onload=function(){return a(s.result)},s.onerror=function(t){return i(t)}})},beforePicUpload:function(t){var a=this;this.getBase64(t).then(function(t){a.picture=t})},generageScreenShot:function(){var t=this,a=document.querySelector("#DIV_1"),i=a.offsetWidth,s=a.offsetHeight;c()(a,{allowTaint:!0,useCORS:!0,height:s,width:i}).then(function(a){t.canvas=a,t.dialogVisible=!0})}}},r=(i("pDI0"),i("K9pU"),i("KHd+")),d=Object(r.a)(l,function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("div",{staticClass:"toolbard"},[i("el-button",{attrs:{type:"primary",icon:"el-icon-edit",size:"medium",plain:""},on:{click:t.changeMode}},[t._v(t._s(t.edit?"确认":"编辑内容"))]),t._v(" "),i("el-button",{attrs:{type:"success",icon:"el-icon-success",size:"medium",plain:""},on:{click:t.generageScreenShot}},[t._v("生成截图")]),t._v(" "),i("el-upload",{attrs:{"show-file-list":!1,action:"","on-success":t.handlePicSuccess,"before-upload":t.beforePicUpload}},[i("el-button",{attrs:{type:"warning",icon:"el-icon-success",size:"medium",plain:""}},[t._v("更换头像")])],1)],1),t._v(" "),i("div",{attrs:{id:"DIV_1"}},[i("div",{staticClass:"header clearfix",attrs:{id:"header"}},[i("nav",{staticClass:"wp nav",attrs:{id:"nav"}},[i("div",{staticClass:"clearfix wp nav-parent"},[t._m(0),t._v(" "),i("ol",{staticClass:"fr header-guide",attrs:{id:"header-guide"}},[i("li",{staticClass:"guide-item guide-user user-logined"},[t._m(1),t._v(" "),i("a",{staticClass:"item user-login",attrs:{target:"_blank"}},[t._v("登录/注册")]),t._v(" "),i("span",{staticClass:"user-message-count",attrs:{contenteditable:t.edit},domProps:{innerHTML:t._s(t.msgnum)},on:{input:t.changeMessage}},[t._v("2")]),t._v(" "),t._m(2)]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5)]),t._v(" "),t._m(6)])])]),t._v(" "),i("div",{staticClass:"main",attrs:{id:"main"}},[i("section",{staticClass:"clearfix area contentBottom wp"},[i("section",{staticClass:"clearfix wp area head"}),t._v(" "),i("div",{staticClass:"content wp clearfix area"},[i("div",{staticClass:"fl"},[i("section",{staticClass:"art-title"},[i("div",{staticClass:"art-title-head"},[i("div",{staticClass:"caption",attrs:{contenteditable:t.edit},domProps:{innerHTML:t._s(t.title)},on:{input:t.changeContent}},[t._v("客观分析为什么【旗水卡卡东】会被喷成狗")]),t._v(" "),t._m(7),t._v(" "),i("div",{staticClass:"emoji",staticStyle:{"background-image":'url("http://imgs.aixifan.com/cms/2017_11_07/1510048135861.png")'}})])]),t._v(" "),t._m(8),t._v(" "),i("section",{attrs:{id:"article-content"}},[i("div",{attrs:{id:"article-up"}},[i("div",{staticClass:"up-abstract"},[i("div",{staticClass:"up-name"},[i("div",{staticClass:"upname",attrs:{contenteditable:t.edit},domProps:{innerHTML:t._s(t.upname)},on:{input:t.changeupname}},[t._v("愤怒的鸡儿")]),t._v(" "),i("div",{staticClass:"up-type",attrs:{contenteditable:t.edit},domProps:{innerHTML:t._s(t.uptype)},on:{input:t.changeuptype}},[t._v("UP主")]),t._v(" "),i("span",{staticClass:"watermark"},[t._v("")])]),t._v(" "),i("div",{staticClass:"up-time",attrs:{contenteditable:t.edit},domProps:{innerHTML:t._s(t.time)},on:{input:t.changetime}},[t._v("2019年03月10日 18:31:37")])]),t._v(" "),t._m(9)]),t._v(" "),i("div",{attrs:{id:"article-answer"}}),t._v(" "),i("div",{staticClass:"clearfix",attrs:{id:"article-tags"}}),t._v(" "),i("div",{staticClass:"article-content"},[i("div",{staticStyle:{width:"100%",height:"100%",padding:"18px 12px 0px 10px","box-sizing":"border-box","font-size":"14px","font-family":"PingFangSC-Regular",color:"rgb(51, 51, 51)"}},[i("div",{staticStyle:{"font-size":"14px","white-space":"pre-wrap"},attrs:{contenteditable:t.edit},domProps:{innerHTML:t._s(t.content)},on:{input:t.changeContentd}})])]),t._v(" "),t._m(10)])]),t._v(" "),i("div",{staticClass:"fr"},[i("section",{attrs:{id:"up-info"}},[i("div",{staticClass:"up-detail"},[i("img",{staticClass:"upcover",attrs:{src:t.picture,alt:""}}),t._v(" "),i("a",{staticClass:"upname",attrs:{target:"_blank"}},[i("p",{staticClass:"name float",attrs:{contenteditable:t.edit},domProps:{innerHTML:t._s(t.upname)},on:{input:t.changeupname}},[t._v(t._s(t.upname))]),t._v(" "),i("p",{staticClass:"desc"})])]),t._v(" "),i("ul",{staticClass:"up-census"},[i("li",{staticClass:"vote"},[i("div",{staticClass:"count",attrs:{contenteditable:t.edit},domProps:{innerHTML:t._s(t.ovtenum)},on:{input:t.changeupvote}},[t._v("1")]),t._v(" "),i("div",{staticClass:"type"},[t._v("投稿")])]),t._v(" "),i("li",{staticClass:"focus",attrs:{"data-status":"0"}},[i("div",{staticClass:"count",attrs:{contenteditable:t.edit},domProps:{innerHTML:t._s(t.focusnum)},on:{input:t.changeupfocus}},[t._v("2")]),t._v(" "),i("div",{staticClass:"type"},[t._v("关注")])]),t._v(" "),i("li",{staticClass:"follow"},[i("div",{staticClass:"count",attrs:{contenteditable:t.edit},domProps:{innerHTML:t._s(t.follownum)},on:{input:t.changeupfollow}},[t._v("4")]),t._v(" "),i("div",{staticClass:"type"},[t._v("粉丝")])])]),t._v(" "),t._m(11)]),t._v(" "),i("section",{attrs:{id:"up-contributions","data-impr-config":'{"id":"article-new-contribute","selector":".weblog-item","pullid":"5277176762D636AF","reqid":"5277176762D636AF_76cf5f6fc32a6b5cc05d461e935e381d_article-new-contribute"}'}},[t._m(12),t._v(" "),i("div",{staticClass:"contributions"},[i("div",{staticClass:"contribution weblog-item",attrs:{"data-show":"true"}},[i("p",{staticClass:"contb-title tit"},[i("a",{attrs:{target:"blank",contenteditable:t.edit,"data-wbinfo":'{"atomid":5010673,"mediaId":5010673}'},domProps:{innerHTML:t._s(t.title)},on:{input:t.changeContent}})]),t._v(" "),t._m(13)])])]),t._v(" "),t._m(14),t._v(" "),t._m(15)])])])])]),t._v(" "),i("el-dialog",{attrs:{title:"",visible:t.dialogVisible,width:"95%",top:"2vh"},on:{"update:visible":function(a){t.dialogVisible=a},opened:t.showImage}},[i("div",{attrs:{id:"image-container"}}),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("a",{attrs:{id:"download",download:"shuirong.png"}},[i("el-button",{attrs:{type:"primary"},on:{click:t.download}},[t._v("下载图片")])],1)])])],1)},[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("ul",{staticClass:"fl"},[i("h1",{staticClass:"fl logo"},[i("a",[i("img",{attrs:{src:"http://cdn.aixifan.com/acfun-pc/2.6.48/img/logo.png",width:"88",height:"27"}})])]),t._v(" "),i("li",{attrs:{"data-category":"112","data-cid":"177"}},[i("a",[t._v("AC正义")])]),t._v(" "),i("li",{attrs:{"data-category":"105","data-cid":"155"}},[i("a",[t._v("番剧")])]),t._v(" "),i("li",{attrs:{"data-category":"14","data-cid":"1"}},[i("a",[t._v("动画")])]),t._v(" "),i("li",{attrs:{"data-category":"16","data-cid":"58"}},[i("a",[t._v("音乐")])]),t._v(" "),i("li",{attrs:{"data-category":"17","data-cid":"123"}},[i("a",[t._v("舞蹈·偶像")])]),t._v(" "),i("li",{attrs:{"data-category":"15","data-cid":"59"}},[i("a",[t._v("游戏")])]),t._v(" "),i("li",{attrs:{"data-category":"18","data-cid":"60"}},[i("a",[t._v("娱乐")])]),t._v(" "),i("li",{attrs:{"data-category":"19","data-cid":"70"}},[i("a",[t._v("科技")])]),t._v(" "),i("li",{attrs:{"data-category":"20","data-cid":"68"}},[i("a",[t._v("影视")])]),t._v(" "),i("li",{attrs:{"data-category":"21","data-cid":"69"}},[i("a",[t._v("体育")])]),t._v(" "),i("li",{attrs:{"data-category":"22","data-cid":"125"}},[i("a",[t._v("鱼塘")])]),t._v(" "),i("li",{attrs:{"data-category":"24","data-cid":"63"}},[i("a",[t._v("文章")])]),t._v(" "),i("li",{attrs:{"data-category":"25","data-cid":"0"}},[i("a",[t._v("合辑")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("a",{staticClass:"user-avatar item",staticStyle:{display:"inline"},attrs:{target:"_blank"}},[a("img",{attrs:{src:"http://cdn.aixifan.com/dotnet/20120923/style/image/avatar.jpg",width:"30",height:"30"}})])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"guide-item-con"},[i("p",{staticClass:"clearfix"},[i("a",{staticClass:"fl user-name",attrs:{target:"_blank"}},[t._v("还能咋地啊")]),t._v(" "),i("a",{staticClass:"fr icon icon-logout user-logout"},[t._v("退出")])]),t._v(" "),i("div",{staticClass:"user-message",attrs:{id:"user-message"}},[i("ul",{attrs:{id:"user-message-con","data-count":"2","data-url":"http://www.acfun.cn/member/#area=push"}},[i("li",[i("a",{staticClass:"unit",attrs:{target:"_blank"}},[t._v("\n                        您有\n                        "),i("span",{staticClass:"pts"},[t._v("2")]),t._v("条新推送\n                      ")])])])]),t._v(" "),i("a",{staticClass:"more",attrs:{target:"_blank"}},[t._v("查看更多")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",{staticClass:"guide-item guide-history"},[a("a",{staticClass:"icon icon-history item",attrs:{target:"_blank"}}),this._v(" "),a("div",{staticClass:"guide-item-con"},[a("ul"),this._v(" "),a("a",{staticClass:"more",attrs:{target:"_blank"}},[this._v("查看更多")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",{staticClass:"guide-item guide-upload"},[a("a",{staticClass:"icon icon-upload item",attrs:{target:"_blank"}}),this._v(" "),a("div",{staticClass:"guide-item-con"},[a("ul",[a("li",[a("a",{attrs:{target:"_blank"}},[this._v("投视频")])]),this._v(" "),a("li",[a("a",{attrs:{target:"_blank"}},[this._v("投文章")])])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("li",{staticClass:"guide-item"},[a("a",{staticClass:"icon icon-collect item",attrs:{target:"_blank"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"fr search-box",attrs:{id:"search-box"}},[a("form",{attrs:{id:"search-form",target:"_blank",method:"get",action:"http://www.acfun.cn/search/"}},[a("input",{attrs:{id:"search-text",type:"text",placeholder:"【AGN】鬼泣5 ACer自己的评测","data-url":"http://www.acfun.cn/a/ac5001046",value:"",autocomplete:"off",maxlength:"30"}}),this._v(" "),a("button",{staticClass:"search-btn",attrs:{id:"search-btn"}},[a("i",{staticClass:"icon icon-search"}),this._v(" "),a("span",[this._v("搜索")])]),this._v(" "),a("div",{staticClass:"search-result hidden"})])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"art-title-census"},[i("div",{staticClass:"article-parent"},[i("a",{staticClass:"art-channel",attrs:{target:"_blank"}},[t._v("文章")]),t._v(" "),i("span",[t._v(" > ")]),t._v(" "),i("a",{staticClass:"sort-channel",attrs:{target:"_blank"}},[t._v("生活情感")]),t._v(" "),i("span",[t._v(" > ")]),t._v(" "),i("a",{staticClass:"sort-channel",attrs:{target:"_blank"}},[t._v("吐槽")])]),t._v(" "),i("div",{staticClass:"census-left"},[i("div",{staticClass:"viewcount"},[i("span",[t._v("阅读量：")]),t._v(" "),i("span",{staticClass:"quanity"},[t._v("1.0万")])]),t._v(" "),i("div",{staticClass:"comcount"},[i("span",[t._v("评论：")]),t._v(" "),i("span",{staticClass:"quanity"},[t._v("313")])])]),t._v(" "),i("div",{staticClass:"census-right"},[i("div",{staticClass:"collectcount"},[i("i",{staticClass:"icon"}),t._v(" "),i("span",[t._v("60")])]),t._v(" "),i("div",{staticClass:"bananacount"},[i("i",{staticClass:"icon"}),t._v(" "),i("span",[t._v("7")])]),t._v(" "),i("div",{staticClass:"sharecount"},[i("i",{staticClass:"icon"}),t._v(" "),i("div",{staticClass:"sharehead"},[i("p",[t._v("分享文章到")]),t._v(" "),i("div",{staticClass:"share_box bdsharebuttonbox bdshare-button-style0-16",attrs:{id:"bdshare1","data-bd-bind":"1552284271746"}},[i("a",{staticClass:"bds_tsina",attrs:{title:"分享到新浪微博","data-cmd":"tsina","data-plat":"WEIBO"}}),t._v(" "),i("a",{staticClass:"bds_qzone",attrs:{title:"分享到QQ空间","data-cmd":"qzone","data-plat":"QQ_FRIENDZONE"}}),t._v(" "),i("a",{staticClass:"bds_tieba",attrs:{title:"分享到百度贴吧","data-cmd":"tieba","data-plat":"OTHER"}}),t._v(" "),i("a",{staticClass:"bds_weixin",attrs:{title:"分享到微信朋友圈","data-cmd":"weixin","data-plat":"WECHAT_FRIENDZONE"}}),t._v(" "),i("span",{staticClass:"clearfix"})])])])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("section",{staticClass:"art-subject"},[a("div",{staticClass:"clearfix",attrs:{id:"filter"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"action-up"},[a("a",{staticClass:"message-back"},[this._v("回复")]),this._v(" "),a("a",[this._v("举报")])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"clearfix",attrs:{id:"article-operation"}},[i("div",{attrs:{id:"art-operate"}},[i("div",{staticClass:"art-collect"},[i("div",{staticClass:"icon"},[i("div",{staticClass:"img"})]),t._v(" "),i("span",{staticClass:"collect",attrs:{"data-status":"0"}},[t._v("收藏")])]),t._v(" "),i("div",{staticClass:"art-banana"},[i("div",{staticClass:"icon"},[i("div",{staticClass:"img"}),t._v(" "),i("div",{staticClass:"push1"})]),t._v(" "),i("span",{staticClass:"banana",attrs:{"data-status":"0"}},[t._v("投蕉")])]),t._v(" "),i("div",{staticClass:"art-attitude"},[i("div",{staticClass:"icon",staticStyle:{"background-image":'url("http://imgs.aixifan.com/cms/2017_11_07/1510048135861.png")'}}),t._v(" "),i("span",{staticClass:"attitude"},[t._v("你的态度")]),t._v(" "),i("div",{staticClass:"clearfix",attrs:{id:"attitude-all"}},[i("li",{staticClass:"atd lazy",staticStyle:{"background-image":'url("http://imgs.aixifan.com/cms/2017_11_07/1510048135861.png")',display:"list-item"},attrs:{"data-original":"http://imgs.aixifan.com/cms/2017_11_07/1510048135861.png","at-index":"0","at-id":"1",title:"at01"}}),t._v(" "),i("li",{staticClass:"atd lazy",staticStyle:{"background-image":'url("http://imgs.aixifan.com/cms/2017_11_07/1510048383512.png")',display:"list-item"},attrs:{"data-original":"http://imgs.aixifan.com/cms/2017_11_07/1510048383512.png","at-index":"1","at-id":"2",title:"at02"}}),t._v(" "),i("li",{staticClass:"atd lazy",staticStyle:{"background-image":'url("http://imgs.aixifan.com/cms/2017_11_07/1510048389889.png")',display:"list-item"},attrs:{"data-original":"http://imgs.aixifan.com/cms/2017_11_07/1510048389889.png","at-index":"2","at-id":"3",title:"at03"}}),t._v(" "),i("li",{staticClass:"atd lazy",staticStyle:{"background-image":'url("http://imgs.aixifan.com/cms/2017_11_07/1510048397323.png")',display:"list-item"},attrs:{"data-original":"http://imgs.aixifan.com/cms/2017_11_07/1510048397323.png","at-index":"3","at-id":"4",title:"at04"}}),t._v(" "),i("li",{staticClass:"atd lazy",staticStyle:{"background-image":'url("http://imgs.aixifan.com/cms/2017_11_07/1510048932099.png")',display:"list-item"},attrs:{"data-original":"http://imgs.aixifan.com/cms/2017_11_07/1510048932099.png","at-index":"4","at-id":"5",title:"at05"}}),t._v(" "),i("li",{staticClass:"atd lazy",staticStyle:{"background-image":'url("http://imgs.aixifan.com/cms/2017_11_07/1510048413184.png")',display:"list-item"},attrs:{"data-original":"http://imgs.aixifan.com/cms/2017_11_07/1510048413184.png","at-index":"5","at-id":"6",title:"at06"}}),t._v(" "),i("li",{staticClass:"atd lazy",staticStyle:{"background-image":'url("http://imgs.aixifan.com/cms/2017_11_07/1510048421370.png")',display:"list-item"},attrs:{"data-original":"http://imgs.aixifan.com/cms/2017_11_07/1510048421370.png","at-index":"6","at-id":"7",title:"at07"}}),t._v(" "),i("li",{staticClass:"atd lazy",staticStyle:{"background-image":'url("http://imgs.aixifan.com/cms/2017_11_07/1510049022057.PNG")',display:"list-item"},attrs:{"data-original":"http://imgs.aixifan.com/cms/2017_11_07/1510049022057.PNG","at-index":"7","at-id":"8",title:"at08"}}),t._v(" "),i("li",{staticClass:"atd lazy",staticStyle:{"background-image":'url("http://imgs.aixifan.com/cms/2017_11_07/1510048433787.png")',display:"list-item"},attrs:{"data-original":"http://imgs.aixifan.com/cms/2017_11_07/1510048433787.png","at-index":"8","at-id":"9",title:"at09"}}),t._v(" "),i("li",{staticClass:"atd lazy",staticStyle:{"background-image":'url("http://imgs.aixifan.com/cms/2017_11_07/1510048439352.png")',display:"list-item"},attrs:{"data-original":"http://imgs.aixifan.com/cms/2017_11_07/1510048439352.png","at-index":"9","at-id":"10",title:"at10"}}),t._v(" "),i("li",{staticClass:"atd lazy",staticStyle:{"background-image":'url("http://imgs.aixifan.com/cms/2017_11_07/1510048449031.png")',display:"list-item"},attrs:{"data-original":"http://imgs.aixifan.com/cms/2017_11_07/1510048449031.png","at-index":"10","at-id":"11",title:"at11"}}),t._v(" "),i("li",{staticClass:"atd lazy",staticStyle:{"background-image":'url("http://imgs.aixifan.com/cms/2017_11_07/1510048457101.png")',display:"list-item"},attrs:{"data-original":"http://imgs.aixifan.com/cms/2017_11_07/1510048457101.png","at-index":"11","at-id":"12",title:"at12"}}),t._v(" "),i("li",{staticClass:"atd lazy",staticStyle:{"background-image":'url("http://imgs.aixifan.com/cms/2017_11_07/1510048465023.png")',display:"list-item"},attrs:{"data-original":"http://imgs.aixifan.com/cms/2017_11_07/1510048465023.png","at-index":"12","at-id":"13",title:"at13"}}),t._v(" "),i("li",{staticClass:"atd lazy",staticStyle:{"background-image":'url("http://imgs.aixifan.com/cms/2017_11_07/1510048471249.png")',display:"list-item"},attrs:{"data-original":"http://imgs.aixifan.com/cms/2017_11_07/1510048471249.png","at-index":"13","at-id":"14",title:"at14"}}),t._v(" "),i("li",{staticClass:"atd lazy",staticStyle:{"background-image":'url("http://imgs.aixifan.com/cms/2017_11_07/1510048476850.png")',display:"list-item"},attrs:{"data-original":"http://imgs.aixifan.com/cms/2017_11_07/1510048476850.png","at-index":"14","at-id":"15",title:"at15"}}),t._v(" "),i("li",{staticClass:"atd lazy",staticStyle:{"background-image":'url("http://imgs.aixifan.com/cms/2017_11_07/1510048482297.png")',display:"list-item"},attrs:{"data-original":"http://imgs.aixifan.com/cms/2017_11_07/1510048482297.png","at-index":"15","at-id":"16",title:"at16"}}),t._v(" "),i("li",{staticClass:"atd lazy",staticStyle:{"background-image":'url("http://imgs.aixifan.com/cms/2017_11_07/1510048487509.png")',display:"list-item"},attrs:{"data-original":"http://imgs.aixifan.com/cms/2017_11_07/1510048487509.png","at-index":"16","at-id":"17",title:"at17"}}),t._v(" "),i("li",{staticClass:"atd lazy",staticStyle:{"background-image":'url("http://imgs.aixifan.com/cms/2017_11_07/1510048493240.png")',display:"list-item"},attrs:{"data-original":"http://imgs.aixifan.com/cms/2017_11_07/1510048493240.png","at-index":"17","at-id":"18",title:"at18"}})])])]),t._v(" "),i("div",{staticClass:"share_box fr bdsharebuttonbox bdshare-button-style0-16",attrs:{id:"bdshare","data-bd-bind":"1552284271746"}},[i("a",{staticClass:"bds_tsina",attrs:{title:"分享到新浪微博","data-cmd":"tsina","data-plat":"WEIBO"}}),t._v(" "),i("a",{staticClass:"bds_qzone",attrs:{title:"分享到QQ空间","data-cmd":"qzone","data-plat":"QQ_FRIENDZONE"}}),t._v(" "),i("a",{staticClass:"bds_tieba",attrs:{title:"分享到百度贴吧","data-cmd":"tieba","data-plat":"OTHER"}}),t._v(" "),i("a",{staticClass:"bds_weixin",attrs:{title:"分享到微信朋友圈","data-cmd":"weixin","data-plat":"WECHAT_FRIENDZONE"}}),t._v(" "),i("span",{staticClass:"clearfix"})]),t._v(" "),i("div",{staticClass:"share-more fr"},[t._v("\n                  分享\n                  "),i("span",{staticClass:"icon fr"})])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"up-operate"},[a("div",{staticClass:"focus"},[this._v("关注")]),this._v(" "),a("a",{staticClass:"mail",attrs:{target:"_blank"}},[this._v("私信")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"ctb-head"},[a("h1",{staticClass:"ctb-title"},[this._v("最新投稿")]),this._v(" "),a("a",{staticClass:"showall",attrs:{target:"_blank"}},[this._v("全部")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"contb-count"},[a("div",{staticClass:"view-count"},[a("i",{staticClass:"view"}),this._v(" "),a("span",{staticClass:"count num"},[this._v("1.7万")])]),this._v(" "),a("div",{staticClass:"comm-count"},[a("i",{staticClass:"comm"}),this._v(" "),a("span",{staticClass:"count num"},[this._v("313")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("section",{staticStyle:{display:"none"},attrs:{id:"up-contvideo"}},[a("h1",{staticClass:"video-head"},[this._v("稿件中的视频")]),this._v(" "),a("div",{staticClass:"videolist"}),this._v(" "),a("script",{attrs:{type:"text/template",id:"article-video"}},[this._v('\n                <div class="video-temp">\n                <div data-original="[url]" style="background-image:url()" class="video-img">\n               \n                </div>\n                \n                <div class="video-count">\n                  <div class="view-bonus">\n                    <i class="view" />\n                    <span class="bonus num">[view_bonus]</span>\n                  </div>\n                  <div class="comm-bonus">\n                    <i class="comm"> </i>\n                    <span class="bonus num">[comm_bonus]</span>\n                  </div>\n                </div>\n              </div>;\n            ')])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("section",{attrs:{id:"realate-article","data-impr-config":'{"id":"article-relate-contribute","selector":".weblog-item","pullid":"7107727059A6FC28","reqid":"7107727059A6FC28_76cf5f6fc32a6b5cc05d461e935e381d_article-relate-contribute"}'}},[i("div",{staticClass:"relate-head"},[t._v("相关文章")]),t._v(" "),i("div",{staticClass:"relate-list"},[i("div",{staticClass:"relate-temp weblog-item",attrs:{"data-show":"true"}},[i("div",{staticClass:"relate-title tit"},[i("a",{attrs:{target:"blank","data-wbinfo":'{"atomid":"ac1040781","mediaId":"ac1040781"}'}},[t._v("俄罗斯“冰王子”普鲁申科宣布退役")])]),t._v(" "),i("div",{staticClass:"relate-total"},[i("div",{staticClass:"view-total"},[i("i",{staticClass:"view"}),t._v(" "),i("span",{staticClass:"total num"},[t._v("1.6万")])]),t._v(" "),i("div",{staticClass:"comm-total"},[i("i",{staticClass:"comm"}),t._v(" "),i("span",{staticClass:"total num"},[t._v("36")])])])]),t._v(" "),i("div",{staticClass:"relate-temp weblog-item",attrs:{"data-show":"true"}},[i("div",{staticClass:"relate-title tit"},[i("a",{attrs:{target:"blank","data-wbinfo":'{"atomid":"ac1042658","mediaId":"ac1042658"}'}},[t._v("LOL同人 瓦罗兰有时星光闪耀 03 格雷福斯")])]),t._v(" "),i("div",{staticClass:"relate-total"},[i("div",{staticClass:"view-total"},[i("i",{staticClass:"view"}),t._v(" "),i("span",{staticClass:"total num"},[t._v("6,812")])]),t._v(" "),i("div",{staticClass:"comm-total"},[i("i",{staticClass:"comm"}),t._v(" "),i("span",{staticClass:"total num"},[t._v("10")])])])]),t._v(" "),i("div",{staticClass:"relate-temp weblog-item",attrs:{"data-show":"true"}},[i("div",{staticClass:"relate-title tit"},[i("a",{attrs:{target:"blank","data-wbinfo":'{"atomid":"ac1043094","mediaId":"ac1043094"}'}},[t._v("【漫画】多米诺 第01话")])]),t._v(" "),i("div",{staticClass:"relate-total"},[i("div",{staticClass:"view-total"},[i("i",{staticClass:"view"}),t._v(" "),i("span",{staticClass:"total num"},[t._v("5,340")])]),t._v(" "),i("div",{staticClass:"comm-total"},[i("i",{staticClass:"comm"}),t._v(" "),i("span",{staticClass:"total num"},[t._v("6")])])])]),t._v(" "),i("div",{staticClass:"relate-temp weblog-item",attrs:{"data-show":"true"}},[i("div",{staticClass:"relate-title tit"},[i("a",{attrs:{target:"blank","data-wbinfo":'{"atomid":"ac1043246","mediaId":"ac1043246"}'}},[t._v("少年Y 12-14话")])]),t._v(" "),i("div",{staticClass:"relate-total"},[i("div",{staticClass:"view-total"},[i("i",{staticClass:"view"}),t._v(" "),i("span",{staticClass:"total num"},[t._v("3,952")])]),t._v(" "),i("div",{staticClass:"comm-total"},[i("i",{staticClass:"comm"}),t._v(" "),i("span",{staticClass:"total num"},[t._v("5")])])])]),t._v(" "),i("div",{staticClass:"relate-temp weblog-item",attrs:{"data-show":"true"}},[i("div",{staticClass:"relate-title tit"},[i("a",{attrs:{target:"blank","data-wbinfo":'{"atomid":"ac1043290","mediaId":"ac1043290"}'}},[t._v("重庆：两代人接力赡养陌生聋哑老太11年")])]),t._v(" "),i("div",{staticClass:"relate-total"},[i("div",{staticClass:"view-total"},[i("i",{staticClass:"view"}),t._v(" "),i("span",{staticClass:"total num"},[t._v("5,372")])]),t._v(" "),i("div",{staticClass:"comm-total"},[i("i",{staticClass:"comm"}),t._v(" "),i("span",{staticClass:"total num"},[t._v("11")])])])])]),t._v(" "),i("script",{attrs:{type:"text/template",id:"article-relate-temp"}},[t._v('\n                <div class="relate-temp weblog-item">\n                <div class="relate-title tit">\n                  \n                </div>\n                <div class="relate-total">\n                  <div class="view-total">\n                    <i class="view" />\n                    <span class="total num">[views]</span>\n                  </div>\n                  <div class="comm-total">\n                    <i class="comm" />\n                    <span class="total num"> [comments]</span>\n                  </div>\n                </div>\n              </div>;\n            ')])])}],!1,null,"6b72eb2c",null);d.options.__file="Index.vue";a.default=d.exports},K9pU:function(t,a,i){"use strict";var s=i("OG/a");i.n(s).a},"OG/a":function(t,a,i){},pDI0:function(t,a,i){"use strict";var s=i("tGs6");i.n(s).a},tGs6:function(t,a,i){}}]);