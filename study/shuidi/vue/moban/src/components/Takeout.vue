<template>
	<div>
		<div id="header">
			<a href="#">
				<i class="iconfont">&#xe603;</i>
			</a>
			外送信息
		</div>
		<div id="main">
			
				<ul>
					<li>
						<div>
							<i class="iconfont">&#xe605;</i>
							<b>姓　名：　</b>
							<input type="text" name="name" id="name" placeholder="请输入姓名" v-model.lazy="name"/>
						</div>
						<div class="sex">
							<input type="radio" name="sex" v-model.lazy="sex" value="男"/>先生
							<input type="radio" name="sex" v-model.lazy="sex" value="女"/>女士
						</div>
					</li>
					<li>
						<div>
							<i class="iconfont">&#xe61d;</i>
							<b>手机号：　</b>
							<input type="text" name="tel" id="tel" placeholder="请输入手机号"  v-model.lazy="tel"/>
						</div>
					</li>
					<li>
						<div>
							<i class="iconfont">&#xe645;</i>
							<b>验证码：　</b>
							<input type="text" placeholder="请输入验证码" />
						</div>
						<div>
							<input type="button" value="获取验证码" class="d43d3d"/>
						</div>
					</li>
					<li>
						<div>
							<i class="iconfont">&#xe61d;</i>
							<b>外送地址：　</b>
							<input type="text" placeholder="选择配送地址" />
						</div>
					</li>
					<li>
						<div>
							<i class="iconfont">&#xe61d;</i>
							<b>详细地址：　</b>
							<input type="text" placeholder="例：16号楼三单元401" v-model.lazy="loc"/>
						</div>
					</li>
				</ul>
				<input type="button" value="确　定" class="d43d3d" @click="send()"/>
			
		</div>
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
				name: [],
				sex: [],
				tel: [],
				loc:[]
			}
		},
		methods: {
			send() {
				var takeList={
					name:this.name,
					sex:this.sex,
					tel:this.tel,
					loc:this.loc
				}
				storage.setItem('takeList',takeList);
				location.href="http://localhost:8080/#/myorder/ding";
			}
		},
	}
</script>

<style>
	@import '../assets/css/reset.css';
	@import '../assets/css/common.css';
	@import '../assets/css/takeout.css';
</style>