<template>
	<div class="Me">
		<header>
			<div class="top">
				<span class="back">
					<img src="../assets/images/Me/back.png" alt="返回" />
				</span>
				<span class="set">
					<img src="../assets/images/Me/set.png" alt="设置" />
				</span>
			</div>
			<div class="head">
				<span class="heade_pic">
					<img src="../assets/images/Me/boy.jpg"/>
					<i class="icon-vip"></i>
				</span>
			</div>
			<h2 class="username">捞粉儿<i class="icon-sex"><img src="../assets/images/Me/nan.png"/></i></h2>
			<p class="member_num">会员卡号:<span id="tel">1572740088</span></p>
			<p class="flag"><span class="flag_label no_flag">未添加任何标签</span></p>
		</header>
		<main>
			<ul class="service service-p1">
				<li>
					<a href="#">
						<router-link to='/myorder'>
						<div class="left">
							<i class="iconfont service_logo">&#xe611;</i>我的订单
						</div>
						<i class="iconfont toRight">&#xe62e;</i>
						</router-link>
					</a>
				</li>
				<li>
					<a href="#">
						<div class="left">
							<i class="iconfont service_logo">&#xe600;</i>我的积分
						</div>
						<i class="iconfont toRight">&#xe62e;</i>
					</a>
				</li>
				<li>
					<a href="#">
						<div class="left">
							<i class="iconfont service_logo">&#xe69b;</i>我的卡券
						</div>
						<i class="iconfont toRight">&#xe62e;</i>
					</a>
				</li>
				<li>
					<a href="#">
						<div class="left">
							<i class="iconfont service_logo">&#xe602;</i>免密支付
						</div>
						<i class="iconfont toRight">&#xe62e;</i>
					</a>
				</li>
			</ul>
			<ul class="service service-p2">
				<li>
					<a href="#">
						<div class="left">
							<i class="iconfont service_logo">&#xe65c;</i>积分抽奖
						</div>
						<i class="iconfont toRight">&#xe62e;</i>
					</a>
				</li>
			</ul>
			<ul class="service service-p3">
				<li>
					<a href="#">
						<div class="left">
							<i class="iconfont service_logo">&#xe611;</i>海捞卡
						</div>
						<i class="iconfont toRight">&#xe62e;</i>
					</a>
				</li>
				<li>
					<a href="#">
						<div class="left">
							<i class="iconfont service_logo">&#xe611;</i>AR相机
						</div>
						<i class="iconfont toRight">&#xe62e;</i>
					</a>
				</li>
			</ul>
			<ul class="service service-p4">
				<li>
					<a href="#">
						<div class="left">
							<i class="iconfont service_logo">&#xe611;</i>Hi说说
						</div>
						<i class="iconfont toRight">&#xe62e;</i>
					</a>
				</li>
				<li>
					<a href="#">
						<div class="left">
							<i class="iconfont service_logo">&#xe611;</i>Hi地盘
						</div>
						<i class="iconfont toRight">&#xe62e;</i>
					</a>
				</li>
				<li>
					<a href="#">
						<div class="left">
							<i class="iconfont service_logo">&#xe611;</i>Hi游戏
						</div>
						<i class="iconfont toRight">&#xe62e;</i>
					</a>
				</li>
			</ul>
		</main>
		<v-footer></v-footer>
	</div>

</template>

<script>
	import Footer from './Footer.vue';
	export default {
  
  data () {
    return {
      
    }
  },
  components:{
  	'v-footer':Footer
  }
}
</script>

<!--<style>
</style>-->
<style scoped>
  @import '../assets/css/reset.css';
  @import '../assets/css/personIndex.css';
</style>
