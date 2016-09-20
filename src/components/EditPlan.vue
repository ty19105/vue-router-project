<template>
    <div id="detials">
        <p>
            创建时间：
            <span>
                <input type="text" value="{{item.createTime || ''}}">
            </span>
        </p>
        <p>
            计划名称：
            <span>
                <input type="text" value="{{item.text || ''}}" v-model="item.text">
            </span>
        </p>
        <p>
            <span class="plan-status" v-if="item.isFinished == false">
                状态：未完成
            </span>
            <span class="plan-status finshedColor" v-else>
                状态：已完成
            </span>
        </p>
        <a v-on:click="save()" class="btn save">保存</a>
    </div>
</template>

<script>
import Store from './store.js';
import router from '../router.js'

export default {
    data() {
        return {
            items: Store.fetch(),
            newItem: '',
            item: {}
        }
    },
    ready() {
        const id = this.getId();

        this.item = {
            id: id,
            createTime: this.items[id].createTime,
            text: this.items[id].text,
            isFinished: this.items[id].isFinished
        };
    },
    methods: {
        save: function() {
            const id = this.getId();
            this.items[id] = this.item;
            Store.save(this.items);
            alert("保存成功");
            router.go('/plan');
        },
        getId() {
            const id = this.$route.params.planId;
            return id;
        }
    }
};
</script>
<style lang="css">
#detials {
    margin: 20px auto;
    padding: 30px;
    width: 80%;
    border: 1px solid #ddd;
    border-radius: 5px;
}
#detials >p {
    height: 50px;
}
#detials  input {
    width: 80%;
    height: 20px;
    border: none;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 5px 10px;
}
.save {
    display: block;
    margin: 50px auto 20px;
    clear: both;
    background: #009CD5;
    border: none;
    color: #fff;
}

</style>
