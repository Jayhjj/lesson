<template>
  <div class="page-infinite">
  
    <div class="page-infinite-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">

      <ul class="page-infinite-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50">
         <li v-for='item in list'>
					<a href="http://localhost:8080/#/details">
						<div class="c-left">
							<img :src="'http://localhost:3001/'+item.pic" :alt="item.title" />
						</div>
						<div class="c-middle" style="text-align: left;width: 50%;">
							<h3>{{item.title}}</h3>
							<span>{{item.description}}</span>
						</div>
						<div class="c-right">
							<i>{{item.add_time}}</i>
							<span>3.09Km</span>
							<button>订餐</button>
						</div>
					</a>
				</li>
      </ul>

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
			 	var url="http://localhost:3001/api/shop";
	   		this.$http.jsonp(url).then((data)=>{
//        console.log(data);
          this.list=that.list.concat(data.body.result);                
		      that.loading = false;
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
