<template>
	<div class="page-swipe">
		<div class="icon">
			<i class="iconfont sao">&#xe60c;</i>
			<i class="iconfont fen">&#xe65a;</i>
		</div>
		<mt-swipe :auto="2000">
			<mt-swipe-item class="slide1" v-for="item in list">
				<div class="banner">
					<img :src="'http://localhost:3001/'+item.pic" />
				</div>
			</mt-swipe-item>
		</mt-swipe>
	</div>
</template>
<script type="text/javascript">
	export default {
		data() {
			return {
				list: [],
			}
		},
		methods: {
			reqData() {
				var url = "http://localhost:3001/api/focus";
				this.$http.jsonp(url).then(data => {
					console.log(data);
					this.list = data.body.result;
				}, err => {
					console.log(err);
				})
			}
		},
		mounted() {
			this.reqData();
		}
	}
</script>
<style>
	.icon {
		width: 1rem;
		position: absolute;
		height: .5rem;
		z-index: 9999;
		right: .1rem;
	}
	
	.icon i {
		color: #fff;
		position: absolute;
		font-size: .23rem;
	}
	
	.icon .sao {
		position: absolute;
		right: .1rem;
		top: .1rem;
		background: red;
		border-radius: 50%;
		padding: .05rem;
	}
	
	.icon .fen {
		position: absolute;
		right: .5rem;
		top: .1rem;
		background: #000;
		border-radius: 50%;
		padding: .05rem;
		display: flex;
		justify-content: center;
	}
	
	.page-swipe {
		height: 2.88rem;
	}
	
	.is-active {
		background: #D43D3D !important;
		opacity: 1;
	}
	/*.banner{
		width: 100%;
	}*/
	
	.banner img {
		width: 100%;
		height: 2.88rem;
	}
</style>