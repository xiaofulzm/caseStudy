<template>
    <div>
        <input type="checkbox" name="" v-model="todo.completed">
        <span>{{todo.text}}</span>
        <button v-on:click="deleteTodo">完成</button>
    </div>
</template>


<script>
export default {
    props:{
        todo:{
            type:Object,
            required:true
        }
    },
    methods:{
        // 传给父组件 需要完成的id
        deleteTodo(){
            console.log(this.todo.id)
            this.$emit("del",this.todo.id)
        }
    }
}
</script>