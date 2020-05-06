<template>
	<view class="info_part">
		<view class="title">西政毕业最高学历:</view>
		<input class="uni-input" v-model="zuigaoxueli" focus />
		<view class="edu_part">
			<view class="part_title">专科学历</view>
			<view class="title">院系:</view>
			<input class="uni-input" v-model="zhuanke.college"  />
			<view class="title">专业:</view>
			<input class="uni-input" v-model="zhuanke.major" />
			<view class="title">入学年份:</view>
			<view>
				<picker id="1" mode="date" fields="year" :value="zhuanke.rxrq" :start="startDate" :end="endDate" @change="bindDateChange">
					<view class="uni-input">{{ zhuanke.rxrq }}年</view>
				</picker>
			</view>
			
			<view class="title">毕业年份:</view>
			<view>
				<picker id='2' mode="date" fields="year" :value="zhuanke.byrq" :start="startDate" :end="endDate" @change="bindDateChange">
					<view class="uni-input">{{ zhuanke.byrq}}年</view>
				</picker>
			</view>
		</view>

		<view class="edu_part">
			<view class="part_title">本科学历</view>
			<view class="title">院系:</view>
			<input class="uni-input" v-model="benke.college" />
			<view class="title">专业:</view>
			<input class="uni-input" v-model="benke.major" />
			<view class="title">入学年份:</view>
			<view>
				<picker id="3" mode="date" fields="year" :value="zhuanke.rxrq" :start="startDate" :end="endDate" @change="bindDateChange">
					<view class="uni-input">{{ benke.rxrq }}年</view>
				</picker>
			</view>
			
			<view class="title">毕业年份:</view>
			<view>
				<picker id='4' mode="date" fields="year" :value="zhuanke.byrq" :start="startDate" :end="endDate" @change="bindDateChange">
					<view class="uni-input">{{ benke.byrq}}年</view>
				</picker>
			</view>
		</view>

		<view class="edu_part">
			<view class="part_title">硕士学历</view>

			<view class="title">院系:</view>
			<input class="uni-input" v-model="shuoshi.college" />
			<view class="title">专业:</view>
			<input class="uni-input" v-model="shuoshi.major" />
			<view class="title">入学年份:</view>
			<view>
				<picker id="5" mode="date" fields="year" :value="shuoshi.rxrq" :start="startDate" :end="endDate" @change="bindDateChange">
					<view class="uni-input">{{ shuoshi.rxrq }}年</view>
				</picker>
			</view>
			
			<view class="title">毕业年份:</view>
			<view>
				<picker id='6' mode="date" fields="year" :value="shuoshi.byrq" :start="startDate" :end="endDate" @change="bindDateChange">
					<view class="uni-input">{{ shuoshi.byrq}}年</view>
				</picker>
			</view>
		</view>

		<view class="edu_part">
			<view class="part_title">博士学历</view>

			<view class="title">院系:</view>
			<input class="uni-input" v-model="boshi.college" />
			<view class="title">专业:</view>
			<input class="uni-input" v-model="boshi.major" />
			<view class="title">入学年份:</view>
			<view>
				<picker id="7" mode="date" fields="year" :value="boshi.rxrq" :start="startDate" :end="endDate" @change="bindDateChange">
					<view class="uni-input">{{ boshi.rxrq }}年</view>
				</picker>
			</view>
			
			<view class="title">毕业年份:</view>
			<view>
				<picker id='8' mode="date" fields="year" :value="boshi.byrq" :start="startDate" :end="endDate" @change="bindDateChange">
					<view class="uni-input">{{ boshi.byrq}}年</view>
				</picker>
			</view>
		</view>
		<view class="edu_part">
			<view class="part_title">函授或其他</view>

			<view class="title">院系:</view>
			<input class="uni-input" v-model="hanshou.college" />
			<view class="title">专业:</view>
			<input class="uni-input" v-model="hanshou.major" />
			<view class="title">入学年份:</view>
			<view>
				<picker id="9" mode="date" fields="year" :value="hanshou.rxrq" :start="startDate" :end="endDate" @change="bindDateChange">
					<view class="uni-input">{{ hanshou.rxrq }}年</view>
				</picker>
			</view>
			
			<view class="title">毕业年份:</view>
			<view>
				<picker id='10' mode="date" fields="year" :value="hanshou.byrq" :start="startDate" :end="endDate" @change="bindDateChange">
					<view class="uni-input">{{ hanshou.byrq}}年</view>
				</picker>
			</view>
		</view>

		<button type="primary" @tap="save">保存</button>
	</view>
</template>

<script>
export default {
	data() {
		const currentDate =2020;

		return {
			zuigaoxueli:'本科',
			zhuanke: {
				college: '',
				major: '',
				rxrq:'',
				byrq:'',
			},
			benke: {
				college: '',
				major: '',
				rxrq:'' ,
				byrq:''
			},
			boshi: {
				college: '',
				major: '',
				rxrq:'',
				byrq:''
			},
			shuoshi: {
				college: '',
				major: '',
				rxrq: '',
				byrq:''
			},
			hanshou: {
				college: '',
				major: '',
				rxrq:'',
				byrq:''
			},
		};
	},
	methods: {
		save: function() {
			// console.log('form发生了submit事件，携带数据为：' + JSON.stringify(e.detail.value))
			var self = this;
			var updata={};
			updata.zuigaoxueli=self.zuigaoxueli;
			updata.zhuanke= self.zhuanke;
			updata.benke= self.benke;
			updata.shuoshi= self.shuoshi;
			updata.boshi=self.boshi;
			updata.hanshou= self.hanshou;
			// data.bkyuanxi = self.yuanxiarray[self.index].ID;
			uni.request({
				url: self.$url + 'updateinfo/updateeducation',
				data:updata,
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

		bindDateChange: function(e) {
			switch(e.target.id){
				case '1':this.zhuanke.rxrq=e.target.value;break;
				case '2':this.zhuanke.byrq=e.target.value;break;
				case '3':this.benke.rxrq=e.target.value;break;
				case '4':this.benke.byrq=e.target.value;break;
				case '5':this.shuoshi.rxrq=e.target.value;break;
				case '6':this.shuoshi.byrq=e.target.value;break;
				case '7':this.boshi.rxrq=e.target.value;break;
				case '8':this.boshi.byrq=e.target.value;break;
				case '9':this.hanshou.rxrq=e.target.value;break;
				case '10':this.hanshou.byrq=e.target.value;break;
			}
		},
	},
	onLoad() {
		var self=this;
		//获取学历信息
		uni.request({
			url: self.$url + 'Userinfo/getEducation',
			method: 'GET',
			header: {
				token: global.islogin()
			},
			success: function(res) {
				// console.log(res.data.data.zuigaoxueli);
				self.zuigaoxueli=res.data.data.zuigaoxueli;
				if(res.data.data.benke){
					self.benke=res.data.data.benke;
				}
				if(res.data.data.zhuanke){
					self.zhuanke=res.data.data.zhuanke;
				}
				if(res.data.data.shuoshi){
					self.shuoshi=res.data.data.shuoshi;
				}
				if(res.data.data.boshi){
					self.boshi=res.data.data.boshi;
				}
				if(res.data.data.hanshou){
					self.hanshou=res.data.data.hanshou;
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
	border-radius: 3px;
	padding: 5px;

	input {
		border-width: 10px;
		border: 1px solid #e5e0e0;
		border-radius: 5upx;
		margin: 2upx 0 2upx 0;
	}

	.part_title {
		text-align: center;
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
	.edu_part {
		margin: 15upx 0 15upx 0;
		background-color: #f7f7f7;
		border-radius: 3px;
		padding: 5px;
	}
}
</style>
