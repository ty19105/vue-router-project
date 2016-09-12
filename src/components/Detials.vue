<template>
  <div id="detials">
        <div>
            <p>当前路径: {{decodeURI($route.path)}}</p>
            <p>当前路由参数: {{$route.params.planId}}</p>
        </div>
  </div>
</template>
