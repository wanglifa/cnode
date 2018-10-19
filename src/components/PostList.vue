<template>
    <div class="main">
        <div class="loading" v-if="loading">
            <img src="../assets/loading.gif" alt="">
        </div>
        <div class="posts" v-else>
            <div class="top"></div>
            <ul>
                <li>
                    <div class="toobar">
                        <span>全部</span>
                        <span>精华</span>
                        <span>分享</span>
                        <span>问答</span>
                        <span>招聘</span>
                    </div>
                </li>
                <li v-for="post in posts">
                    <!-- 头像 -->
                    <router-link :to="{name: 'user_info',params:{name:post.author.loginname}}">
                        <img :src="post.author.avatar_url" alt="">
                    </router-link>
                    <!-- 回复/浏览 -->
                    <span class="allcount">
                        <span>{{post.reply_count}}</span>/
                        <span>{{post.visit_count}}</span>
                    </span>
                    <!--帖子的分类-->
                    <span :class="{put_top:(post.top=== true),
                    put_good:(post.good === true),
                    'topiclist-tab':(post.good !== true && post.top !== true)}">
                        {{post | classify}}
                    </span>
                    <!-- 标题 -->
                    <router-link :to="{name: 'article',
                    params:{id:post.id,name:post.author.loginname}}">
                        <span class="title">
                            {{post.title}}
                        </span>
                    </router-link>
                    <span class="last_reply">
                        {{post.last_reply_at | formDate}}
                    </span>
                </li>
                <li>
                    <Pagination @handle="attrPage"></Pagination>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import Pagination from './Pagination';
export default {
    name: 'PostList',
    data(){
        return {
            posts: [],
            loading: false,
            page: 1
        }
    },
    components: {
        Pagination
    },
    beforeMount(){
        this.loading = true;
        this.getData()
    },
    methods: {
        getData(){
            this.$http.get('https://cnodejs.org/api/v1/topics',{
            params: {
                limit: 10,
                page: this.page
            }
        }).then((response)=>{
            this.loading = false;
            return this.posts = response.data.data
            
        })
        .catch((err)=>{
            console.log(err)
        })
        },
        attrPage(value){
            this.page = value;
            this.getData()
        }
    }
}
</script>

<style scoped>
.main{
    width: 90%;
    max-width: 1400px;
    min-width: 960px;
    margin: 15px auto;
}
li img{
    width: 30px;
    height: 30px;
    vertical-align: middle;
}
ul {
    list-style: none;
    width: 100%;
    max-width: 1344px;
    margin: 0 auto;
  }

  ul li:not(:first-child) {
    padding: 9px;
    font-size: 15px;
    font-family: "Helvetica Neue", "Luxi Sans", "DejaVu Sans", Tahoma, "Hiragino Sans GB", STHeiti, sans-serif !important;
    font-weight: 400;
    background-color: white;
    color: #333;
    border-top: 1px solid #f0f0f0;
  }

  li:not(:first-child):hover {
    background: #f5f5f5;;
  }

  li:last-child:hover {
    background: white;
  }

  li span {
    line-height: 30px;
  }

  .allcount {
    width: 70px;
    display: inline-block;
    text-align: center;
    font-size: 12px;
  }

  .reply_count {
    color: #9e78c0;
    font-size: 14px;
  }

  .put_good, .put_top {
    background: #80bd01;
    padding: 2px 4px;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -o-border-radius: 3px;
    color: #fff;
    font-size: 12px;
    margin-right: 10px;
  }

  .topiclist-tab {
    background-color: #e5e5e5;
    color: #999;
    padding: 2px 4px;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -o-border-radius: 3px;
    font-size: 12px;
    margin-right: 10px;
  }

  .last_reply {
    text-align: right;
    min-width: 50px;
    display: inline-block;
    white-space: nowrap;
    float: right;
    color: #778087;
    font-size: 12px;
  }

  .toobar {
    height: 40px;
    background-color: #f5f5f5;
  }

  .toobar span {
    font-size: 14px;
    color: #80bd01;
    line-height: 40px;
    margin: 0 10px;
    cursor: pointer;
  }

  .toobar span:hover {
    color: #9e78c0;
  }

  a {
    text-decoration: none;
    color: black;
  }

  a:hover {
    text-decoration: underline;
  }

  .loading {
    text-align: center;
    padding-top: 300px;
  }
</style>


