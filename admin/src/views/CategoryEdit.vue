<template>
    <div>
        <h1>{{id?"编辑":"新建"}}分类</h1>
        <el-form label-width="120px" @submit.native.prevent="save">
            <el-form-item label="上级分类">
                <el-select v-model="model.parent" placeholder="请选择">
                    <el-option
                        v-for="item in parents"
                        :key="item._id"
                        :label="item.name"
                        :value="item._id">
                    </el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="名称">
                <el-input v-model="model.name"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" native-type="submit">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
  import { categoriesPost, 
           categoriesIdGet,
           categoriesPutId,
           categoriesGet 
        } from '@/api/index'
   const { log } = console
  export default{
      props:{
        id:{}
      },
      data(){
          return{
              model:{
                  name:"",
                  parent:""
              },
              parents:[]
          }
      },
      created(){
          log('当前:',this.id)
          this.id && this.fetch()
          this.fetchParent()
      },
      methods:{
          async save(){
            if(this.id){
                this.model.id= this.id
                await categoriesPutId(this.model).then(res=>{
                    this.$router.push({name:'CategoryList'});
                });
            } else {
                await categoriesPost(this.model).then(res=>{
                    this.$router.push({name:'CategoryList'});
                })
            }
          },
          async fetch(){
              await categoriesIdGet(this.id).then(res=>{
                  this.model = res
              });
          },
          async fetchParent(){
              await categoriesGet({}).then(res=>{
                log('当前res:',res)
                  this.parents = res
              })
          }
      }
 }
</script>