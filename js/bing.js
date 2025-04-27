/**
 * 请求https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN接口的内容
 */
async function getBingImg() {
    /**
     * format（非必需）:js,xml
     * 返回数据格式，不存在返回xml格式
     *
     * idx(非必需):0今天,-1截止中明天 （预准备的）,1截止至昨天，类推（目前最多获取到7天前的图片）
     * 请求图片截止天数
     *
     * n（必需）:1-8 返回请求数量，目前最多一次获取8张
     *
     *
     * mkt地区（非必需）:zh-CN
     * @type {Response}
     */
    try {
        const res = await fetch('https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=zh-CN')
        if (res.ok) {
            const data = await res.json()
            console.log('获取bing每日壁纸成功:', data)
            return {
                url: 'https://cn.bing.com' + data['images'][0]['url']
            }
        } else {
            console.warn('获取bing每日壁纸失败,状态码:', res.status)
        }
    } catch (error) {
        console.error('获取bing每日壁纸失败:', error)
    }
    return {
        url: 'https://ghproxy.com/https://raw.githubusercontent.com/sgr997/images/main/blog/E66458F0-6245-4FD6-BD62-C1FAB8238D92.jpeg'
    }
}

function changeImg() {
    getBingImg().then(res => {
        const headerElement = document.getElementById('page-header');
        if (headerElement) {
            const img = new Image();
            img.src = res.url
            img.onload = function () {
                headerElement.style.backgroundImage = `url(${res.url})`
                headerElement.style.opacity = '1'
            }
            img.onerror = function () {
                console.error('壁纸加载失败', res.url)
                headerElement.style.opacity = '1'
            }
        } else {
            console.warn('未找到header.intro-header元素');
        }
    })
}

document.addEventListener('DOMContentLoaded', changeImg)
