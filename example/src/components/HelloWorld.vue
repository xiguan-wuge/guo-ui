<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <g-button></g-button>
    <br>
    <button @click="toggleTheme">切换主题：{{theme}}</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      theme: 'default'
    }
  },
  mounted() {
    this.htmlEl = document.documentElement
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === 'default' ? 'dark' : 'default' 
      this.htmlEl.setAttribute('data-theme', this.theme)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
