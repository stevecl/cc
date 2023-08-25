// 冒泡排序
function bubbleSort(list) {
  var len = list.length
  if (!len) return []

  for(var i = 0; i < len; i++) {
    let mark = true
    for(var j = 0; j < len - i - 1; j++) {
      if (list[j] > list[j + 1]) {
        [list[j], list[j + 1]] = [list[j + 1], list[j]]
        mark = false
      }
    }
    if (mark) break
  }
  return list
}

// console.log(bubbleSort([1,3,5,3,1,2,55]))
// 1,3,3,1,2,5,55
// 1,3,1,2,3,5,55
// 1,1,2,3,3,5,55
// console.log(bubbleSort([7,6,5,4,3,2,1]))
// 6,5,4,3,2,1,7
// 5,4,3,2,1,6,7
// 4,3,2,1,5,6,7
// 3,2,1,4,5,6,7
// 2,1,3,4,5,6,7
// 1,2,3,4,5,6,7

function bubbleSort2(list) {
  let low = 0, high = list.length - 1
  while(low < high) {
    let mark = true
    // find max
    for(let i = 0;i < high; i++) {
      if (list[i] > list[i + 1]) {
        [list[i], list[i + 1]] = [list[i + 1], list[i]]
        mark = false
      }
    }
    high--
    // find min
    for(let j = 0;j > low; j++) {
      if (list[j] < list[j - 1]) {
        [list[j], list[j - 1]] = [list[j - 1], list[j]]
        mark = false
      }
    }
    low++
    if (mark) break
  }
  return list
}
// console.log(bubbleSort2([1,3,5,3,1,2,55]))

// 选择排序
function selectSort(list) {
  var len = list.length
  var minIndex
  for(var i = 0; i < len; i++) {
    minIndex = i
    for(var j = i + 1; j < len; j++) {
      if (list[j] < list[minIndex]) {
        minIndex = j
      }
    }
    [list[minIndex], list[i]] = [list[i], list[minIndex]]

  }
  return list
}

console.log(selectSort([1,3,5,3,1,2,55]))