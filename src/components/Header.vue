<template>
    <div class="header">
        <div class="suit-contain clearfix">
            <router-link :to="{name:'postlist'}" class="brand">
                <img src="../assets/cnodejs_light.svg" alt="">
            </router-link>
            <ul class="nav">
                <li>
                    <router-link :to="{name:'postlist'}">
                        首页
                    </router-link>
                </li>
                <li><a href="">新手入门</a></li>
                <li><a href="">API</a></li>
                <li><a href="">关于</a></li>
                <li><a href="">注册</a></li>
                <li><a href="">登录</a></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Header'
}
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
}
.header{
    background: #444;
    padding: 5px;
}
.suit-contain{
    width: 90%;
    margin: 0 auto;
}
.brand{
    width: 120px;
}
img{
    max-width: 100%;
}
.brand{
    float: left;
    line-height: 40px;
    height: 40px;
    padding: 3px 0;
}
.nav{
    float: right;
}
a:hover{
    color: #fff;
}
.clearfix::after{
    content: '';
    display: block;
    clear: both;
}
.nav li{
    float: left;
}
.nav li a{
    color: #ccc;
    text-decoration: none;
    padding: 10px 15px;
    line-height: 20px;
    font-size: 13px;
    display: block;
}
</style>


