<template>
  <div id="plan">
      <h1 v-text="title"></h1>
      <input type="text" v-model="newItem" v-on:keyup.enter="addNew" placeholder="add project" id="add-plan">
      <button type="button" name="button" class="btn" @click="addNew">添加</button>
      <button type="button" name="button" class="btn" @click="getData">接口添加</button>
      <li>
          <span class="create-time">时间</span>
          <span class="plan-name">计划名称</span>
          <span class="plan-status">状态</span>
          <span class="plan-opr">操作</span>

      </li>
      <ul>
          <li v-for="item in items">
              <span class="create-time">{{ item.createTime }}</span>
              <a v-bind:class="{finshed:item.isFinished}"
                    v-on:click="toggleFinshed(item)"
                    class="plan-name">
                        {{ item.text }}
                </a>
              <span class="plan-status" v-if="item.isFinished == false">
                  未完成
              </span>
              <span class="plan-status finshedColor" v-else>
                  已完成
              </span>
              <a class="edit-plan btn" v-link="{ path: '/plan/edit', name: 'edit', params: { planId: item.id }}">编辑</a>
              <a class="del-plan btn" v-on:click="delplan(item)">删除</a>
          </li>
      </ul>
  </div>
</template>

<script>
    import Store from './store.js';
    export default {
      data: function() {
          return {
                title: 'This is a plan',
                items: Store.fetch(),
                newItem: '',
                apiUrl: 'http://api.xiaohua.360.cn/Baoxiao/listData?callback=__callback&tag=&page=1'
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
                      id: this.items.length,
                      createTime: this.getTime(),
                      text: this.newItem,
                      isFinished: false
                  });
                  this.newItem = '';
                }
            },
            delplan: function(item) {

              this.items.$remove(item);

            },
            getData: function() {
                this.$http.jsonp(this.apiUrl)
                    .then((response) => {
                        response.data.content_list.map((data) => {

                            this.$set('newItem', data.text);
                            this.addNew();
                        });
                    })
                    .catch((response) => {
                        console.log(response);
                    });
            },
            getTime: function() {
                var now = new Date(),
                    year = now.getFullYear(),
                    month = now.getMonth() + 1,
                    day = now.getDate(),
                    h = now.getHours(),
                    m = now.getMinutes();

                var clock = year + "-";

                if(month < 10)
                    clock += "0";
                clock += month + "-";

                if(day < 10)
                    clock += "0";

                clock += day + " ";

                if(h < 10)
                    clock += "0";

                clock += h + ":";
                if (m < 10)
                    clock += '0';

                clock += m;
                return(clock);
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
    #plan {
        width: 100%;
        color: #2c3e50;
        font-family: Source Sans Pro, Helvetica, sans-serif;
        text-align: center;
    }
    #plan li {
        list-style: none;
        background: rgba(226, 226, 226, .2);
        padding: 10px 0;
        border-bottom: 1px solid #F4F7FA;
    }
    #plan a {
      text-decoration: none;
    }
    #add-plan {
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
    .plan-name {
        width: 20%;
        float: left;
        color: #42b983;
    }
    .plan-status {
        width: 20%;
        float: left;
    }
    .btn {
        display: inline-block;
        width: 45%;
        text-align: center;
        max-width: 80px;
        height: 30px;
        line-height: 30px;
        box-sizing: border-box;
    }
    .edit-plan {
        background: #009CD5;
        border: none;
        color: #fff;
    }
    .del-plan {
        color: #fff;
        margin-left: 5px;
        background: #C93B2A;
    }
    #plan .finshed {
        text-decoration: line-through;
        color: #C93B2A;
    }
    #plan .finshedColor {
        color: #C93B2A;
    }
</style>
