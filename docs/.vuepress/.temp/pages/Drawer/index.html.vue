<template><h1 id="drawer" tabindex="-1"><a class="header-anchor" href="#drawer" aria-hidden="true">#</a> Drawer</h1>
<p>抽屉组件</p>
<h3 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h3>
<mycode tag="Drawer/Simple"/>
<h3 id="左侧弹出" tabindex="-1"><a class="header-anchor" href="#左侧弹出" aria-hidden="true">#</a> 左侧弹出</h3>
<mycode tag="Drawer/Left"/>
<h3 id="显示icon" tabindex="-1"><a class="header-anchor" href="#显示icon" aria-hidden="true">#</a> 显示Icon</h3>
<mycode tag="Drawer/Icon"/>
<h3 id="自定义底部" tabindex="-1"><a class="header-anchor" href="#自定义底部" aria-hidden="true">#</a> 自定义底部</h3>
<mycode tag="Drawer/Footer"/>
<h3 id="弹出表单" tabindex="-1"><a class="header-anchor" href="#弹出表单" aria-hidden="true">#</a> 弹出表单</h3>
<mycode tag="Drawer/Form"/>
<h3 id="attributes" tabindex="-1"><a class="header-anchor" href="#attributes" aria-hidden="true">#</a> Attributes</h3>
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
<td>value</td>
<td></td>
<td>v-model</td>
</tr>
<tr>
<td>title</td>
<td></td>
<td>标题</td>
</tr>
<tr>
<td>width</td>
<td>296px</td>
<td>宽度</td>
</tr>
<tr>
<td>position</td>
<td>right</td>
<td>left / right</td>
</tr>
<tr>
<td>closeable</td>
<td>true</td>
<td>是否显示标题的关闭按钮</td>
</tr>
<tr>
<td>showIcon</td>
<td>false</td>
<td>是否显示body的控制按钮</td>
</tr>
<tr>
<td>bodyStyle</td>
<td>padding: 0 16px</td>
<td>是否显示body的控制按钮</td>
</tr>
<tr>
<td>maskVisible</td>
<td>true</td>
<td>是否显示mask</td>
</tr>
<tr>
<td>appendToBody</td>
<td>true</td>
<td>是否将弹出框添加到body下面</td>
</tr>
</tbody>
</table>
<h3 id="slots" tabindex="-1"><a class="header-anchor" href="#slots" aria-hidden="true">#</a> Slots</h3>
<table>
<thead>
<tr>
<th>name</th>
<th>desc</th>
</tr>
</thead>
<tbody>
<tr>
<td>footer</td>
<td>底部</td>
</tr>
<tr>
<td>close</td>
<td>关闭按钮</td>
</tr>
<tr>
<td>default</td>
<td>内容区</td>
</tr>
</tbody>
</table>
</template>
