// 排列组合
const _permute = (string) => {
  const result = [];
  const map = new Map()
  const dfs = (path) => {
    if (path.length === string.length) return result.push(path) 

    for(let i = 0; i < string.length; i++) {
      if (map.get(string[i])) continue
      map.set(string[i], true)
      path += string[i]
      dfs(path)
      path = path.substring(0, path.length -1)
      map.set(string[i], false)
    }
  }
  dfs('')
  return result
}

// console.log(222, _permute('abcde'))

function fn() {
  let arr = [1, 2, 3]
  arr.map(() => {
    console.log('this:', this)
    return 2
  })
}

fn()