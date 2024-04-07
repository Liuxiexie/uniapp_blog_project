// 封装请求对象
const BASE_URL = `https://api.imooc-blog.lgdsunday.club/api/`

function request({url,data,method}) {
	return new Promise((resolve,reject) => {
		// 发起网络请求
		uni.request({
			url: BASE_URL + url,
			data,
			header: {
				icode: 'helloqianduanxunlianying'
			},
			method,
			success: ({data}) => {
				if(data.success) {
					// 请求成功
					resolve(data)
				} else {
					// 请求失败
					uni.showToast({
						title: data.message,
						icon: 'none',
						mast: true,
						duration:3000
					})
					reject(data.message)
				}
			},
			fail: (error) => {
				reject(error)
			}
		})
	})
}

export default request