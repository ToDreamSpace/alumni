<template>
	<view class="info_part">
		<view class="title">工作单位:</view>
		<input class="uni-input" v-model="user.workunit" focus />
		<view class="title">所属行业:</view>
		<input class="uni-input" v-model="user.workindustry" focus />
		<view class="title">工作所在省份:</view>
		<input class="uni-input" v-model="user.workprovince" />
		<view class="title">具体地址:</view>
		<input class="uni-input" v-model="user.workplace" />
		<view class="title">职位</view>
		<input class="uni-input" v-model="user.workstation" />
		
		<button type="primary" @tap="save">保存</button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			user: {
				workunit:'单位',
				workplace:'地址',
				workstation:'职位',
				workindustry:'行业',
				workprovince:'省份'
			}
		};
	},
	methods: {
		save: function() {
			// console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
			var self = this;
			// data.bkyuanxi = self.yuanxiarray[self.index].ID;
			uni.request({
				url: self.$url + 'updateinfo/updateworkinfo',
				data: self.user,
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
	},
	onLoad() {
		var self=this;
		//获取工作信息
		uni.request({
			url: self.$url + 'Userinfo/getWorkinfo',
			method: 'GET',
			header: {
				token: global.islogin()
			},
			success: function(res) {
				// console.log(res.data.data.zuigaoxueli);
				if(res.data.data.work){
					self.user=res.data.data.work;
				}
			}
		});
	}
};
</script>

<style lang="scss">
.info_part {
	margin: 10upx 15upx 10upx 15upx;
	margin-bottom: 30upx;
	background-color: #f7f7f7;
	border-radius: 3px;
	padding: 5px;
	

	input {
		border-width: 10px;
		border: 1px solid #e5e0e0;
		border-radius: 5upx;
		margin: 2upx 0 2upx 0;
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
