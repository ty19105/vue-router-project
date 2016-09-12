<template lang="html">
    <nav>
        <a v-link="{ path: '/home', activeClass: 'active' }" >首页</a>
        <a v-link="{ path: '/plan', activeClass: 'active' }">计划</a>
        <a v-link="{ path: '/detials', activeClass: 'active'  }">详情</a>
    </nav>
    <router-view></router-view>
</template>
<style lang="css">
nav {
    margin: 50px auto;
    width: 100%;
    text-align: center;
}
nav a {
    color: #2c3e50;
    padding: 5px 20px;
}
.active{
    background: #009CD5;
    color: #fff;
}
a {
    text-decoration: none;
}
</style>
