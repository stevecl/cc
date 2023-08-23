let objToString = obj => {
  let str = ''
  for(let key in obj) {
    str += `${key}: ${obj[key]};`
  }
  // console.log('str', str)
  return str
}
let updateItemStyle = item => {
    let { translateX, translateY, scale, rotate } = item
    item.style = objToString({
      // position: 'absolute',
      transform: `translate(${translateX}px, ${translateY}px) scale(${scale}) rotate(${rotate}deg)`
    })
}

export {
  updateItemStyle
}