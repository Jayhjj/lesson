<template>
	<div>
		<div class="wsfw">
			<div class="rs"><span>用餐人数</span><input style="border: 0;" type="text" name="number" v-model.lazy="number" />
				<a class="iconfont">&#xe66e;</a>
			</div>
			<div class="dz"><span><a href="http://localhost:8080/#/takeout">请填写收货地址：</a>{{loc}}</span>
				<a class="iconfont">&#xe66e;</a>
			</div>
		</div>

		<div class="nav">
			<div v-for="item in list">
				<div class="gd">{{item.cate_name}}</div>
				<div class="gd_a">
					<span>{{item.title}}</span>
					<span class="sp_1">X{{item.status}}</span>
					<span>￥<i>{{item.price}}</i></span>
				</div>
			</div>
			<div class="ws"><span>外送费：</span><span>￥{{wsf}}</span></div>
			<div class="fw"><span>专人服务费：</span><span>￥{{fwf}}</span></div>

		</div>
		<div class="ts"><span class="sp_3">特殊需求</span><span class="iconfont">&#xe66e;</span></div>
		<div class="fp"><span class="sp_3">发票信息</span><span class="iconfont">&#xe66e;</span></div>
		<div class="qt"><span class="sp_3">其他需求</span></div>
		<div class="zf">
			<div class="mozf">需支付:￥<span>{{all_price}}</span></div>
			<a @click="sendOrder()">提交订单</a>
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
				list: [],
				number: [],
				wsf: 5,
				fwf: 5,
				loc: '',
				all_price: 0,
				name: '',
				shop_name: '汉京店',
				tel: '',
				sex: '',
				product: [],
			}
		},
		methods: {
			sendOrder() {
				var url = "http://localhost:3001/api/order";
				this.$http.post(url, {
					name: this.name,
					sex: this.sex,
					tel: this.tel,
					shop_name: this.shop_name,
					product: this.product,
					all_price: this.all_price

				}).then(function(res) {
					// 处理成功的结果  
					alert(res.body);
				}, function(res) {
					// 处理失败的结果  
				});
				storage.removeItem("takeList");
				storage.removeItem("all_price");
				storage.removeItem("list");
				storage.removeItem("all_count");
			}
		},
		mounted() {
			if(storage.getItem("all_price")){
				var ap = storage.getItem("all_price");
				this.all_price = ap + this.wsf + this.fwf;
			}
			
			//			console.log(this.list);
			if(storage.getItem('list')) {
				this.list = storage.getItem('list');
				for(var i = 0; i < this.list.length; i++) {
					this.product.push(this.list[i].title + 'x' + this.list[i].status);
					//				console.log(this.name);
				}
			}
			//			console.log(this.name);
			if(storage.getItem("takeList")) {
				var takeList = storage.getItem("takeList");
				this.tel = takeList.tel;
				this.name = takeList.name;
				this.sex = takeList.sex;
				this.loc = storage.getItem("takeList").loc;
			}

		},
	}
</script>

<style>
	@import '../assets/css/reset.css';
	@import '../assets/css/sendhelp.css';
</style>