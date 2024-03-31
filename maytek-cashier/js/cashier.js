import './rem.js'

let { ref, createApp, computed } = Vue

createApp({
  setup() {
    const searchVal = ref('')
    const productList = ref([])
    const totalPrice = computed(() => {
      return productList.value.reduce((total, cur) => {
        return Math.floor((total + cur.num * cur.salesPrice) * 100) / 100
      }, 0)
    })

    const handleDelete = index => {
      productList.value.splice(index, 1)
    }

    const handleClear = () => {
      productList.value = []
    }

    const search = async () => {
      let res = await fetch("/prod-api/cashier/product/queryList?params=" + searchVal.value, {
        method: "get",
        headers: {
          'Clientid': localStorage.getItem('clientId'),
          // "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          'Authorization' : 'Bearer ' + localStorage.getItem('token'),
          "Content-Type": "application/json",
        },
      })
      res.json().then(json => {
        let { code, data, msg } = json
        if (code === 200) {
          let list = data.map(obj => ({
            numberCode: obj.numberCode,
            barCode: obj.barCode,
            productName: obj.productName,
            productImgurl: obj.productImgurl,
            salesPrice: obj.salesPrice,
            originalPrice: obj.originalPrice,
            num: 1
          }))
          if (list.length === 1) {
            let index = productList.value.findIndex(obj => obj.numberCode === list[0].numberCode)
            if (index > -1) {
              productList.value[index].num ++
            } else {
              productList.value.push(list[0])
            }

          } else {
            productList.value = [...productList.value, ...list]
          }
          console.log('productList.value', productList.value)
        }
      })
    }

    const changeNum = (item, num) => {
      if (num === -1 && item.num === 0) {
        return
      }
      item.num += num
    }
    return {
      searchVal,
      productList,
      totalPrice,
      handleDelete,
      handleClear,
      search,
      changeNum
    }
  }
}).mount('#app')