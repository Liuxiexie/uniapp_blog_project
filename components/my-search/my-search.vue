<template>
	<!-- 1. 具备输入框的样式 -->
	<!-- 2. 不可输入 -->
	<!-- 3. placeholder 内容可以在父组件定义 -->
	<view class="my-search-container">
		<view class="my-search-box">
			<!-- 搜索图标 -->
			<image class="icon" src="@/static/images/search.png"></image>
			<!-- placeholder -->
			<text class="placeholder">{{placeholderText}}</text>
		</view>
	</view>
</template>

<script>
	export default {
		name:"my-search",
		props: {
			placeholderText: {
				type: String,
				default: '搜索'
			}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.my-search-container {
	display: flex;
	align-items: center;
	.my-search-box {
		height: 36px;
		background-color: $uni-bg-color;
		border-radius: 15px;
		border: 1px solid $uni-bg-color-border;
		width: 100%;
		display: flex;
		align-items: center;
		padding: 0  $uni-spacing-row-base;
		.icon {
			width: $uni-img-size-sm;
			height: $uni-img-size-sm;
		}
		.placeholder {
			font-size: $uni-font-size-sm;
			margin-left: $uni-spacing-row-sm;
			color: $uni-text-color-placeholder;
		}
	}
}
</style>