<template>
  <div id="plane">
      <h1 v-text="title"></h1>
      <input type="text" v-model="newItem" v-on:keyup.enter="addNew" placeholder="add project" id="add-plane">
      <li>
          <span class="create-time">时间</span>
          <span class="plane-name">计划名称</span>
          <span class="plane-status">状态</span>
          <span class="plane-opr">操作</span>

      </li>
      <ul>
          <li v-for="item in items">
              <span class="create-time">2016-9-12 12:00</span>
              <a v-bind:class="{finshed:item.isFinished}"
                    v-on:click="toggleFinshed(item)"
                    class="plane-name">
                        {{ item.label }}
                </a>
              <span class="plane-status">未完成</span>
              <a class="edit-plane btn" v-link="{ name: 'plane', params: { planeId: item.label }}">编辑</a>
              <a class="del-plane btn" v-on:click="delPlane(item)">删除</a>
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
              },
              delPlane: function(item) {
                  console.log(item);
                  this.items.$remove(item);

              }
          }
    }
</script>
<style>
    ul,
    li {
        padding: 0;
        margin: 0;
    }
    #plane {
        width: 100%;
        color: #2c3e50;
        font-family: Source Sans Pro, Helvetica, sans-serif;
        text-align: center;
    }
    #plane li {
        list-style: none;
        background: rgba(226, 226, 226, .2);
        padding: 10px 0;
        border-bottom: 1px solid #F4F7FA;
    }
    #plane a {
      text-decoration: none;
    }
    #add-plane {
        margin: 20px auto;
        width: 30%;
        height: 30px;
        border: none;
        border: 1px solid #ddd;
        border-radius: 5px;
        padding: 5px 10px;
    }
    .create-time {
        width: 20%;
        float: left;
    }
    .plane-name {
        width: 20%;
        float: left;
        color: #42b983;
    }
    .plane-status {
        width: 20%;
        float: left;
    }
    .btn {
        display: inline-block;
        width: 45%;
        max-width: 80px;
        height: 30px;
        line-height: 30px;
        box-sizing: border-box;
    }
    .edit-plane {
        background: #009CD5;
        border: none;
        color: #fff;
    }
    .del-plane {
        color: #fff;
        margin-left: 5px;
        background: #C93B2A;
    }
    #plane .finshed {
        text-decoration: line-through;
    }
    .logo {
      width: 100px;
      height: 100px
    }
</style>
