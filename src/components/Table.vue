<template>
  <div>
    <el-table :data="table.tableData" style="width: 100%">
      <el-table-column
        type="selection"
        :width="table.header[0].width"
        v-if="table.header[0].selection==true"
      ></el-table-column>

      <div v-for="item of table.header" :key="item.prop">
        <el-table-column :prop="item.prop" :label="item.label" :width="item.width" align="center"></el-table-column>
      </div>
      <el-table-column v-if="table.option" label="操作" :width="table.option.width" align="center">
        <!-- <slot name="table" :row="item"></slot> -->
        <div v-for="item of table.header" :key="item.prop">
          <slot name="table" :row="item"></slot>
        </div>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    // table: { type: Object }
    table: {
      header: [
        {
          selection: {
            default: true
          }
        }
      ]
    }
  },
  methods: {
    handleSelectionChange() {}
  }
};
</script>