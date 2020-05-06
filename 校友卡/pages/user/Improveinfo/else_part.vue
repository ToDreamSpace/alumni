<template>
	<view class="info_part">
	<!-- 	<view class="title">西政毕业最高学历:</view>
		<view class="edu_part">
			<input class="uni-input" v-model="user.workunit" focus />
			<view class="title">本科院系:</view>
			<input class="uni-input" v-model="user.workindustry" focus />
			<view class="title">本科专业:</view>
			<input class="uni-input" v-model="user.workprovince" />
			<view class="title">本科入学年份:</view>
			<input class="uni-input" v-model="user.workplace" />
			<view class="title">本科毕业年份</view>
			<input class="uni-input" v-model="user.workstation" />
		</view>
		
		<view class="edu_part">
			<input class="uni-input" v-model="user.workunit" focus />
			<view class="title">专科院系:</view>
			<input class="uni-input" v-model="user.workindustry" focus />
			<view class="title">专科专业:</view>
			<input class="uni-input" v-model="user.workprovince" />
			<view class="title">专科入学年份:</view>
			<input class="uni-input" v-model="user.workplace" />
			<view class="title">专科毕业年份</view>
			<input class="uni-input" v-model="user.workstation" />
		</view>
		
		<view class="edu_part">
			<input class="uni-input" v-model="user.workunit" focus />
			<view class="title">硕士院系:</view>
			<input class="uni-input" v-model="user.workindustry" focus />
			<view class="title">硕士专业:</view>
			<input class="uni-input" v-model="user.workprovince" />
			<view class="title">硕士入学年份:</view>
			<input class="uni-input" v-model="user.workplace" />
			<view class="title">硕士毕业年份</view>
			<input class="uni-input" v-model="user.workstation" />
		</view>
		
		<view class="edu_part">
			<input class="uni-input" v-model="user.workunit" focus />
			<view class="title">硕士院系:</view>
			<input class="uni-input" v-model="user.workindustry" focus />
			<view class="title">硕士专业:</view>
			<input class="uni-input" v-model="user.workprovince" />
			<view class="title">硕士入学年份:</view>
			<input class="uni-input" v-model="user.workplace" />
			<view class="title">硕士毕业年份</view>
			<input class="uni-input" v-model="user.workstation" />
		</view>
		
		<view class="edu_part">
			<input class="uni-input" v-model="user.workunit" focus />
			<view class="title">博士院系:</view>
			<input class="uni-input" v-model="user.workindustry" focus />
			<view class="title">博士专业:</view>
			<input class="uni-input" v-model="user.workprovince" />
			<view class="title">博士入学年份:</view>
			<input class="uni-input" v-model="user.workplace" />
			<view class="title">博士毕业年份</view>
			<input class="uni-input" v-model="user.workstation" />
		</view>
			<view class="edu_part">
			
			<input class="uni-input" v-model="user.workunit" focus />
			<view class="title">院系:</view>
			<input class="uni-input" v-model="user.workindustry" focus />
			<view class="title">专业:</view>
			<input class="uni-input" v-model="user.workprovince" />
			<view class="title">入学年份:</view>
			<input class="uni-input" v-model="user.workplace" />
			<view class="title">毕业年份</view>
			<input class="uni-input" v-model="user.workstation" />
		</view> -->
		
		<!-- <button type="primary" @tap="save">保存</button> -->
	</view>
</template>

<script>
export default {
	data() {
		return {
			user: {
				workunit:'',
				workplace:'',
				workstation:'',
				workindustry:'',
				workprovince:''
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
