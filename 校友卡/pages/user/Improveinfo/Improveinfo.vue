<template>
	<view class="form-box">
		<form @submit="formSubmit" @reset="formReset">
			<view class="info_part">
				<view class="part_title">基础信息</view>
				<view class="title">姓名</view>
				<input class="uni-input" v-model="user.name" focus />
				<view class="title">身份证号</view>
				<input class="uni-input" v-model="user.sfzh" />
				<view class="title">邮箱</view>
				<input class="uni-input" v-model="user.email" />
				<view class="title">QQ</view>
				<input class="uni-input" v-model="user.qq" />
				<view class="title">个性签名</view>
				<input class="uni-input" v-model="user.signature" />
			</view>
			<view class="education_part">
				<view class="part_title"><navigator url="education_part">学历信息>></navigator></view>
				<view class="part_text">
					<text>学历:***</text>
					<text>学号:***</text>
					<text>学院:***</text>
				</view>
			</view>

			<view class="work_part">
				<view class="part_title"><navigator url="work_part">工作信息>></navigator></view>
				<view class="part_text">
					<text>工作单位:***</text>
					<text>工作地址:***</text>
				</view>
			</view>

			<view class="else_part"><view class="part_title"><navigator url="else_part">其它资料>></navigator></view></view>

			<view class="picture_part">
				<view>
					<progress :percent="percent" strock-width="10"></progress>
					<button type="warn" size="mini" @tap="cI">上传照片</button>
				</view>
			</view>
			<button type="primary" form-type="submit">提交</button>
		</form>
	</view>
</template>

<script>
export default {
	data() {
		return {
			percent: '', //进度
			user: {
				name: '',
				sfzh: '',
				email: '',
				qq: '',
				face: '',
				signature: ''
			}
		};
	},
	onLoad(option) {
		//验证是否已经登录
		var self = this;
		if (global.islogin() == false) {
			// 未登录就跳转到login页面，在全局去定义islogin函数
			uni.reLaunch({
				url: '../../login/login'
			});
		} else {
			//获取信息
			uni.request({
				url: self.$url + 'userinfo/moreInfo',
				method: 'GET',
				header: {
					token: global.islogin()
				},
				success: function(res) {
					self.user = res.data.data;
				}
			});
		}
	},
	methods: {
		bindPickerChange: function(e) {
			console.log('picker发送选择改变，携带值为', e.target.value);
			this.index = e.target.value;
		},

		formSubmit: function(e) {
			// console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
			var self = this;
			var data = self.user;
			// data.bkyuanxi = self.yuanxiarray[self.index].ID;
			uni.request({
				url: self.$url + 'updateinfo/updateinfo',
				data: data,
				method: 'POST',
				header: {
					token: global.islogin()
				},
				success: function(res) {
					if (res.data.code == 1) {
						uni.showModal({
							title: res.data.msg,
							// content: '这是一个模态弹窗',
							success: function(res) {
								if (res.confirm) {
									uni.reLaunch({
										url: '../../tabBar/user/user'
									});
								}
							}
						});
					} else {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						});
					}
				}
			});
		},
		formReset: function(e) {
			console.log('清空数据');
		},

		//上传图片
		cI: function() {
			var self = this;
			uni.chooseImage({
				count: 1,
				sizeType: ['copressed'],
				success(res) {
					//因为有一张图片， 输出下标[0]， 直接输出地址
					var imgFiles = res.tempFilePaths[0];
					console.log(imgFiles);
					// 上传图片
					// 做成一个上传对象
					var uper = uni.uploadFile({
						// 需要上传的地址
						url: self.$url + 'upload/upload',
						header: {
							token: global.islogin()
						},
						// filePath  需要上传的文件
						filePath: imgFiles,
						name: 'file',
						success(res1) {
							// 显示上传信息
							console.log(res1);
							res1 = JSON.parse(res1.data);
							self.user.face = self.$url_root + res1.url;
						}
					});
					// onProgressUpdate 上传对象更新的方法
					uper.onProgressUpdate(function(res) {
						// 进度条等于 上传到的进度
						self.percent = res.progress;
						console.log('上传进度' + res.progress);
						console.log('已经上传的数据长度' + res.totalBytesSent);
						console.log('预期需要上传的数据总长度' + res.totalBytesExpectedToSend);
					});
				}
			});
		}
	}
};
</script>

<style lang="scss">
.form-box {
	margin: 10upx 15upx 10upx 15upx;

	input {
		border-width: 10px;
		border: 1px solid #e5e0e0;
		border-radius: 5upx;
		margin: 2upx 0 2upx 0;
	}

	.info_part,
	.education_part,
	.picture_part,
	.else_part,
	.work_part{
		margin-bottom: 30upx;
		background-color: #f7f7f7;
		border-radius: 3px;
		padding: 5px;
	}

	.part_title {
		text-align: right;
		font-size: small;
		color: #a0a0a0;
	}
	.title {
		font-size: smaller;
		color: #a0a0a0;
	}
	.part_text {
		text {
			// font-size: smaller;
			color: #a5a4a4;
			display: block;
		}
	}
}
</style>
