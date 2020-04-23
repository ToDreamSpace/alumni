<template>
	<view>
		<view v-if="showHeader" class="status" :style="{position:headerPosition,top:statusTop}"></view>
		<view v-if="showHeader" class="header" :style="{position:headerPosition,top:headerTop}">
			<view class="addr"></view>
			<view class="input-box">
				
			</view>
			<view class="icon-btn">
				<view class="icon tongzhi" ></view>
				<view class="icon setting" @tap="toSetting"></view>
			</view>
		</view>
		<!-- 占位 -->
		<view v-if="showHeader" class="place"></view>
		<!-- 用户信息 -->
		<view class="user">
			<!-- 头像 -->
			<view class="left">
				<image :src="user.face" @tap="toSetting"></image>
			</view>
			<!-- 昵称,个性签名 -->
			<view class="right">
				<view class="username" @tap="toSetting">{{user.name}}</view>
				<view class="signature" @tap="toSetting">{{user.signature}}</view>
			</view>
			<!-- 二维码按钮 -->
			<view class="erweima" @tap="toMyQR">
				<view class="icon qr"></view>
			</view>
		</view>
		<!-- VIP banner 校友卡 -->
		<view class="VIP">
			<image  :src="zhutitupian" mode="scaleToFill"></image>
			<view class="info">
				<navigator class="hassfzh" v-if="user.sfzh==null||user.sfzh==''" url="../../user/Improveinfo/Improveinfo"><text>请完善资料</text></navigator>
				<view @tap="toChangezhuti" class="bankuai1">
					<text class="NO">NO2000012121014</text>
				</view>
				<view @tap="toChangezhuti" class="bankuai2">
					
				</view>
				<view @tap="toChangezhuti" class="bankuai3">
					<image class="face" :src="user.face" mode="scaleToFill"></image>
					<view class="infotxt">
						<text>姓名：{{user.name}}</text>
						<text>学院：{{user.bkyuanxi}}</text>
						<text>年级：{{user.bkruxueyear}}</text>
					</view>
				</view>
			</view>
		</view>
		<!--校友卡-->
<!-- 		<view class="order">
			
		</view> -->
		<!-- 校友项目 -->
<!-- 		<view class="toolbar">
		</view> -->
		<!-- 占位 -->
		<view class="place-bottom"></view>
	</view>
</template>
<script>

	export default {
		data() {
			return {
				zhuti_id:0,
				zhutitupian:'../../../static/img/alumni/red.png',
				zhuti:[
					'../../../static/img/alumni/red.png',
					'../../../static/img/alumni/purple.png',
					'../../../static/img/alumni/yellow.png',
					'../../../static/img/alumni/blue.png',
					'../../../static/img/alumni/cyan.png',
					'../../../static/img/alumni/green.png',
					'../../../static/img/alumni/orange.png'
				],
				isfirst:true,
				headerPosition:"fixed",
				headerTop:null,
				statusTop:null,
				showHeader:true,
				//个人信息,
				user:{
					name:'***',
					face:'/static/img/face.jpg',
					signature:'个性签名',
					is_authentication:"0",
					sfzh:'',
					bkyuanxi:'',
					bkruxueyear:''
				},
			
			}
		},
		//下拉刷新，需要自己在page.json文件中配置开启页面下拉刷新 "enablePullDownRefresh": true
		onPullDownRefresh() {
		    setTimeout(function () {
		        uni.stopPullDownRefresh();
		    }, 1000);
		},
		onPageScroll(e){
			//兼容iOS端下拉时顶部漂移
			this.headerPosition = e.scrollTop>=0?"fixed":"absolute";
			this.headerTop = e.scrollTop>=0?null:0;
			this.statusTop = e.scrollTop>=0?null:-this.statusHeight+'px';
		},
		onLoad() {
			var self=this;
			
			
			this.statusHeight = 0;
			// #ifdef APP-PLUS
			this.showHeader = false;
			this.statusHeight = plus.navigator.getStatusbarHeight();
			// #endif
			
			//验证是否已经登录
			if(global.islogin()==false){
				// 未登录就跳转到login页面，在全局去定义islogin函数
				uni.reLaunch({
					url:'../../login/login'
				})
			}else{
				//登录就保存token信息 李杰  
				uni.request({
					url:self.$url+'userinfo/index',
					method:'POST',
					header:{
						token:global.islogin()
					},
					success:function(res){
						if(res.statusCode==200){
							console.log(res);
							self.user=res.data.data;
						}
					},
					complete:function(res){//token若过期
						if(res.statusCode!=200){
							//跳转到登录页面
							uni.reLaunch({
								url:'../../login/login'
							})
						}
					}
				})
			}			
		},
		onReady(){
			//此处，演示,每次页面初次渲染都把登录状态重置
			uni.setStorage({
				key: 'UserInfo',
				data: false,
				success: function () {
				},
				fail:function(e){
				}
			});
		},
		onShow(){
			uni.getStorage({
				key: 'UserInfo',
				success: (res)=>{
					if(!res.data){
						if(this.isfirst){
							//this.toLogin();
						}
						return ;
					}
					this.user = res.data;
				},
				fail:(e)=>{
					//this.toLogin(); 
				}
			});
		},
		methods: {
			//消息列表
			toMsg(){
				uni.navigateTo({
					url:'../../msg/msg'
				})
			},
			toOrderList(index){
				uni.setStorageSync('tbIndex',index);
				uni.navigateTo({url:'../../user/order_list/order_list?tbIndex='+index}) 
			},
			toSetting(){
				uni.navigateTo({
					// url:'../../user/setting/setting'
					url:'../../user/Improveinfo/Improveinfo'
				})
			},
			toMyQR(){
				uni.navigateTo({
					url:'../../user/myQR/myQR'
				})
			},
			toLogin(){
				uni.showToast({title: '请登录',icon:"none"});
				uni.navigateTo({
					url:'../../login/login'
				})
				this.isfirst = false;
			},
			isLogin(){
				//实际应用中,用户登录状态应该用token等方法去维持登录状态.
				const value = uni.getStorageSync('UserInfo');
				if (value) {
					return true;
				}
				return false
			},
			toDeposit(){
				uni.navigateTo({
					url:'../../user/deposit/deposit'
				})
			},
			toPage(url){
				if(!url){
					uni.showToast({title: '模板未包含此页面',icon:"none"});return;
				}
				uni.navigateTo({
					url:url
				})
			},
			// 切换主题
			toChangezhuti(){
				if(this.zhuti_id<this.zhuti.length-1){
					this.zhuti_id++;
				}else{
					this.zhuti_id=0;
				}
				this.zhutitupian=this.zhuti[this.zhuti_id]
			}
		}
	} 
</script>
<style lang="scss">
	page{position: relative;background-color: #fff;}
	.status {
		width: 100%;
		height: 0;
		position: fixed;
		z-index: 10;
		background-color: #f06c7a;
		top: 0;
		/*  #ifdef  APP-PLUS  */
		height: var(--status-bar-height);//覆盖样式
		/*  #endif  */
		
	}
	
	.header{
		width: 92%;
		padding: 0 4%;
		height: 100upx;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		position: fixed;
		top: 0;
		z-index: 10;
		background-color: #f06c7a;
		/*  #ifdef  APP-PLUS  */
		top: var(--status-bar-height);
		/*  #endif  */
		.icon-btn{
			width: 120upx;
			height: 60upx;
			flex-shrink: 0;
			display: flex;
			.icon{
				color: #fff;
				width: 60upx;
				height: 60upx;
				display: flex;
				justify-content: flex-end;
				align-items: center;
				font-size: 42upx;
			}
		}
	}
	.place{
		background-color: #f06c7a;
		height: 100upx;
		/*  #ifdef  APP-PLUS  */
		margin-top: var(--status-bar-height);
		/*  #endif  */
	}
	.place-bottom{
		height: 300upx;
	}
	.user{
		width: 92%;
		padding: 0 4%;
		display: flex;
		align-items: center;
		// position: relative;
		background:linear-gradient(to bottom, #f06c7a 0%, #7f010a 100%);
		padding-bottom: 120upx;
		.left{
			width: 20vw;
			height: 20vw;
			flex-shrink: 0;
			margin-right: 20upx;
			border: solid 1upx #fff;
			border-radius: 100%;
			image{
				width: 20vw;
				height: 20vw;
				border-radius: 100%;
			}
			
		}
		.right{
			width: 100%;
			.username{
				font-size: 36upx;
				color: #fff;
			}
			.signature{
				color: #eee;
				font-size: 28upx;
			}
		}
		.erweima{
			flex-shrink: 0;
			width: 10vw;
			height: 10vw;
			margin-left: 5vw;
			border-radius: 100%;
		
			display: flex;
			justify-content: center;
			align-items: center;
			background: linear-gradient(to left, #fbbb37 0%,#fcf0d0 105%);
			.icon{
				color: #7b6335;
				font-size: 42upx;
			}
		}
	}
	.order{
		width: 84%;
		margin: 30upx 4% 30upx 4%;
		padding: 30upx 4% 20upx 4%;
		background-color: #fff;
		box-shadow: 0upx 0upx 25upx rgba(0,0,0,0.1);
		border-radius: 15upx;
		.list{
			display: flex;
			border-bottom: solid 1upx #17e6a1;
			padding-bottom: 10upx;
			.box{
				width: 20%;
				.img{
					width: 100%;
					display: flex;
					justify-content: center;
					.icon{
						font-size: 50upx;
						color: #464646;
					}
				}
				.text{
					width: 100%;
					display: flex;
					justify-content: center;
					font-size: 28upx;
					color: #3d3d3d;
				}
			}
		}
		.balance-info{
			display: flex;
			padding: 10upx 0;
			.left{
				width: 75%;
				display: flex;
				.box{
					width: 50%;
					font-size: 28upx;
					
					.num{
						width: 100%;
						height: 50upx;
						display: flex;
						justify-content: center;
						align-items: flex-end;
						color: #f9a453;
					}
					.text{
						width: 100%;
						display: flex;
						justify-content: center;
						color: #3d3d3d;
						font-size: 28upx;
					}
				}
			}
			.right{
				border-left: solid 1upx #17e6a1;
				width: 25%;
				.box{
					
					.img{
						width: 100%;
						height: 50upx;
						display: flex;
						justify-content: center;
						align-items: flex-end;
						.icon{
							font-size: 45upx;
							color: #e78901;
						}
					}
					.text{
						width: 100%;
						display: flex;
						justify-content: center;
						font-size: 28upx;
						color: #3d3d3d;
					}
				}
			}
		}
	}
	.VIP{
		width: 92%;
		margin: -65upx auto 20upx auto;
		// padding: 30upx 4%;
		box-shadow: 0upx 0upx 25upx rgba(0,0,0,0.2);
		border-radius: 10upx;
		display: flex;
		position: relative;
		align-items: center;
		image{
			border-radius: 8upx;
			width: 100%;
		}
		.face{
			margin-top:80upx;
			border-radius: 5upx;
			width: 160upx;
			height: 160upx;
		}
		.title{
			width: 100%;
			color: #796335;
			font-size: 30upx;
		}
		.tis{
			width: 100%;
			display: flex;
			justify-content: flex-end;
			color: #fcf0d0;
			font-size: 26upx;
		}
		.hassfzh{
			position: absolute;
			width: 40%;
			height:60upx;
			top: 35%;
			left: 30%;
			vertical-align:middle;
			background-color:#7f010a;
			border-radius: 10upx;
			color: white;
			display:flex;
			justify-content: center;
			align-items:center;
			box-shadow: 2px 2px 2px #888888;
		}
		.info{
			position: absolute;
			display: flex;
			width: 100%;
			height: 100%;
		}
		.bankuai1{
			padding-top: 10px;
			text-align: center;
			// display: inline-block;
			width: 35%;
			height: 100%;
			.NO{
				position: relative;
				top: 78%;
				left:10%;
				font-size: small;
				font-family: KaiTi;
				text-align: left;
				display: block;
			}
		}
		.bankuai2{
			padding-top: 10px;
			text-align: center;
			// display: inline-block;
			width: 30%;
			height: 100%;
		}
		.bankuai3{
			padding-top: 10px;
			text-align: center;
			// display: inline-block;
			width: 35%;
			height: 100%;
			.infotxt{
				text{
					font-size: small;
					font-family: KaiTi;
					display: block;
					text-align: left;
				}
			}
		}
	}
	.toolbar{
		width: 92%;
		margin: 0 4% 0 4%;
		padding: 0 0 20upx 0;
		background-color: #fff;
		box-shadow: 0upx 0upx 25upx rgba(0,0,0,0.1);
		border-radius: 15upx;
		.title{
			padding-top: 10upx;
			margin: 0 0 10upx 3%;
			font-size: 30upx;
			height: 80upx;
			display: flex;
			align-items: center;
		}
		.list{
			display: flex;
			flex-wrap: wrap;
			.box{
				width: 25%;
				margin-bottom: 30upx;
				.img{
					width: 23vw;
					height: 10.5vw;
					display: flex;
					justify-content: center;
					
					image{
						width: 9vw;
						height: 9vw;
					}
				}
				.text{
					width: 100%;
					display: flex;
					justify-content: center;
					font-size: 26upx;
					color: #3d3d3d;
				}
			}
		}
	}
</style>
