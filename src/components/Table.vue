<template>
  <div>
    {{ checkList }}
    <el-table
      ref="multipleTable"
      :data="table.tableData"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        v-for="(item, index) in table.header"
        :key="index"
        :prop="item.prop"
        :width="item.width"
        :label="item.label"
        :type="item.prop === 'selection' ? 'selection' : undefined"
      >
        <template slot-scope="props">
          <slot v-if="item.prop == 'option'" name="table" v-bind:record="props.row"></slot>
          <span v-else-if="item.prop == 'selection'">
            <el-checkbox-group v-model="checkList">
              <el-checkbox :value="props.row.id" :label="props.row.id"></el-checkbox>
            </el-checkbox-group>
          </span>
          <span v-else>{{ props.row[item.prop] }}</span>
        </template>
      </el-table-column>

      <!-- <el-table-column type="selection" :width="50"></el-table-column> -->
      <!-- <div v-for="item in table.header" :key="item.prop">
        <el-table-column :label="item.label" :width="item.eidth" v-if="item.prop == 'option'">
          <slot name="table"></slot>
        </el-table-column>
        <el-table-column :prop="item.prop" :label="item.label" :width="item.width" v-else></el-table-column>
      </div>-->
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkList: []
    };
  },
  props: {
    table: { type: Object }
  },
  methods: {
    handleSelectionChange() {}
  },
  mounted() {
    window.console.log(this.table.header);
  }
};
</script>
