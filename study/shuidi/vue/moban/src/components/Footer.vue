<template>
	<!--底部-->
		<div id="footer">
			<ul>
				<li>
					<router-link to='/home'>
						<i class="iconfont">&#xe677;</i>
						<span>排号</span>
					</router-link>
				</li>
				<li>
					<router-link to='/table'>
						<i class="iconfont">&#xe6d0;</i>
						<span>订餐</span>
					</router-link>
				</li>
				<li>
					<router-link to='/more'>
						<i class="iconfont">&#xe63a;</i>
						<span>更多</span>
					</router-link>
				</li>
				<li>
					<router-link to='/me'>
						<i class="iconfont">&#xe605;</i>
						<span>我的</span>
					</router-link>
				</li>
			</ul>
		</div>
</template>

<script>
</script>

<style>
	@import '../assets/css/reset.css';

/*底部*/
 body{
	padding-bottom: .5rem;
	overflow-x: hidden;
}
#footer{
	display: flex;
	position: fixed;
	width: 100%;
	bottom: 0;
	left: 0;
	height: .5rem;
	background: #fff;
	z-index: 99;
}
#footer ul{
	border-top: 1px #EEEEEE solid;
	display: flex;
	width: 100%;
	background: #fff;
}
#footer ul li{
	display: flex;
	justify-content: space-between;
	width: 25%;
	justify-content: center;
	align-items: center;
}
#footer ul li a{
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	
}
#footer ul li a i{
	font-size: .2rem;
}
#footer ul li a span{
	font-size: .14rem;
}
.d43d3d{
	background: #d43d3d;
	color: #fff;
}
</style>