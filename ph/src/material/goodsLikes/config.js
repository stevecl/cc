let config = {
  title: '猜你喜欢',
  style: {
    background: '#ffffff', // 底部背景
    padding: '10px 0 0 0',
    margin: '0 0 0 0',
  },
  titleConfig: {
    show: true,
    text: '猜你喜欢',
    color: '#333',
    lineColor: '#333',
    icon: ''
  },

  productConfig: {
    showType: 3, // 风格样式
    goodSpace: 0, // 商品间距
    goodRadius: 0, // 商品圆角
    bgColor: '#fff', // 商品背景
    detail: {
      title: {
        show: true,
        name: '商品标题',
        style: {
          color: '#37383A',
          resetColor: '#37383A'
        }
      },
      subtitle: {
        show: true,
        name: '副标题',
        style: {
          color: '#999CA7',
          resetColor: '#999CA7'
        }
      },
      price: {
        show: true,
        name: '商品价格',
        style: {
          color: '#FF2F46',
          resetColor: '#FF2F46',
        }
      },
      oldPrice: {
        show: false,
        name: '划线原价',
        style: {
          color: '#999CA7',
          resetColor: '#999CA7',
        }
      },
      sales: {
        show: false,
        name: '商品销量',
        style: {
          color: '#999CA7',
          resetColor: '#999CA7',
        }
      },
      tag: {
        show: true,
        name: '标题标签',
      }
    },
    car: {
      show: true,
      type: 'btn1',
      size: 'small', // small middle big
      text: '购买',
      color: '#fff',
      carColor: '#FF5555',
      bgColor: '#FF5555',
      borderColor: 'rgba(255,255,255,0)',
      borderRadius: 0,
    },
  },
  dataConfig: {
    type: 'product', // product: 固定商品 category: 分类商品
    selectList: [], // 固定商品 所选商品列表
    category: '', // 所选 商品分类
    showNum: 1, // 商品分类 显示商品个数
  }
}

export default config
