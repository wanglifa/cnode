<template>
    <div class="article">
        <div class="loading" v-if="loading">
            <img src="../assets/loading.gif" alt="">
        </div>
        <div v-else>
            <div class="topic_header">
                <div class="topic_title">
                    <span :class="{put_top:(posts.top=== true),
        put_good:(posts.good === true),
        'topiclist-tab':(posts.good !== true && posts.top !== true)}">
        {{posts | classify}}
        </span>
                    {{posts.title}}
                </div>
                <ul>
                    <li>• 发布于：{{posts.create_at | formDate}}</li>
                    <li>• 作者：{{posts.author.loginname}}</li>
                    <li>• {{posts.visit_count}}次浏览</li>
                    <li>• 来自：{{posts | classify}}</li>
                </ul>
                <div class="topic_content markdown-body" v-html="posts.content"></div>
            </div>
            <div id="reply">
                <div class="topbar">{{posts.replies.length}} 回复</div>
                <div v-for="(replay,index) in posts.replies" class="replySec">
                    <div class="replyUp">
                        <router-link :to="{name: 'user_info',
                        params:{name:replay.author.loginname}}">
                            <img :src="replay.author.avatar_url" alt="">
                        </router-link>
                        <router-link :to="{name: 'user_info',
                        params:{name:replay.author.loginname}}">
                            <span>{{replay.author.loginname}}</span>
                        </router-link>
                        <span>{{index+1}}楼</span>
                        <span v-if="replay.ups.length > 0">{{replay.ups.length}}</span>
                        <span v-else></span>
                    </div>
                    <p v-html="replay.content" class="markdown-body text-int"></p> 
                </div>
            </div>
        
        </div>
    </div>
</template>
<script>
export default {
    name: 'Article',
    data(){
        return {
            posts: {},
            loading: false
        }
    },
    methods: {
        getPost(){
            this.$http.get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
            .then((response)=>{
                this.loading = false;
                return this.posts = response.data.data
            },(err)=>{
                console.log(err)
            })
        }
    },
    created(){
        this.loading = true;
        this.getPost()
    },
    watch: {
        '$route'(to,from){
            this.getPost()
        }
    }
}
</script>
<style>
  .topbar {
    padding: 10px;
    background-color: #f6f6f6;
    font-size: 12px;
    margin-top: 10px;
  }

  .article:not(:first-child) {
    margin-right: 340px;
    margin-top: 15px;
  }

  #reply, .topic_header {
    background-color: #fff;
  }

  #reply {
    margin-top: 15px;
  }

  #reply img {
    width: 30px;
    height: 30px;
    position: relative;
    bottom: -9px;
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
  #reply a, #reply span {
    font-size: 13px;
    color: #666;
    text-decoration: none;
  }
  #reply .text-int{
      padding-top: 8px;
  }
  .replySec{
    border-bottom:1px solid #e5e5e5;
    padding:0 10px;
  }

  .loading {
    text-align: center;
    padding-top: 300px;
  }

  .replyUp a:nth-of-type(2) {
    margin-left: 0px;
    display: inline-block;
  }

  .topic_header {
    padding: 10px;
  }

  .topic_title {
    font-size: 20px;
    font-weight: bold;
    padding-top: 8px;
  }

  .topic_header ul {
    list-style: none;
    padding: 0px 0px;
    margin: 6px 0px;
  }

  .topic_header li {
    display: inline-block;
    font-size: 12px;
    color: #838383;
  }

  .topic_content {
    border-top: 1px solid #e5e5e5;
    padding: 10px;
  }

  .markdown-text img {
    width: 92% !important;
  }
</style>


