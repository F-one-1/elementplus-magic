"use strict";(self.webpackChunkelementplus_magic=self.webpackChunkelementplus_magic||[]).push([[49],{43384:function(t,d,e){e.r(d),e.d(d,{data:function(){return l}});const l={key:"v-12d19c72",path:"/Form/",title:"Form",lang:"en-US",frontmatter:{pageClass:"large-page"},excerpt:"",headers:[{level:3,title:"基础用法 (组件样例)",slug:"基础用法-组件样例",children:[]},{level:3,title:"Cols (组件样例)",slug:"cols-组件样例",children:[]},{level:3,title:"LabelPosition (组件样例)",slug:"labelposition-组件样例",children:[]},{level:3,title:"自定义column",slug:"自定义column",children:[]},{level:3,title:"校验规则清单",slug:"校验规则清单",children:[]},{level:3,title:"示例数据清单",slug:"示例数据清单",children:[]},{level:3,title:"FormColumn清单文件",slug:"formcolumn清单文件",children:[]},{level:3,title:"FormConfig",slug:"formconfig",children:[]},{level:3,title:"FormColumn",slug:"formcolumn",children:[]},{level:3,title:"FormEvents",slug:"formevents",children:[]}],filePathRelative:"Form/README.md",git:{updatedTime:1638025215e3,contributors:[{name:"“F-one-1”",email:"fy1033409628@163.com",commits:10}]}}},38640:function(t,d,e){e.r(d),e.d(d,{default:function(){return U}});var l=e(66252);const r=(0,l._)("h1",{id:"form",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#form","aria-hidden":"true"},"#"),(0,l.Uk)(" Form")],-1),a=(0,l._)("blockquote",null,[(0,l._)("p",null,"本项目的核心思想是想用一种配置化的方式完成复杂组件的构造。目前主要支持的是Form表单组件")],-1),o=(0,l._)("p",null,"使用form组件快速布局",-1),n={class:"table-of-contents"},i=(0,l.Uk)("基础用法 (组件样例)"),c=(0,l.Uk)("Cols (组件样例)"),m=(0,l.Uk)("LabelPosition (组件样例)"),s=(0,l.Uk)("自定义column"),u=(0,l.Uk)("校验规则清单"),h=(0,l.Uk)("示例数据清单"),f=(0,l.Uk)("FormColumn清单文件"),b=(0,l.Uk)("FormConfig"),g=(0,l.Uk)("FormColumn"),p=(0,l.Uk)("FormEvents"),_=(0,l._)("div",{class:"custom-container warning"},[(0,l._)("p",{class:"custom-container-title"},"声明"),(0,l._)("p",null,"如果您想直接看到form表单的效果,请使用如下代码。因为mg-form组件的正确显示需要有一个边框的限制，否则就会撑满整个屏幕")],-1),k=(0,l._)("h3",{id:"基础用法-组件样例",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#基础用法-组件样例","aria-hidden":"true"},"#"),(0,l.Uk)(" 基础用法 (组件样例)")],-1),v=(0,l._)("h3",{id:"cols-组件样例",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#cols-组件样例","aria-hidden":"true"},"#"),(0,l.Uk)(" Cols (组件样例)")],-1),x=(0,l._)("h3",{id:"labelposition-组件样例",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#labelposition-组件样例","aria-hidden":"true"},"#"),(0,l.Uk)(" LabelPosition (组件样例)")],-1),w=(0,l._)("div",{class:"custom-container warning"},[(0,l._)("p",{class:"custom-container-title"},"说明"),(0,l._)("p",null,[(0,l.Uk)("默认情况下，label的位置位于表单的上方，主要是为了解决label长度不齐整的情况"),(0,l._)("br"),(0,l.Uk)(" 在label的名称相对规整情况下，可以设置"),(0,l._)("code",null,"labelPosition"),(0,l.Uk)("为"),(0,l._)("code",null,"right")])],-1),F=(0,l.uE)('<h3 id="自定义column" tabindex="-1"><a class="header-anchor" href="#自定义column" aria-hidden="true">#</a> 自定义column</h3><div class="custom-container warning"><p class="custom-container-title">说明</p><p><strong>(有bug,暂不支持)</strong></p></div><blockquote><p>这一部分肯定是必须的，因为在实际开发的过程中，肯定会有各种各样的需求。内置的column实例肯定是远远不够的。</p></blockquote><h3 id="校验规则清单" tabindex="-1"><a class="header-anchor" href="#校验规则清单" aria-hidden="true">#</a> 校验规则清单</h3><div class="custom-container warning"><p class="custom-container-title">说明</p><p><strong>(尚未完善，暂不支持)</strong></p></div><p><strong>目前只内置普通的表单校验，即有无</strong>，我们在labelPosition中有使用的实例</p><blockquote><p>这是我的问题，我正在做....</p></blockquote><h3 id="示例数据清单" tabindex="-1"><a class="header-anchor" href="#示例数据清单" aria-hidden="true">#</a> 示例数据清单</h3><h3 id="formcolumn清单文件" tabindex="-1"><a class="header-anchor" href="#formcolumn清单文件" aria-hidden="true">#</a> FormColumn清单文件</h3><table><thead><tr><th>name</th></tr></thead><tbody><tr><td>Text</td></tr><tr><td>Textarea</td></tr><tr><td>Number</td></tr><tr><td>Date</td></tr><tr><td>DateRange</td></tr><tr><td>DateTimeRange</td></tr><tr><td>DateTime</td></tr><tr><td>Time</td></tr><tr><td>TimeRange</td></tr><tr><td>Select</td></tr><tr><td>Cascader</td></tr><tr><td>Radio</td></tr><tr><td>Switch</td></tr><tr><td>ColorPicker</td></tr></tbody></table><h3 id="formconfig" tabindex="-1"><a class="header-anchor" href="#formconfig" aria-hidden="true">#</a> FormConfig</h3><table><thead><tr><th>name</th><th>default</th><th>desc</th></tr></thead><tbody><tr><td>labelWidth</td><td>100px</td><td>v-model</td></tr><tr><td>labelPosition</td><td>top</td><td>label的位置</td></tr><tr><td>size</td><td>medium</td><td>form表单的大小</td></tr><tr><td>rules</td><td>{ }</td><td></td></tr><tr><td>gutter</td><td>26</td><td></td></tr><tr><td>cols</td><td>24</td><td></td></tr><tr><td>btnAlign</td><td>right</td><td>btn的位置</td></tr><tr><td>btnShadow</td><td>false</td><td>btn是否显示阴影</td></tr><tr><td>confirm</td><td>true</td><td>提交确认</td></tr></tbody></table><h3 id="formcolumn" tabindex="-1"><a class="header-anchor" href="#formcolumn" aria-hidden="true">#</a> FormColumn</h3><table><thead><tr><th>name</th><th>default</th><th>desc</th></tr></thead><tbody><tr><td>label</td><td></td><td>column的label</td></tr><tr><td>field</td><td></td><td>column的字段</td></tr><tr><td>layout</td><td></td><td>column的布局</td></tr><tr><td>source</td><td></td><td>column的数据</td></tr><tr><td>cols</td><td></td><td>column所占宽度</td></tr><tr><td>rules</td><td></td><td>column表单校验</td></tr><tr><td>props</td><td></td><td>column所对应组件的参数</td></tr><tr><td>events</td><td></td><td>column所对于组件的事件</td></tr><tr><td>...</td><td></td><td>其他参数，一律作为props，向下穿</td></tr></tbody></table><h3 id="formevents" tabindex="-1"><a class="header-anchor" href="#formevents" aria-hidden="true">#</a> FormEvents</h3><table><thead><tr><th>name</th><th>params</th><th>desc</th></tr></thead><tbody><tr><td>init</td><td></td><td>表单初始化事件 （一次）</td></tr><tr><td>create</td><td>done(callback)</td><td>表单创建事件 （多次）</td></tr><tr><td>close</td><td></td><td>关闭</td></tr><tr><td>cancel</td><td></td><td>取消</td></tr><tr><td>submit</td><td>form,done(callback)</td><td>提交事件</td></tr><tr><td>search</td><td></td><td>提交成功后，刷新事件</td></tr></tbody></table>',16),C={};var U=(0,e(83744).Z)(C,[["render",function(t,d){const e=(0,l.up)("RouterLink"),C=(0,l.up)("democode");return(0,l.wg)(),(0,l.iD)(l.HY,null,[r,a,o,(0,l._)("nav",n,[(0,l._)("ul",null,[(0,l._)("li",null,[(0,l.Wm)(e,{to:"#基础用法-组件样例"},{default:(0,l.w5)((()=>[i])),_:1})]),(0,l._)("li",null,[(0,l.Wm)(e,{to:"#cols-组件样例"},{default:(0,l.w5)((()=>[c])),_:1})]),(0,l._)("li",null,[(0,l.Wm)(e,{to:"#labelposition-组件样例"},{default:(0,l.w5)((()=>[m])),_:1})]),(0,l._)("li",null,[(0,l.Wm)(e,{to:"#自定义column"},{default:(0,l.w5)((()=>[s])),_:1})]),(0,l._)("li",null,[(0,l.Wm)(e,{to:"#校验规则清单"},{default:(0,l.w5)((()=>[u])),_:1})]),(0,l._)("li",null,[(0,l.Wm)(e,{to:"#示例数据清单"},{default:(0,l.w5)((()=>[h])),_:1})]),(0,l._)("li",null,[(0,l.Wm)(e,{to:"#formcolumn清单文件"},{default:(0,l.w5)((()=>[f])),_:1})]),(0,l._)("li",null,[(0,l.Wm)(e,{to:"#formconfig"},{default:(0,l.w5)((()=>[b])),_:1})]),(0,l._)("li",null,[(0,l.Wm)(e,{to:"#formcolumn"},{default:(0,l.w5)((()=>[g])),_:1})]),(0,l._)("li",null,[(0,l.Wm)(e,{to:"#formevents"},{default:(0,l.w5)((()=>[p])),_:1})])])]),_,(0,l.Wm)(C,{tag:"index",style:{"max-width":"850px"}}),k,(0,l.Wm)(C,{tag:"Form/Simple",style:{"max-width":"850px"}}),v,(0,l.Wm)(C,{tag:"Form/Cols",style:{"max-width":"850px"}}),x,w,(0,l.Wm)(C,{tag:"Form/LabelPosition",style:{"max-width":"850px"}}),F],64)}]])}}]);