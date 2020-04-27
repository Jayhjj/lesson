<template>
	<div>
		<header>
			<div class="left">
				<a href="http://localhost:8080/#/details" class="back"><i class="iconfont back">&#xe603;</i></a>
				<div class="GPS">
					<i class="iconfont dingwei">&#xe614;</i>
					<span class="address">深圳市</span>
					<i class="iconfont todown">&#xe604;</i>
				</div>
			</div>
			<p>外送须知</p>
		</header>
		<span id="zw"></span>
		<main>
			<div class="list" ref='left_cate'>
				<ul>
					<li v-for="(item,key) in arr" @click="leftTap(key)">
						{{item.title}}
					</li>
				</ul>
			</div>
			<div class="list_content" ref='right_foods'>
				<ul class="goods_cate_right" v-for="(item,ulIndex) in arr">
					<li v-for="(food,index) in item.foods">
						<div class="pic">
							<img :src="'http://localhost:3001/'+food.pic" :alt="food.cate_name" />
							<div class="triangle"></div>
						</div>
						<div class="des">
							<h3>{{food.title}}</h3>
							<div class="price">￥<span>{{food.price}}</span>/锅</div>
							<div v-if="food.status>0" class="decCart" @click="decCart(food,ulIndex,index)" style="border-radius: 50%;border: 0; background: #D43D3D; color: #fff;width: 0.25rem; height: 0.25rem; line-height: 0.25rem;text-align: center;font-weight: bold;">-</div>
							<input v-if="food.status>0" class="count" type="text" v-model="food.status" style="width: 0.2rem;">
							<span class="add addCart" @click="addCart($event,food,ulIndex,index)"><i class="iconfont">&#xe676;</i></span>
						</div>
					</li>
				</ul>
			</div>
		</main>
		<div id="foot">
			<div class="bot">
				<i class="iconfont">&#xe606;</i>
				<div class="all_count">{{all_count}}</div>
				<span>￥<b>{{all_price}}</b></span>
			</div>
			<button class="d43d3d" @click="sendOrder()">去结算</button>
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
				arr: [],
				all_count: 0,
				all_price: 0,
				pay: []
			}
		},
		methods: {
			getFood() {
				var url = "http://localhost:3001/api/foods"
				this.$http.jsonp(url).then(data => {
//					console.log(data.body.result);
					this.arr = data.body.result;
				}, err => {
					console.log(err);
				})
			},
			leftTap(key) {
				// alert(key);
				var rightDom = this.$refs.right_foods; /*dom*/
				var uls = rightDom.getElementsByTagName('ul');
				//选中右侧索引值距离顶部的高度 h2s[key].offsetTop
				//rightDom.scrollTop  改变右侧整个dom滚动条的高度
				rightDom.scrollTop = uls[key].offsetTop - 44;
			},
			decCart(food, ulIndex, index) {
				food.status = --food.status;
				this.all_count--;
				//				console.log(storage.getItem('all_count'));
				//				console.log(food);
				this.all_price -= parseFloat(food.price);
				if(this.pay.length != 0) {
					for(var i = 0; i < this.pay.length; i++) {
						if(this.pay[i].status == 0) {
							this.pay.splice(i, 1);
						}
					}
				}
//				console.log(this.pay)

			},
			addCart(e, food, ulIndex, index) { /*加入购物车*/
//				e.preventDefault();
//				e.stopPropagation();
				//获取按钮距离左侧和顶部的高度
				var x = e.clientX-20;
				var y = e.clientY;
				var difX = x; /*获取小球距离左侧的距离*/
				var difY = document.documentElement.clientHeight - y; /*获取小球距离底部的高度*/
				//1.创建ball-outer dom节点
				var ball_outer = document.createElement('div');
				ball_outer.setAttribute('class', 'ball-outer');
				ball_outer.style.left = (x + 5) + 'px';
				ball_outer.style.top = (y - 30) + 'px';
				// alert(ball_outer);
				//2.创建小球
				var ball_inner = document.createElement('div');
				ball_inner.setAttribute('class', 'ball-inner');
				ball_outer.appendChild(ball_inner);
				document.body.appendChild(ball_outer);
				// console.log(e);
				//小球运动
				var timeTransform = setTimeout(function() {
					//外层
					ball_outer.style.transform = 'translate(0,' + difY + 'px)';
					//里层
					ball_inner.style.transform = 'translate(-' + difX + 'px,0) rotate(720deg)';
					clearTimeout(timeTransform);
				}, 50);
				//删除dom节点的定时器
				var timeDelete = setTimeout(function() {
					document.body.removeChild(ball_outer);
				}, 550);

				//简单改变数据
				//				this.cartCount = this.cartCount + 1;
				//				console.log(food);
				food.status = ++food.status;
				this.all_price += parseFloat(food.price);
				this.all_count++;
				var list=this.pay;
				for(var k=0;k<list.length;k++){
					if(list[k]._id==food._id){
						list.splice(k,1);
					}
				}
				list.push(food);
//				console.log(list);
				this.pay=list;


			},
			sendOrder() {
				storage.setItem("all_price", this.all_price);
				storage.setItem("all_count", this.all_count);
				storage.setItem("list", this.pay);
				location.href='http://localhost:8080/#/myorder';
//				console.log(storage.getItem('list'));
			}

		},
		mounted() {
			this.getFood();
			var leftDom = this.$refs.left_cate; /*dom*/
			var lis = leftDom.getElementsByTagName('li');
			//右侧的dom节点
			var rightDom = this.$refs.right_foods; /*dom*/
			var uls = rightDom.getElementsByTagName('ul');
			rightDom.onscroll = function() {
				//获取右侧滚动条的高度
				var st = rightDom.scrollTop;
				for(var i = 0; i < uls.length; i++) {
					if(st >= uls[i].offsetTop - 44) {
						for(var j = 0; j < lis.length; j++) {
							lis[j].className = '';
						}
						//选中
						lis[i].className = 'active';
					}
				}
			}
		}
	}
</script>

<style>
	@import "../assets/css/reset.css";
	@import "../assets/css/common.css";
	@import "../assets/css/stores.css";
	.active {
		background: red;
	}
	
	.list_content ul:last-child {
		padding-bottom: 150px;
	}
	
	.count {
		position: absolute;
		bottom: 0.12rem;
		left: 0.7rem;
	}
	
	.decCart {
		position: absolute;
		bottom: 0.1rem;
		left: 0.4rem;
	}
	
	.ball-outer {
		background: transparent;
		width: 30px;
		height: 30px;
		right: 0px;
		top: 0px;
		position: absolute;
		/* transition: all 3s ease; */
		transition: all 0.5s cubic-bezier(.98, -0.48, .83, .67);
	}
	
	.ball-inner {
		width: 30px;
		height: 30px;
		border-radius: 15px;
		background: #D43D3D;
		margin: 0 auto;
		transition: all 0.5s linear;
	}
</style>