<template>
  <div>
      <Header></Header>
      <todo></todo>
      <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";
import todo from "./components/todo.vue";

export default {
  components:{
      Header,
      Footer,
      todo
  }
};
</script>


<style >
h1 {
  text-align: center;
  background: red;
  transform: rotate(10deg);
}
</style>