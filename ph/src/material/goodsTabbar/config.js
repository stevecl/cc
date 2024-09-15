let config = {
  title: '选项卡',
  style: {
    background: '#ffffff', // 底部背景
    padding: '0 0 0 0',
    margin: '0 0 0 0',
  },
  itemStyle: {
    goodBgColor: '#fff', // 商品背景
    goodSpace: 0, // 商品间距
  },


  showType: 1,
  detailConfig: {
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
  carConfig: {
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
  datas: [
    
  ]
}

export default config
