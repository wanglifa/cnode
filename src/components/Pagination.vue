<template>
    <div class="pagination">
        <button @click="changeBtn">首页</button>
        <button @click="changeBtn">上一页</button>
        <button v-if="toggle">...</button>
        <button v-for="page in pages"
        :class="[{currentPage:page=== currentPage},'pagebtn']"
        @click="changeBtn(page)"
        >{{page}}</button>
        <button @click="changeBtn">下一页</button>
    </div>
</template>
<script>
import $ from 'jquery';
export default {
    name: 'Pagination',
    data(){
        return {
            pages: [1,2,3,4,5,'...'],
            currentPage: 1,
            toggle: false
        }
    },
    methods: {
        changeBtn(page){
            if(typeof page !== 'number'){
                let target = page.target
                if(target){
                  switch(target.innerText){
                    case '上一页':
                      $('button.currentPage').prev().click()
                      break;
                    case '下一页':
                      $('button.currentPage').next().click()
                      break;
                    case '首页':
                      this.pages=[1,2,3,4,5,'...']
                      this.changeBtn(1)
                      break;
                    default:
                      break
                  }
                }
              return
            }
            this.currentPage = page;
            if(page === this.pages[4]){
                this.pages.shift()
                this.pages.splice(4,0,this.pages[3]+1)
            }else if(page === this.pages[0] && page !== 1){
                this.pages.unshift(this.pages[0]-1)
                this.pages.splice(5,1)
            }
            if(page > 4){
                this.toggle = true;
            }else{
                this.toggle = false;
            }
            this.$emit('handle',this.currentPage)
        }
    }
}
</script>
<style scoped>
.pagination {
    margin-top: 5px;
    margin-bottom: 20px;
    background-color: white;
    padding: 6px 20px;
    border-radius: 5px;
    /*box-shadow: 0px 2px 9px #888888;*/
    border: 1px solid #888888;
  }

  button {
    background-color: #fff;
    border: 1px solid #ddd;
    color: #778087;
    border-radius: 3px;
    outline: none;
    height: 21px;
    cursor: pointer;
    padding: 0 2px;
    width: 55px;
    height: 29px;
  }

  .pagebtn {
    position: relative;
    bottom: 1px;
    width: 40px;
    margin: 0 4px;
  }

  .currentPage {
    color: white;
    background-color: #1f1b1b;

  }
</style>


