<template>
	<div class="home">
		<!--大图-->
		<v-swipe></v-swipe>
		<!--新闻商品-->
		<div id="news">
			<homeinfinitescroll></homeinfinitescroll>
			
		</div>
		<!--底部-->
		<v-footer></v-footer>
	</div>

	
</template>

<script>
	import Swipe from './swipe.vue';
	import Footer from './Footer.vue';
	import homeinfinitescroll from './home-infinite-scroll.vue'
	export default{
		data(){
			return {
				list:[]
			}
		},
		components:{
			'v-swipe':Swipe,
			'v-footer':Footer,
			'homeinfinitescroll':homeinfinitescroll
		},
		methods:{
			
		},
		mounted(){
           
           

        }
	}
	
</script>

<style scoped>
	@import '../assets/css/reset.css';
	@import '../assets/css/swiper.min.css';
	@import '../assets/css/style.css';
</style>