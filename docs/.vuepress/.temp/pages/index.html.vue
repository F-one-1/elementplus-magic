<template><h3 id="快速集成" tabindex="-1"><a class="header-anchor" href="#快速集成" aria-hidden="true">#</a> 快速集成</h3>
<div class="custom-container warning"><p class="custom-container-title">说明</p>
<p>需要同时引入element-plus</p>
</div>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> elementplusMagic <span class="token keyword">from</span> <span class="token string">'elementplus-magic'</span>
<span class="token keyword">import</span> ElementPlus <span class="token keyword">from</span> <span class="token string">'element-plus'</span>
<span class="token keyword">import</span> <span class="token string">'element-plus/dist/index.css'</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ElementPlus<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>elementplusMagic<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>请确保你的 Node.js 版本 &gt;= 12.6。</p>
</div>
</template>
