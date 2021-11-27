<template><p><strong>If you are using element-plus to build a form.I think you could read a minute</strong></p>
<h2 id="why-is-elementplus-magic" tabindex="-1"><a class="header-anchor" href="#why-is-elementplus-magic" aria-hidden="true">#</a> why is elementplus-magic</h2>
<p>This is the Form code using the element-plus</p>
<democode tag="Form/elForm" style="max-width: 850px;"/>
<p><strong>If you use the elementplus-magic</strong></p>
<democode tag="Form/demo" style="max-width: 850px;"/>
<p>of course,Components have lower degrees of freedom, which is a problem I'm solving. To support more powerful custom components</p>
<h2 id="how-use-elementplus-magic" tabindex="-1"><a class="header-anchor" href="#how-use-elementplus-magic" aria-hidden="true">#</a> How use elementplus-magic</h2>
<p><code>yarn add elementplus-magic</code></p>
<p><code>yarn add element-plus</code> OR <code>yarn add element-plus@^1.1.0-beta.4</code></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> elementplusMagic <span class="token keyword">from</span> <span class="token string">'elementplus-magic'</span>
<span class="token keyword">import</span> ElementPlus <span class="token keyword">from</span> <span class="token string">'element-plus'</span>
<span class="token keyword">import</span> <span class="token string">'elementplus-magic/dist/elementplus-magic.css'</span>
<span class="token keyword">import</span> <span class="token string">'element-plus/dist/index.css'</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>elementplusMagic<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElementPlus<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div></template>
