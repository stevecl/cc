var a = true
setTimeout(() => {
  a = false
}, 1000)

while(a) {
  console.log('aaaa', a)
}