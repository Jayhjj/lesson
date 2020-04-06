<template>
	<div>
		<div class="head">
			<a href="http://localhost:8080/#/stores" class="iconfont">&#xe603;</a>
			<span>外送自取</span>
		</div>

		<div class="box">
			<router-link to="/myorder/ding">外送</router-link>
			<router-link to="/myorder/zq">自取</router-link>
		</div>
		<router-view></router-view>

		

	</div>
</template>

<script>
	var storage = {
		setItem: function(key, value) {
			localStorage.setItem(key, JSON.stringify(value));
		},
		getItem: function(key) {
			return JSON.parse(localStorage.getItem(key));
		},
		removeItem: function(key) {
			localStorage.removeItem(key);
		},
		clear: function() {
			localStorage.clear();
		}
	}
	export default {
		data() {
			return {
				list: [],
				
			}
		},
		methods: {
			//			send() {
			//				var url = "http://localhost:3001/api/book";
			//				this.$http.post(url, {
			//					time: this.time,
			//					count: this.count,
			//					name: this.name,
			//					sex: this.sex,
			//					tel: this.tel
			//				}).then(function(res) {
			//					// 处理成功的结果  
			//					alert(res.body);
			//				}, function(res) {
			//					// 处理失败的结果  
			//				})
			//
			//			}
		},
	}
</script>

<style>
	* {
		margin: 0px;
		padding: 0px;
	}
	
	html {
		font-size: 625%;
	}
	
	body {
		padding-bottom: .5rem;
		font-size: .16rem;
		overflow-x: auto;
		/*background: #f0efed;*/
		background: #f9f9f9;
	}
	
	ul,
	li,
	li,
	ol,
	a {
		text-decoration: none;
		list-style: none;
	}
	
	.head {
		width: 100%;
		height: .5rem;
		display: flex;
		background: #FFFFFF;
	}
	
	.head a {
		display: block;
		width: ;
		line-height: .5rem;
		color: #c85e68;
		padding-left: .1rem;
	}
	
	.head span {
		display: block;
		flex: 1;
		text-align: center;
		line-height: .5rem;
		color: #02313b;
	}
	
	.box {
		width: 80%;
		display: flex;
		margin: .1rem auto;
		border: .01rem solid gainsboro;
		border-radius: 5%;
		overflow: hidden;
	}
	
	.box a:first-child {
		background: #d63c3e;
		flex: 1;
		height: .32rem;
		line-height: .32rem;
		text-align: center;
		color: #FFFFFF;
		display: block;
	}
	
	.box a:last-child {
		flex: 1;
		background: #FFFFFF;
		height: .32rem;
		line-height: .32rem;
		text-align: center;
		display: block;
	}
	
	.zf {
		display: flex;
		width: 100%;
		position: fixed;
		height: .5rem;
		bottom: 0;
		left: 0;
	}
	
	.zf .mozf {
		width: 70%;
		padding-left: .15rem;
		height: .5rem;
		line-height: .5rem;
		background: #272727;
		color: #FFFFFF;
	}
	
	.zf .mozf span {
		padding-left: .05rem;
	}
	
	.zf a {
		display: block;
		flex: 1;
		height: .5rem;
		line-height: .5rem;
		text-align: center;
		background: #d43d3d;
		color: #F9F9F9;
	}
</style>