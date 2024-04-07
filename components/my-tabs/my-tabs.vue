<template>
	<!-- 1. 可以在父组件中定制样式 -->
	<!-- 2. 可以在父组件中指定数据 -->
	<!-- 3. 可以在父组件中指定选中项 -->
	<view>

	</view>
</template>

<script>
	export default {
		name: "my-tabs",
		props: {
			// 1. 可以在父组件中定制样式
			config: {
				type: Object,
				default: () => {
					return {}
				}
			},
			// 2. 可以在父组件中指定数据
			tabData: {
				type: Object,
				default: () => {
					return []
				}
			},
			// 3. 可以在父组件中指定选中项
			defaultIndex: {
				type: Number,
				default: 0
			}
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">

</style>