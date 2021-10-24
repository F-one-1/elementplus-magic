<template><h1 id="autoloading" tabindex="-1"><a class="header-anchor" href="#autoloading" aria-hidden="true">#</a> AutoLoading</h1>
<p>自动实现loading过渡</p>
<h3 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h3>
<Code tag="AutoLoading/Simple"/>
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
<td>hook</td>
<td>created</td>
<td>触发事件的钩子函数 枚举 <code>created</code> 或 <code>activeated</code></td>
</tr>
<tr>
<td>always</td>
<td>false</td>
<td>是否总是从新渲染</td>
</tr>
<tr>
<td>position</td>
<td>top</td>
<td>Spinner所在的位置 枚举 <code>top</code> <code>bottom</code> <code>center</code></td>
</tr>
<tr>
<td>...</td>
<td></td>
<td>其余参数，同<code>Spinner</code>组件保持一致</td>
</tr>
</tbody>
</table>
<h3 id="events" tabindex="-1"><a class="header-anchor" href="#events" aria-hidden="true">#</a> Events</h3>
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
<td>load</td>
<td>done:加载完毕后，进行回调</td>
<td>派发的加载事件</td>
</tr>
</tbody>
</table>
</template>
