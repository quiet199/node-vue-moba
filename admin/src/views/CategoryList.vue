<template>
  <div>
    <h1>分类列表</h1>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="230"></el-table-column>
      <el-table-column prop="parent.name" label="上级分类"></el-table-column>
      <el-table-column prop="name" label="分类名称"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click="handleClick(scope.row)"
            >编辑</el-button>
            <el-button @click="removeClick(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { categoriesGet,
         categoriesDelete 
} from "@/api/index";
export default {
  name: "CategoryList",
  data() {
    return {
      items: []
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      await categoriesGet({}).then(res => {
        this.items = res;
      });
    },
    handleClick(row) {
        this.$router.push({ name: 'categoriesEditId', params: { id: row._id} })
    },
    removeClick(row) {
        this.$confirm(`是否删除 ${row.name}`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(async() => {
            await categoriesDelete(row).then(res => {
                if(res.success){
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                    this.init();
                }
            });
        })
    }
  }
};
</script>
