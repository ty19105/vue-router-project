<template>
  <div id="plane">
      <h1 v-text="title"></h1>
      <input type="text" v-model="newItem" v-on:keyup.enter="addNew" placeholder="add project">
      <ul>
          <li v-for="item in items" v-bind:class="{finshed:item.isFinished}" v-on:click="toggleFinshed(item)">
              <a v-link="{ name: 'plane', params: { planeId: item.label }}">{{ item.label }}</a>
          </li>
      </ul>
  </div>
</template>

<script>
    import Store from './store.js';

    export default {
      data: function() {
          return {
              title: 'This is a plane',
              items: Store.fetch(),
                  newItem: ''
              }
          },
          watch: {
              //当items变化时候，执行
              items: {
                  handler: function(items) {
                      Store.save(items);
                  },
                  deep: true
              }
          },
          methods: {
              toggleFinshed: function(item) {
                  item.isFinished = !item.isFinished;
              },
              addNew: function() {
                  if(this.newItem) {
                      this.items.push({
                          label: this.newItem,
                          isFinished: false
                      });
                      this.newItem = '';
                  }
              }
          }
    }
</script>
<style>
    html {
      height: 100%;
    }

    body {
      display: flex;
      justify-content: center;
      height: 100%;
    }

    #plane {
      color: #2c3e50;
      max-width: 600px;
      font-family: Source Sans Pro, Helvetica, sans-serif;
      text-align: center;
    }

    #plane a {
      color: #42b983;
      text-decoration: none;
    }
    .finshed {
        text-decoration: line-through;
    }
    .logo {
      width: 100px;
      height: 100px
    }
</style>
