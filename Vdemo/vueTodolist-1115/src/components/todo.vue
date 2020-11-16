<template>
    <div>
        <input type="text"
            class="layui-input"
            autofocus="autofocus"
            placeholder="添加任务"
            v-on:keyup.enter = "addItem"
        >

        <tabs
            v-bind:filter="filter"
            v-on:toggle="toggleFilter"
            v-on:clearAll="clearAll"
            v-bind:todos="todos"
        ></tabs>


        <item
            v-for="todo in filterTodos"
            v-bind:todo="todo"
            v-bind:key="todo.id"
            v-on:del="deleteTodo"
        ></item>
    </div>
</template>

<script>

import item from "./item.vue"
import tabs from "./tabs.vue"

export default {
     data(){
            // 定义数据
            return {
                todos:[],
                filter:"所有项目",
                id:0
            }
    },
    methods:{
        addItem(e){
            // 判断输入框内是否有值 
            if(e.target.value){
                console.log("用户已经输入了基本信息")
                this.todos.unshift({
                    // 添加 数据
                    id:this.id++,
                    text:e.target.value.trim(),
                    completed:false
                    
                })
            }
            e.target.value = ""  //  清空输入框内容
        },
        deleteTodo(id){
            //  遍历  匹配item组件传过来的id 并修改状态
            console.log(id)
            this.todos.forEach(todo => {
                if(todo.id === id){
                    todo.completed=true
                }
            });
        },
        toggleFilter(state){
            console.log(typeof state)
            // 接受 tabs组件传过来的按钮参数  并修改内容
            this.filter = state
        },
        clearAll(){
            //  激活 clearALL自定义事件 清除已完成事件  并覆盖内容
            this.todos = this.todos.filter(todo=>
                !todo.completed
            )
        }
    },
    components:{
        item,
        tabs
    },
    computed:{
        // 过滤数据  传给itme组件
        filterTodos(){
            let finalTodos = this.todos;
            switch(this.filter){
                case "所有项目":
                    finalTodos = this.todos
                    break;
                case "已完成":
                    //  过滤  是已完成的状态
                    finalTodos = this.todos.filter(todo=>{
                       return todo.completed
                    })
                    break;
                case "未完成":
                    //  过滤  是未完成的状态
                   finalTodos = this.todos.filter(todo=>{
                      return  !todo.completed
                    })
                    break;
            }
            return finalTodos  
        }
    }
}
</script>