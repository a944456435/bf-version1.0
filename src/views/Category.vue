<template>
  <div id="category">
    栏目管理{{checkedList}}
    <my-table :table="table" ref="table">
      <template v-slot:table="record">
        <a class="el-icon-delete" @click.prevent="editHandler(record)" /> &nbsp;
        <a class="el-icon-edit-outline" @click.prevent="deletedHandler(record.row)" /> &nbsp;
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
            prop: "selection",
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
          },
          {
            prop: "option",
            label: "操作",
            width: "80"
          }
        ]
      },
      checkedList: []
    };
  },
  methods: {
    editHandler(row) {
      window.console.log(row);
    },
    deletedHandler(row) {
      window.console.log(row, "==--");
    }
  },
  components: {
    "my-table": myTable
  },
  created() {
    // var data = this.table.header;
    // for (var i of data) {
    //   window.console.log(i, "=");
    // }
    window.console.log(this.$refs, "=");
    this.checkedList = this.$refs.checkedList;
  }
};
</script>
