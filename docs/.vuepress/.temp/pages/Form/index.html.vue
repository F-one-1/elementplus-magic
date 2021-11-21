<template><h1 id="form" tabindex="-1"><a class="header-anchor" href="#form" aria-hidden="true">#</a> Form</h1>
<blockquote>
<p>本项目的核心思想是想用一种配置化的方式完成复杂组件的构造。目前主要支持的是Form表单组件</p>
</blockquote>
<p>使用form组件快速布局</p>
<nav class="table-of-contents"><ul><li><RouterLink to="#基础用法-组件样例">基础用法 (组件样例)</RouterLink></li><li><RouterLink to="#cols-组件样例">Cols (组件样例)</RouterLink></li><li><RouterLink to="#labelposition-组件样例">LabelPosition (组件样例)</RouterLink></li><li><RouterLink to="#自定义column">自定义column</RouterLink></li><li><RouterLink to="#校验规则清单">校验规则清单</RouterLink></li><li><RouterLink to="#示例数据清单">示例数据清单</RouterLink></li><li><RouterLink to="#formcolumn清单文件">FormColumn清单文件</RouterLink></li><li><RouterLink to="#formconfig">FormConfig</RouterLink></li><li><RouterLink to="#formcolumn">FormColumn</RouterLink></li><li><RouterLink to="#formevents">FormEvents</RouterLink></li></ul></nav>
<div class="custom-container warning"><p class="custom-container-title">声明</p>
<p>如果您想直接看到form表单的效果,请使用如下代码。因为mg-form组件的正确显示需要有一个边框的限制，否则就会撑满整个屏幕</p>
</div>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>code<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>code-content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mg-form</span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>options<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scoped</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.code</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ebebeb<span class="token punctuation">;</span>
  <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
  <span class="token property">max-width</span><span class="token punctuation">:</span> 750px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token selector">.code-content</span><span class="token punctuation">{</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 15px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> model <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'elementplus-magic'</span>
  <span class="token comment">// import data from './data.js'</span>
  <span class="token comment">// data 为构造的静态数据集</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        options<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">model<span class="token punctuation">.</span>Form</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          config<span class="token operator">:</span> <span class="token punctuation">{</span>
            cols<span class="token operator">:</span> <span class="token number">12</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          columns<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'隐患类别'</span><span class="token punctuation">,</span> field<span class="token operator">:</span> <span class="token string">'category'</span><span class="token punctuation">,</span> layout<span class="token operator">:</span> <span class="token string">'Select'</span><span class="token punctuation">,</span> source<span class="token operator">:</span> <span class="token string">'category'</span><span class="token punctuation">,</span> multiple<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'隐患内容'</span><span class="token punctuation">,</span> field<span class="token operator">:</span> <span class="token string">'desc'</span><span class="token punctuation">,</span> layout<span class="token operator">:</span> <span class="token string">'Textarea'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'demoInputNumber'</span><span class="token punctuation">,</span> field<span class="token operator">:</span> <span class="token string">'InputNumber'</span><span class="token punctuation">,</span> layout<span class="token operator">:</span> <span class="token string">'InputNumber'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'隐患单号'</span><span class="token punctuation">,</span> field<span class="token operator">:</span> <span class="token string">'number'</span><span class="token punctuation">,</span> layout<span class="token operator">:</span> <span class="token string">'Text'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'隐患Switch'</span><span class="token punctuation">,</span> field<span class="token operator">:</span> <span class="token string">'number1'</span><span class="token punctuation">,</span> layout<span class="token operator">:</span> <span class="token string">'Switch'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'ColorPicker'</span><span class="token punctuation">,</span> field<span class="token operator">:</span> <span class="token string">'colorpicker'</span><span class="token punctuation">,</span> layout<span class="token operator">:</span> <span class="token string">'ColorPicker'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">// { label: 'slider', field: 'slider', layout: 'Slider' },</span>
            <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'隐患级别'</span><span class="token punctuation">,</span> field<span class="token operator">:</span> <span class="token string">'level'</span><span class="token punctuation">,</span> layout<span class="token operator">:</span> <span class="token string">'Radio'</span><span class="token punctuation">,</span> source<span class="token operator">:</span> <span class="token string">'level'</span><span class="token punctuation">,</span> type<span class="token operator">:</span> <span class="token string">'button'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'检查时间'</span><span class="token punctuation">,</span> field<span class="token operator">:</span> <span class="token string">'mydate'</span><span class="token punctuation">,</span> layout<span class="token operator">:</span> <span class="token string">'Date'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'隐患单号'</span><span class="token punctuation">,</span> field<span class="token operator">:</span> <span class="token string">'number'</span><span class="token punctuation">,</span> layout<span class="token operator">:</span> <span class="token string">'Text'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'检查时间'</span><span class="token punctuation">,</span> field<span class="token operator">:</span> <span class="token string">'date1'</span><span class="token punctuation">,</span> layout<span class="token operator">:</span> <span class="token string">'DateRange'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'隐患单号'</span><span class="token punctuation">,</span> field<span class="token operator">:</span> <span class="token string">'number'</span><span class="token punctuation">,</span> layout<span class="token operator">:</span> <span class="token string">'Text'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'隐患类别'</span><span class="token punctuation">,</span> field<span class="token operator">:</span> <span class="token string">'category'</span><span class="token punctuation">,</span> layout<span class="token operator">:</span> <span class="token string">'Select'</span><span class="token punctuation">,</span> source<span class="token operator">:</span> <span class="token string">'category'</span><span class="token punctuation">,</span> multiple<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'整改部门'</span><span class="token punctuation">,</span> field<span class="token operator">:</span> <span class="token string">'department'</span><span class="token punctuation">,</span> layout<span class="token operator">:</span> <span class="token string">'Cascader'</span><span class="token punctuation">,</span> source<span class="token operator">:</span> <span class="token string">'department'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          events<span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token function-variable function">init</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
              <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span><span class="token function">setSource</span><span class="token punctuation">(</span><span class="token string">'category'</span><span class="token punctuation">,</span> data<span class="token punctuation">.</span>category<span class="token punctuation">)</span>
              <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span><span class="token function">setSource</span><span class="token punctuation">(</span><span class="token string">'level'</span><span class="token punctuation">,</span> data<span class="token punctuation">.</span>level<span class="token punctuation">)</span>
              <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span><span class="token function">setSource</span><span class="token punctuation">(</span><span class="token string">'department'</span><span class="token punctuation">,</span> data<span class="token punctuation">.</span>department<span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function-variable function">submit</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">form<span class="token punctuation">,</span> done</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
              <span class="token function">setTimeout</span><span class="token punctuation">(</span>done<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// console.log(6,this.options)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br></div></div><!-- <d/> -->
<h3 id="基础用法-组件样例" tabindex="-1"><a class="header-anchor" href="#基础用法-组件样例" aria-hidden="true">#</a> 基础用法 (组件样例)</h3>
<mycode tag="Form/Simple" style="max-width: 850px;"/>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mg-form</span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>options<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> model <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'elementplus-magic'</span>
  <span class="token comment">// import data from './data.js'</span>
  <span class="token comment">// data 为构造的静态数据集</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        options<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">model<span class="token punctuation">.</span>Form</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          columns<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'多项选择'</span><span class="token punctuation">,</span> field<span class="token operator">:</span> <span class="token string">'category'</span><span class="token punctuation">,</span> layout<span class="token operator">:</span> <span class="token string">'Select'</span><span class="token punctuation">,</span> source<span class="token operator">:</span> <span class="token string">'category'</span><span class="token punctuation">,</span> multiple<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">,</span> placeholder<span class="token operator">:</span> <span class="token string">' '</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'多行文本'</span><span class="token punctuation">,</span> field<span class="token operator">:</span> <span class="token string">'desc'</span><span class="token punctuation">,</span> layout<span class="token operator">:</span> <span class="token string">'Textarea'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'单行文本'</span><span class="token punctuation">,</span> field<span class="token operator">:</span> <span class="token string">'number'</span><span class="token punctuation">,</span> layout<span class="token operator">:</span> <span class="token string">'Text'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'Switch'</span><span class="token punctuation">,</span> field<span class="token operator">:</span> <span class="token string">'number1'</span><span class="token punctuation">,</span> layout<span class="token operator">:</span> <span class="token string">'Switch'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'ColorPicker'</span><span class="token punctuation">,</span> field<span class="token operator">:</span> <span class="token string">'colorpicker'</span><span class="token punctuation">,</span> layout<span class="token operator">:</span> <span class="token string">'ColorPicker'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'级别选择'</span><span class="token punctuation">,</span> field<span class="token operator">:</span> <span class="token string">'level'</span><span class="token punctuation">,</span> layout<span class="token operator">:</span> <span class="token string">'Radio'</span><span class="token punctuation">,</span> source<span class="token operator">:</span> <span class="token string">'level'</span><span class="token punctuation">,</span> type<span class="token operator">:</span> <span class="token string">'button'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'Date'</span><span class="token punctuation">,</span> field<span class="token operator">:</span> <span class="token string">'mydate'</span><span class="token punctuation">,</span> layout<span class="token operator">:</span> <span class="token string">'Date'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'Time'</span><span class="token punctuation">,</span> field<span class="token operator">:</span> <span class="token string">'mydate'</span><span class="token punctuation">,</span> layout<span class="token operator">:</span> <span class="token string">'Time'</span> <span class="token punctuation">,</span> cols<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'TimeRange'</span><span class="token punctuation">,</span> field<span class="token operator">:</span> <span class="token string">'mydate'</span><span class="token punctuation">,</span> layout<span class="token operator">:</span> <span class="token string">'TimeRange'</span> <span class="token punctuation">,</span> cols<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'DateTime'</span><span class="token punctuation">,</span> field<span class="token operator">:</span> <span class="token string">'date'</span><span class="token punctuation">,</span> layout<span class="token operator">:</span> <span class="token string">'DateTime'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'DateTimeRange'</span><span class="token punctuation">,</span> field<span class="token operator">:</span> <span class="token string">'date'</span><span class="token punctuation">,</span> layout<span class="token operator">:</span> <span class="token string">'DateTimeRange'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'单项选择'</span><span class="token punctuation">,</span> field<span class="token operator">:</span> <span class="token string">'category'</span><span class="token punctuation">,</span> layout<span class="token operator">:</span> <span class="token string">'Select'</span><span class="token punctuation">,</span> source<span class="token operator">:</span> <span class="token string">'category'</span><span class="token punctuation">,</span> multiple<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'树形选择'</span><span class="token punctuation">,</span> field<span class="token operator">:</span> <span class="token string">'department'</span><span class="token punctuation">,</span> layout<span class="token operator">:</span> <span class="token string">'Cascader'</span><span class="token punctuation">,</span> source<span class="token operator">:</span> <span class="token string">'department'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          events<span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token function-variable function">init</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
              <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span><span class="token function">setSource</span><span class="token punctuation">(</span><span class="token string">'category'</span><span class="token punctuation">,</span> data<span class="token punctuation">.</span>category<span class="token punctuation">)</span>
              <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span><span class="token function">setSource</span><span class="token punctuation">(</span><span class="token string">'level'</span><span class="token punctuation">,</span> data<span class="token punctuation">.</span>level<span class="token punctuation">)</span>
              <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span><span class="token function">setSource</span><span class="token punctuation">(</span><span class="token string">'department'</span><span class="token punctuation">,</span> data<span class="token punctuation">.</span>department<span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function-variable function">submit</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">form<span class="token punctuation">,</span> done</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
              <span class="token function">setTimeout</span><span class="token punctuation">(</span>done<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>


</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br></div></div><h3 id="cols-组件样例" tabindex="-1"><a class="header-anchor" href="#cols-组件样例" aria-hidden="true">#</a> Cols (组件样例)</h3>
<mycode tag="Form/Cols" style="max-width: 850px;"/>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mg-form</span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>options<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> model <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'elementplus-magic'</span>
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        options<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">model<span class="token punctuation">.</span>Form</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          config<span class="token operator">:</span> <span class="token punctuation">{</span>
            cols<span class="token operator">:</span> <span class="token number">12</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          columns<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'隐患类别'</span><span class="token punctuation">,</span> field<span class="token operator">:</span> <span class="token string">'category'</span><span class="token punctuation">,</span> layout<span class="token operator">:</span> <span class="token string">'Select'</span><span class="token punctuation">,</span> source<span class="token operator">:</span> <span class="token string">'category'</span><span class="token punctuation">,</span> multiple<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'隐患内容'</span><span class="token punctuation">,</span> field<span class="token operator">:</span> <span class="token string">'desc'</span><span class="token punctuation">,</span> layout<span class="token operator">:</span> <span class="token string">'Textarea'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'demoInputNumber'</span><span class="token punctuation">,</span> field<span class="token operator">:</span> <span class="token string">'InputNumber'</span><span class="token punctuation">,</span> layout<span class="token operator">:</span> <span class="token string">'InputNumber'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'隐患单号'</span><span class="token punctuation">,</span> field<span class="token operator">:</span> <span class="token string">'number'</span><span class="token punctuation">,</span> layout<span class="token operator">:</span> <span class="token string">'Text'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'隐患Switch'</span><span class="token punctuation">,</span> field<span class="token operator">:</span> <span class="token string">'number1'</span><span class="token punctuation">,</span> layout<span class="token operator">:</span> <span class="token string">'Switch'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'ColorPicker'</span><span class="token punctuation">,</span> field<span class="token operator">:</span> <span class="token string">'colorpicker'</span><span class="token punctuation">,</span> layout<span class="token operator">:</span> <span class="token string">'ColorPicker'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token comment">// { label: 'slider', field: 'slider', layout: 'Slider' },</span>
            <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'隐患级别'</span><span class="token punctuation">,</span> field<span class="token operator">:</span> <span class="token string">'level'</span><span class="token punctuation">,</span> layout<span class="token operator">:</span> <span class="token string">'Radio'</span><span class="token punctuation">,</span> source<span class="token operator">:</span> <span class="token string">'level'</span><span class="token punctuation">,</span> type<span class="token operator">:</span> <span class="token string">'button'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'检查时间'</span><span class="token punctuation">,</span> field<span class="token operator">:</span> <span class="token string">'mydate'</span><span class="token punctuation">,</span> layout<span class="token operator">:</span> <span class="token string">'Date'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'隐患单号'</span><span class="token punctuation">,</span> field<span class="token operator">:</span> <span class="token string">'number'</span><span class="token punctuation">,</span> layout<span class="token operator">:</span> <span class="token string">'Text'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'检查时间'</span><span class="token punctuation">,</span> field<span class="token operator">:</span> <span class="token string">'date1'</span><span class="token punctuation">,</span> layout<span class="token operator">:</span> <span class="token string">'DateRange'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'隐患单号'</span><span class="token punctuation">,</span> field<span class="token operator">:</span> <span class="token string">'number'</span><span class="token punctuation">,</span> layout<span class="token operator">:</span> <span class="token string">'Text'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'隐患类别'</span><span class="token punctuation">,</span> field<span class="token operator">:</span> <span class="token string">'category'</span><span class="token punctuation">,</span> layout<span class="token operator">:</span> <span class="token string">'Select'</span><span class="token punctuation">,</span> source<span class="token operator">:</span> <span class="token string">'category'</span><span class="token punctuation">,</span> multiple<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'整改部门'</span><span class="token punctuation">,</span> field<span class="token operator">:</span> <span class="token string">'department'</span><span class="token punctuation">,</span> layout<span class="token operator">:</span> <span class="token string">'Cascader'</span><span class="token punctuation">,</span> source<span class="token operator">:</span> <span class="token string">'department'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          events<span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token function-variable function">init</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
              <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span><span class="token function">setSource</span><span class="token punctuation">(</span><span class="token string">'category'</span><span class="token punctuation">,</span> data<span class="token punctuation">.</span>category<span class="token punctuation">)</span>
              <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span><span class="token function">setSource</span><span class="token punctuation">(</span><span class="token string">'level'</span><span class="token punctuation">,</span> data<span class="token punctuation">.</span>level<span class="token punctuation">)</span>
              <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span><span class="token function">setSource</span><span class="token punctuation">(</span><span class="token string">'department'</span><span class="token punctuation">,</span> data<span class="token punctuation">.</span>department<span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function-variable function">submit</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">form<span class="token punctuation">,</span> done</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
              <span class="token function">setTimeout</span><span class="token punctuation">(</span>done<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// console.log(6,this.options)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><h3 id="labelposition-组件样例" tabindex="-1"><a class="header-anchor" href="#labelposition-组件样例" aria-hidden="true">#</a> LabelPosition (组件样例)</h3>
<div class="custom-container warning"><p class="custom-container-title">说明</p>
<p>默认情况下，label的位置位于表单的上方，主要是为了解决label长度不齐整的情况<br/>
在label的名称相对规整情况下，可以设置<code>labelPosition</code>为<code>right</code></p>
</div>
<mycode tag="Form/LabelPosition" style="max-width: 850px;"/>
<div class="language-vue ext-vue line-numbers-mode"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mg-form</span> <span class="token attr-name">:options</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>options<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">import</span> <span class="token punctuation">{</span> model <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'elementplus-magic'</span>

  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        options<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">model<span class="token punctuation">.</span>Form</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          config<span class="token operator">:</span> <span class="token punctuation">{</span>
            rules<span class="token operator">:</span><span class="token punctuation">{</span>
              desc<span class="token operator">:</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            cols<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
            labelWidth<span class="token operator">:</span> <span class="token string">'80px'</span><span class="token punctuation">,</span>
            labelPosition<span class="token operator">:</span> <span class="token string">'right'</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          columns<span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'Textarea'</span><span class="token punctuation">,</span> field<span class="token operator">:</span> <span class="token string">'desc'</span><span class="token punctuation">,</span> layout<span class="token operator">:</span> <span class="token string">'Textarea'</span><span class="token punctuation">,</span> cols<span class="token operator">:</span> <span class="token number">24</span> <span class="token punctuation">,</span> required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'Textarea'</span><span class="token punctuation">,</span> field<span class="token operator">:</span> <span class="token string">'desc'</span><span class="token punctuation">,</span> layout<span class="token operator">:</span> <span class="token string">'Textarea'</span><span class="token punctuation">,</span> cols<span class="token operator">:</span> <span class="token number">24</span> <span class="token punctuation">,</span> placeholder<span class="token operator">:</span> <span class="token string">'你可以输入任何默认值'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'Text'</span><span class="token punctuation">,</span> field<span class="token operator">:</span> <span class="token string">'number'</span><span class="token punctuation">,</span> layout<span class="token operator">:</span> <span class="token string">'Text'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'Select'</span><span class="token punctuation">,</span> field<span class="token operator">:</span> <span class="token string">'level'</span><span class="token punctuation">,</span> layout<span class="token operator">:</span> <span class="token string">'Select'</span><span class="token punctuation">,</span> source<span class="token operator">:</span> <span class="token string">'level'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'Date'</span><span class="token punctuation">,</span> field<span class="token operator">:</span> <span class="token string">'date'</span><span class="token punctuation">,</span> layout<span class="token operator">:</span> <span class="token string">'Date'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">'Select'</span><span class="token punctuation">,</span> field<span class="token operator">:</span> <span class="token string">'category'</span><span class="token punctuation">,</span> layout<span class="token operator">:</span> <span class="token string">'Select'</span><span class="token punctuation">,</span> source<span class="token operator">:</span> <span class="token string">'category'</span><span class="token punctuation">,</span> multiple<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">]</span><span class="token punctuation">,</span>
          events<span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token function-variable function">init</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
              <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span><span class="token function">setSource</span><span class="token punctuation">(</span><span class="token string">'category'</span><span class="token punctuation">,</span> data<span class="token punctuation">.</span>category<span class="token punctuation">)</span>
              <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span><span class="token function">setSource</span><span class="token punctuation">(</span><span class="token string">'level'</span><span class="token punctuation">,</span> data<span class="token punctuation">.</span>level<span class="token punctuation">)</span>
              <span class="token keyword">this</span><span class="token punctuation">.</span>options<span class="token punctuation">.</span><span class="token function">setSource</span><span class="token punctuation">(</span><span class="token string">'department'</span><span class="token punctuation">,</span> data<span class="token punctuation">.</span>department<span class="token punctuation">)</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token function-variable function">submit</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">form<span class="token punctuation">,</span> done</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
              <span class="token function">setTimeout</span><span class="token punctuation">(</span>done<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div><h3 id="自定义column" tabindex="-1"><a class="header-anchor" href="#自定义column" aria-hidden="true">#</a> 自定义column</h3>
<div class="custom-container warning"><p class="custom-container-title">说明</p>
<p><strong>(有bug,暂不支持)</strong></p>
</div>
<blockquote>
<p>这一部分肯定是必须的，因为在实际开发的过程中，肯定会有各种各样的需求。内置的column实例肯定是远远不够的。</p>
</blockquote>
<h3 id="校验规则清单" tabindex="-1"><a class="header-anchor" href="#校验规则清单" aria-hidden="true">#</a> 校验规则清单</h3>
<div class="custom-container warning"><p class="custom-container-title">说明</p>
<p><strong>(尚未完善，暂不支持)</strong></p>
</div>
<p><strong>目前只内置普通的表单校验，即有无</strong>，我们在labelPosition中有使用的实例</p>
<blockquote>
<p>这是我的问题，我正在做....🐅🐕🐱🦒</p>
</blockquote>
<h3 id="示例数据清单" tabindex="-1"><a class="header-anchor" href="#示例数据清单" aria-hidden="true">#</a> 示例数据清单</h3>
<h3 id="formcolumn清单文件" tabindex="-1"><a class="header-anchor" href="#formcolumn清单文件" aria-hidden="true">#</a> FormColumn清单文件</h3>
<table>
<thead>
<tr>
<th>name</th>
</tr>
</thead>
<tbody>
<tr>
<td>Text</td>
</tr>
<tr>
<td>Textarea</td>
</tr>
<tr>
<td>Number</td>
</tr>
<tr>
<td>Date</td>
</tr>
<tr>
<td>DateRange</td>
</tr>
<tr>
<td>DateTimeRange</td>
</tr>
<tr>
<td>DateTime</td>
</tr>
<tr>
<td>Time</td>
</tr>
<tr>
<td>TimeRange</td>
</tr>
<tr>
<td>Select</td>
</tr>
<tr>
<td>Cascader</td>
</tr>
<tr>
<td>Radio</td>
</tr>
<tr>
<td>Switch</td>
</tr>
<tr>
<td>ColorPicker</td>
</tr>
</tbody>
</table>
<h3 id="formconfig" tabindex="-1"><a class="header-anchor" href="#formconfig" aria-hidden="true">#</a> FormConfig</h3>
<table>
<thead>
<tr>
<th>name</th>
<th>default</th>
<th>desc</th>
</tr>
</thead>
<tbody>
<tr>
<td>labelWidth</td>
<td>100px</td>
<td>v-model</td>
</tr>
<tr>
<td>labelPosition</td>
<td>top</td>
<td>label的位置</td>
</tr>
<tr>
<td>size</td>
<td>medium</td>
<td>form表单的大小</td>
</tr>
<tr>
<td>rules</td>
<td>{ }</td>
<td></td>
</tr>
<tr>
<td>gutter</td>
<td>26</td>
<td></td>
</tr>
<tr>
<td>cols</td>
<td>24</td>
<td></td>
</tr>
<tr>
<td>btnAlign</td>
<td>right</td>
<td>btn的位置</td>
</tr>
<tr>
<td>btnShadow</td>
<td>false</td>
<td>btn是否显示阴影</td>
</tr>
<tr>
<td>confirm</td>
<td>true</td>
<td>提交确认</td>
</tr>
</tbody>
</table>
<h3 id="formcolumn" tabindex="-1"><a class="header-anchor" href="#formcolumn" aria-hidden="true">#</a> FormColumn</h3>
<table>
<thead>
<tr>
<th>name</th>
<th>default</th>
<th>desc</th>
</tr>
</thead>
<tbody>
<tr>
<td>label</td>
<td></td>
<td>column的label</td>
</tr>
<tr>
<td>field</td>
<td></td>
<td>column的字段</td>
</tr>
<tr>
<td>layout</td>
<td></td>
<td>column的布局</td>
</tr>
<tr>
<td>source</td>
<td></td>
<td>column的数据</td>
</tr>
<tr>
<td>cols</td>
<td></td>
<td>column所占宽度</td>
</tr>
<tr>
<td>rules</td>
<td></td>
<td>column表单校验</td>
</tr>
<tr>
<td>props</td>
<td></td>
<td>column所对应组件的参数</td>
</tr>
<tr>
<td>events</td>
<td></td>
<td>column所对于组件的事件</td>
</tr>
<tr>
<td>...</td>
<td></td>
<td>其他参数，一律作为props，向下穿</td>
</tr>
</tbody>
</table>
<h3 id="formevents" tabindex="-1"><a class="header-anchor" href="#formevents" aria-hidden="true">#</a> FormEvents</h3>
<table>
<thead>
<tr>
<th>name</th>
<th>params</th>
<th>desc</th>
</tr>
</thead>
<tbody>
<tr>
<td>init</td>
<td></td>
<td>表单初始化事件 （一次）</td>
</tr>
<tr>
<td>create</td>
<td>done(callback)</td>
<td>表单创建事件  （多次）</td>
</tr>
<tr>
<td>close</td>
<td></td>
<td>关闭</td>
</tr>
<tr>
<td>cancel</td>
<td></td>
<td>取消</td>
</tr>
<tr>
<td>submit</td>
<td>form,done(callback)</td>
<td>提交事件</td>
</tr>
<tr>
<td>search</td>
<td></td>
<td>提交成功后，刷新事件</td>
</tr>
</tbody>
</table>
</template>
