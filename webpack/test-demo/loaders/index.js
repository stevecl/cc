module.exports = function(content, map, meta) {
  console.log('my loader is running, contnent:::', content)
  // console.log('my loader is running, contnent:::', map)
  // console.log('my loader is running, contnent:::', meta)
  const callback = this.async();
  callback(null, content, map, meta)
}