<template><h1 id="layer" tabindex="-1"><a class="header-anchor" href="#layer" aria-hidden="true">#</a> Layer</h1>
<p>可拖拽，可拉伸的弹出框</p>
<h3 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h3>
<democode tag="Layer/Simple"/>
<h3 id="禁止拖拽" tabindex="-1"><a class="header-anchor" href="#禁止拖拽" aria-hidden="true">#</a> 禁止拖拽</h3>
<democode tag="Layer/Draggable"/>
<h3 id="禁止拉伸" tabindex="-1"><a class="header-anchor" href="#禁止拉伸" aria-hidden="true">#</a> 禁止拉伸</h3>
<democode tag="Layer/Resizable"/>
<h3 id="关闭遮罩" tabindex="-1"><a class="header-anchor" href="#关闭遮罩" aria-hidden="true">#</a> 关闭遮罩</h3>
<democode tag="Layer/HideMask"/>
<h3 id="定制宽高" tabindex="-1"><a class="header-anchor" href="#定制宽高" aria-hidden="true">#</a> 定制宽高</h3>
<democode tag="Layer/Custom"/>
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
<td>title</td>
<td></td>
<td>弹框标题</td>
</tr>
<tr>
<td>value/v-model</td>
<td></td>
<td>是否显示弹框，支持双向绑定</td>
</tr>
<tr>
<td>width</td>
<td>46%</td>
<td>弹框宽度</td>
</tr>
<tr>
<td>height</td>
<td>400</td>
<td>弹框高度</td>
</tr>
<tr>
<td>top</td>
<td>12%</td>
<td>弹框y坐标</td>
</tr>
<tr>
<td>left</td>
<td></td>
<td>弹框x坐标 默认居中显示</td>
</tr>
<tr>
<td>zIndex</td>
<td>100</td>
<td>弹框层级</td>
</tr>
<tr>
<td>minWidth</td>
<td>480</td>
<td>最小宽度</td>
</tr>
<tr>
<td>minHeight</td>
<td>300</td>
<td>最小高度</td>
</tr>
<tr>
<td>handles</td>
<td>['br']</td>
<td>可拉伸的位置</td>
</tr>
<tr>
<td>draggable</td>
<td>true</td>
<td>是否可拖拽</td>
</tr>
<tr>
<td>resizable</td>
<td>true</td>
<td>是否可拉伸</td>
</tr>
<tr>
<td>showMask</td>
<td>true</td>
<td>是否下那是mask</td>
</tr>
<tr>
<td>appendToBody</td>
<td>true</td>
<td>是否添加到body下</td>
</tr>
</tbody>
</table>
<h3 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h3>
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
<td>onShow</td>
<td>{title}</td>
<td>打开弹框</td>
</tr>
<tr>
<td>onClose</td>
<td></td>
<td>关闭弹框</td>
</tr>
</tbody>
</table>
</template>
