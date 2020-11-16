<template>
    <div>
        <button>{{unfinisItem}}个未完成</button>
        <button v-for="state in states" v-bind:key="state"
            v-on:click="toggleFilter(state)"
        >{{state}}</button>

        <button 
            v-on:click="clearAll"        
        >清除已完成事件</button>
    </div>
</template>

<script>
export default {
    props:{
        todos:{
            type:Array,
            required:true
        },
        filter:{
            type:String,
            required:true
        }
    },
    data(){
        return {
            states:[
                "所有项目",
                "已完成",
                "未完成"
            ]
        }
    },
    computed:{
        //  过滤未完成的数组length
        unfinisItem(){
            return this.todos.filter(todo=>
                !todo.completed
            ).length

            // console.log(this.todos.filter(todo=>{
            //     console.log(todo)
            // }))
        }
    },
    methods:{
        //  激活父组件 toggle事件  并传入所点击的按钮样式
        toggleFilter(state){
            this.$emit("toggle",state)
        },
        clearAll(){
            //  激活父组件 clearALL  事件
            this.$emit("clearAll")
        }
    }
}
</script>