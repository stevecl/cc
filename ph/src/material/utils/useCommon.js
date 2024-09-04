export default function() {
  const getDefaultImage = (name) => {
    return new URL(`../../assets/images/default/${name}`, import.meta.url).href
  }

  const getImgRatio = (str, def = 1) => {
    if (!str) return def
    let arr = str.replace(/[^0-9:]/g, '').split(':')
    if (arr.length !== 2 || !arr[0] || !arr[1]) return def
    return arr[0] / arr[1]
  }
  return {
    getDefaultImage,
    getImgRatio
  }
}