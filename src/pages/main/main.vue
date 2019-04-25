<template>
  <div>
    <div id="example-1">
      <button v-on:click="counter += 1">Add 1</button>
      <p>The button above has been clicked {{ counter }} times.</p>
    </div>

    <div id="example-2">
      <!-- `greet` 是在下面定义的方法名 -->
      <button v-on:click="greet">Greet</button>
    </div>

    <div>
      <button v-on:click="say('hi')">Say hi</button>
      <button v-on:click="say('what')">Say what</button>
    </div>

    <button v-on:click="warn('Form cannot be submitted yet.', $event)">
      Submit
    </button>


<br/>
    <input v-model="message" placeholder="edit me">
    <p>Message is: {{ message }}</p>

<br/>

    <span>Multiline message is:</span>
    <p style="white-space: pre-line;">{{ message }}</p>
    <br>
    <textarea v-model="message" placeholder="add multiple lines"></textarea>
    <br/>

    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">{{ checked }}</label>

    <br/>
    <div id='example-3'>
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames">
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
      <label for="mike">Mike</label>
      <br>
      <span>Checked names: {{ checkedNames }}</span>
    </div>

    <br/>

    <div id="example-4">
      <input type="radio" id="one" value="One" v-model="picked">
      <label for="one">One</label>
      <br>
      <input type="radio" id="two" value="Two" v-model="picked">
      <label for="two">Two</label>
      <br>
      <span>Picked: {{ picked }}</span>
    </div>

    <div id="example-6">
      <select v-model="selected" multiple style="width: 50px;">
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <br>
      <span>Selected: {{ selected }}</span>
    </div>


    <select v-model="selected">
      <option v-for="option in options" v-bind:value="option.value">
        {{ option.text }}
      </option>
    </select>
    <span>Selected: {{ selected }}</span>

    <br/>
    <!-- 当选中时，`picked` 为字符串 "a" -->
    <!--<input type="radio" v-model="picked" value="a">-->

    <!-- `toggle` 为 true 或 false -->
    <!--<input type="checkbox" v-model="toggle">-->
    <div
      v-for="post in posts"
      v-bind:key="post.id"
      v-bind:title="post.title"
    >
      <p>{{post.title}}</p>
    </div>
  </div>
</template>

<script>
  import $http from 'axios'

  export default {
      name: "main",

      data(){
        return {
          counter : 0 ,
          name : 'vue.js',
          message:null,
          checkedNames:[],
          picked:'',
          selected: [],
          // selected: 'A',
          options: [
            { text: 'One', value: 'A' },
            { text: 'Two', value: 'B' },
            { text: 'Three', value: 'C' }
          ],
          posts: [
            { id: 1, title: 'My journey with Vue' },
            { id: 2, title: 'Blogging with Vue' },
            { id: 3, title: 'Why Vue is so fun' }
          ],


        }
      },

    // 在 `methods` 对象中定义方法
    methods: {
      greet: function (event) {
        // `this` 在方法里指向当前 Vue 实例
        alert('Hello ' + this.name + '!')
        // `event` 是原生 DOM 事件
        if (event) {
          alert(event.target.tagName)
        }
      },

      say: function (message) {
        alert(message)
      },

      warn: function (message, event) {
        // 现在我们可以访问原生事件对象
        if (event) event.preventDefault()
        alert(message)
      }
    }
  }
  // 也可以用 JavaScript 直接调用方法
  // example2.greet() // => 'Hello Vue.js!'
</script>

<style scoped>

</style>
