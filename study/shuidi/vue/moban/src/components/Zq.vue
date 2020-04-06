<template>
	<div>
		<div id="main">
    <div class="m-q">

        <div class="dian">
            <h3>门店选择</h3>
            <a href="#"> 请选择门店 ></a>
        </div>
    <form>
        <div class="ddd">
        <span>姓名</span><input type="text" placeholder="请输入您的姓名" class="names">
        </div>
        <div class="dddc">
            <span>手机号</span><input type="text" placeholder="请输入您的电话号码" class="namesa">
        </div>
    </form>
      <div class="dsda">
          <span>验证码</span>
          <a href="#" class="yzm"> 获取验证码</a>

      </div>
    </div>
    <div class="nav">
        <div class="gd">锅底</div>
        <div class="gd_a">
            <span>鸳鸯锅底</span>
            <span class="sp_1">X1</span>
            <span>￥<i>69</i></span>
        </div>
        <dl>
            <dt>菜品</dt>

        </dl>


    </div>

    <div class="fp"><span class="sp_3">发票信息</span></div>

   

</div>
	<div class="zf">
			<div class="mozf">需支付:￥<span>0</span></div>
			<a>提交订单</a>
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
		mounted() {

			this.list = storage.getItem('list');
		},
	}
</script>

<style>
	@import '../assets/css/reset.css';
	@import '../assets/css/ziqu.css';
</style>