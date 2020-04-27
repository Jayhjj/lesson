<template>
	<div>
		<div id="header">
			<a href="http://localhost:8080/#/details">
				<i class="iconfont">&#xe603;</i>
			</a>
			订座
		</div>
		<div id="banner">
			<div class="shopnews">
				<h2>卓越店</h2>
				<p>广东省深圳市福田区卓越世纪潮流荟商场4层L401、L402</p>
			</div>
			<span><i class="iconfont">&#xe614;</i>3.09km</span>
		</div>
		<div id="main">
			<ul>
				<li>
					<div>
						<i class="iconfont">&#xe62f;</i>
						<b>用餐时间　</b>
					</div>
					<div class="time">
						<input type="text" name="time" id="time" placeholder="请选择用餐时间" v-model.lazy="time" /><i class="iconfont">&#xe62e;</i>
					</div>
				</li>
				<li>
					<div style="width: 70%;">
						<i class="iconfont">&#xe677;</i>
						<b>用餐人数　</b>
					</div>
					<div style="width: 30%;">
						<input type="text" name="count" id="count" placeholder="1" style="width: 0.2rem;" v-model.lazy="count" />人桌大厅
						<i class="iconfont">&#xe62e;</i>
					</div>
				</li>
				<li>
					<div>
						<i class="iconfont">&#xe605;</i>
						<b>姓　名　</b>
						<input type="text" name="name" id="name" placeholder="请输入姓名" v-model.lazy="name" />
					</div>
					<div style="width: 30%;">
						<input type="radio" name="sex" v-model.lazy="sex" value="男"/> <label for="one">先生</label>
						<input type="radio" name="sex" v-model.lazy="sex"  value="女"/> <label for="one">女士</label>
					</div>
				</li>
				<li>
					<div>
						<i class="iconfont">&#xe61d;</i>
						<b>手机号　</b>
						<input type="text" name="tel" id="tel" placeholder="请输入手机号" v-model.lazy="tel" />
					</div>
				</li>
				<li>
					<div>
						<i class="iconfont">&#xe645;</i>
						<b>验证码　</b>
						<input type="text" placeholder="请输入验证码" style="width: 1rem;" />
					</div>
					<div>
						<input type="button" name="tel" id="tel" value="获取验证码" />
					</div>
				</li>
				<li>
					<b>特殊需求</b>
					<i class="iconfont">&#xe62e;</i>
				</li>
			</ul>
			<input type="submit" value="确　定" @click="send" class="d43d3d" />
		</div>
	</div>
</template>

<script>
	import Footer from './Footer.vue';
	export default {
		data() {
			return {
				time: [],
				count: [],
				name: [],
				sex: [],
				tel: []
			}
		},
		components: {
			'v-footer': Footer
		},
		methods: {
			send() {
				var url = "http://localhost:3001/api/book";
				this.$http.post(url, {
					time: this.time,
					count: this.count,
					name: this.name,
					sex: this.sex,
					tel: this.tel
				}).then(function(res) {
					// 处理成功的结果  
					alert(res.body);
				}, function(res) {
					// 处理失败的结果  
				})

			}
		},
	}
</script>

<style>
	@import '../assets/css/reset.css';
	@import '../assets/css/common.css';
	@import '../assets/css/book.css';
</style>