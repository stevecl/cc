export default {
  title: '店铺组',
  type: 1,

  style: {
    padding: '0 0 0 0',
    margin: '0 0 0 0',
  },

  colorSet: {
    background: '#F5F8FB',
    itemBg: '#fff',
    name: '#2F3033',
    adress: '#626260',
  },

  dataConfig: {
    type: 'product', // product: 固定商品 category: 分类商品
    selectList: [], // 固定商品 所选商品列表
    categoryId: '', // 所选 商品分类
    categoryName: '', // 分类名称
    showNum: 1, // 商品分类 显示商品个数
  }
}