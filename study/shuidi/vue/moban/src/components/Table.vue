<template>
	<div class="ordering">	
	<!--头部-->
		<header id="header" style="width: 100%; height: 0.5rem; background: #fff; box-sizing: border-box;">
			<div class="map">
				<a href="#">
					<i class="iconfont">&#xe614;</i>深圳市<i class="iconfont">&#xe604;</i>
				</a>
			</div>
			<div class="search">
				<input type="text" name="search" id="search" value="" />
				<i class="iconfont fdj">&#xe601;</i>
			</div>
		</header>
		
		<!--内容区域-->
		<div id="content">
			<infiniteScroll></infiniteScroll>
		</div>
	<!--底部-->
	<v-footer></v-footer>
	</div>
</template>

<script>
	import Footer from './Footer.vue';
	import  infiniteScroll from './infinite-scroll.vue';
	export default{
		data(){
			return {
				list:[],
				
			}
		},
		components:{
			'v-footer':Footer,
            infiniteScroll:infiniteScroll,
		},
		methods:{
			requestData(){
              
            }
		},
		mounted(){
            this.requestData();

            // console.log(this.$route.query);  /*get传值*/
           

        }
	}
	
</script>

<style>
	@import '../assets/css/reset.css';
	@import '../assets/css/Ordering.css';
</style>