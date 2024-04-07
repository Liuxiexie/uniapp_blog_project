<template>
	<view class="hot-container">
		<image class="logo" src="@/static/images/logo.png" mode="aspectFit"></image>
		<!-- 可以直接使用组件 -->
		<view class="search-box">
			<my-search :placeholderText="点击"></my-search>
		</view>
		<my-tabs></my-tabs>
	</view>
</template>

<script>
	import {getHotTabs} from '@/api/hot.js'
	export default {
		data() {
			return {
				
			};
		},
		created() {
			this.loadHotTabs()
		},
		methods: {
			// 获取热搜文章类型
		 async loadHotTabs() {
			const res = await	getHotTabs()
			console.log(res)
			}
		},
	}
</script>

<style lang="scss" scoped>
.hot-container {
	background-color: $uni-bg-color;
	.logo {
		width: 100%;
		height: 80px;
	}
	.search-box {
		padding: 0 16px;
		margin-bottom: 10px;
	}
}
</style>
