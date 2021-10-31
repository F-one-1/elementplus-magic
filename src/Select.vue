<template>
  <mg-select
    style="width: 240px;"
    v-model="select"
    :source="source"
    labelKey="name"
    valueKey="id"
    outputKey="id"
    collapse-tags
    >
    <template
      v-slot="{row}">
      <div class="row">
        <label>{{ row.name }}</label>
        <span>{{ row.department }}</span>
      </div>
    </template>
  </mg-select>
</template>

<script>
  export default {
    data() {
      return {
        select: [],
        source: [
          {
            id: 1,
            name: '张三',
            department: '技术室'
          },
          {
            id: 2,
            name: '李四',
            department: '掘进部'
          },
          {
            id: 3,
            name: '王五',
            department: '调度室'
          }
        ]
      }
    }
  }
</script>

<style scoped>

  .row {
    display: flex;
    justify-content: space-between;
  }
  .row  label {
      flex: 1;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  .row span{
    margin: 0 0 0 10px;
  }
</style>