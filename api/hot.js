import request from "@/utils/request";

export function getHotTabs () {
	return request({
		url: '/hot/tabs'
	})
}