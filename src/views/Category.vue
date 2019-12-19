<template>
  <div id="category">
    栏目管理 aaa: {{table.header[0].selection}}
    <my-table :table="table">
      <template #table="record">
        <a class="el-icon-edit-outline" @click.prevent="editHandler(record.row)" /> &nbsp;
        <a class="el-icon-edit-outline" @click.prevent="deletedHandler(record.id)" /> &nbsp;
      </template>
    </my-table>
  </div>
</template>
<script>
import myTable from "@/components/Table";

export default {
  data() {
    return {
      table: {
        tableData: [
          {
            id: 1,
            name: "王小虎",
            address: "杭州西湖区"
          },
          {
            id: 2,
            name: "王小虎",
            address: "杭州西湖区"
          },
          {
            id: 3,
            name: "王小虎",
            address: "杭州西湖区"
          }
        ],
        header: [
          {
            // selection: true,
            width: "50"
          },
          {
            prop: "id",
            label: "编号",
            width: "180"
          },
          {
            prop: "name",
            label: "姓名",
            width: "180"
          },
          {
            prop: "address",
            label: "地址",
            width: "180"
          }
        ],
        option: [
          {
            width: "100"
          }
        ]
      }
    };
  },
  methods: {
    editHandler() {},
    deletedHandler(id) {
      window.console.log(id, "==--");
    }
  },
  components: {
    "my-table": myTable
  }
};
</script>
<style>
</style>