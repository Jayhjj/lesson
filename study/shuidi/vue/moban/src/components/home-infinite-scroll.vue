<template>
  <div class="page-infinite">
  
    <div class="page-infinite-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">

      <div class="page-infinite-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50">
         <div id="news-content" v-for='item in list'>
				<a href="#" style="display: flex;justify-content: space-between;">
					<div class="n-left" style="width: 60%;">
						<h3 class="title">{{item.title}}</h3>
						<small>【神回复】</small>
						<div class="time">
							<span><i class="iconfont">&#xe653;</i>&nbsp;5</span><span><i class="iconfont">&#xe60d;</i>&nbsp;2</span><span style="width: 0.9rem;height: 0.2rem; display: block; overflow: hidden;">{{item.add_time}}</span>
						</div>
					</div>
					<div class="n-right">
						<img :src="'http://localhost:3001/'+item.pic" />
					</div>
				</a>
			</div>
      </div>

      <!--加载更多-->
      <p v-show="loading" class="page-infinite-loading">
        <mt-spinner type="fading-circle"></mt-spinner>
        	加载中...
      </p>
    </div>
  </div>
</template>

<style>
  
</style>

<script type="text/babel">
  export default {
    data() {
      return {
        list: [],
        loading: false,
        allLoaded: false,
        wrapperHeight: 0,
        page:1
      };
    },
    methods: {
      // this.loading = true;
      loadMore() {   /*加载更多*/
        var that=this;
        that.loading = true;
			 	var url="http://localhost:3001/api/news?page="+this.page;

               this.$http.jsonp(url).then((data)=>{
//                  console.log(data);

                    that.list=that.list.concat(data.body.result);

               // console.log(data);
            if(data.body.result.length<1){
                that.loading = true;
            }else{
                that.loading = false;
            }

            that.page++;
	
               },err=>{
                 console.log(err)
               })
      }
    },
    mounted() {
      //设置可视区域的高度
      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;     
    }
  };
</script>
