import request from '@/utils/request'

/**
 * @function 获取商品
 * @param { String } goodsName 商品名称/品牌名称/货号
 * @param { String } goodsState PUT_ON_SALE 商品状态,原型上没有这个筛选条件的情况下,前端默认传上架状态
 * @param { String } brandId 品牌ID
 * @param { String } categoryId 分类id
 * @param { String } type 同城:CITY 线上：ONLINE
 * @returns 
 */
export function getProductList(data) {
  return request({
    url: '/custom/dataItem/customItemGoodsList',
    method: 'post',
    data
  })
}


/**
 * @function 商品分类(线上/同城)，不分页
 * @param { String } searchKey 搜索关键字 
 * @param { String } type 
 * @value CUSTOM_ITEM_TYPE 自定义链接跳转分类;
 * @value CATEGORY_ONLINE 商品分类[线上];
 * @value CATEGORY_CITY 商品分类[同城]
 * @value SHOP_ONLINE 店铺列表[线上]  分页
 * @value SHOP_CITY 店铺列表[同城]  分页
 * @value STRATEGY_CLASS 攻略分类  分页
 * @value PROMOTION_ACTIVITY_CLASS 促销活动分类
 * @value BRAND_CLASS 品牌分类 分页
 * @value BASICS_PAGE_CODE 基础页面
 * @returns
 */
export function getDataItem(type) {
  return request({
    url: '/custom/new/getDataItem',
    method: 'post',
    data: {
      type,
      sourceType: 'MARKET_APPLETS'
    }
  })
}

/**
 * @function 获取商品品牌
 * @returns 
 */
export function getBrandList(brandName) {
  return request({
    url: '/goods/brand/listBrandItem',
    method: 'post',
    data: {
      brandName
    }
  })
}

/**
 * @function 获取商品状态
 * @returns 
 */
export function getProductStateList() {
  return request({
    url: '/enum/GoodsStateEnum',
    method: 'post',
    data: {}
  })
}

/**
 * @function 获取商品
 * @returns 
 */
export function getProductList2() {
  return request({
    url: '/custom/appHomePage/dataItem',
    method: 'post',
    // data: {
    //   id: "986bfafe-0a13-4b73-b841-86034be876cf",
    //   key: "COMMODITY",
    //   dataType: "ALL",
    //   cacheFlag: "false",
    //   pageNum: 1,
    //   pageSize: 8,
    //   sourceType: "MARKET_APPLETS"
    // }
    data: {
      id: "5d09af90-7290-40e5-b30e-4fea737a5b29",
      key: "COMMODITY",
      dataType: "SPECIFIC",
      cacheFlag: "false",
      pageNum: 1,
      pageSize: 8,
      classId: 2122242894147637,
      sourceType: "MARKET_APPLETS"
    }
  })
}