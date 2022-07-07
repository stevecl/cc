function MaterialCreater() {
  this.materialList = []
  this.materialMap = {}
}

MaterialCreater.prototype.add = function (material) {
  if (!material.key) return console.error('material is not valid')
  this.materialList.push(material)
  this.materialMap[material.key] = material
}

export const material = new MaterialCreater()

material.add({
  key: 'text',
  preRender: () => <span>文本物料</span>,
  render: () => <span>文本组件</span>,
})

material.add({
  key: 'button',
  preRender: () => <ElButton>按钮物件</ElButton>,
  render: () => <button>按钮组件</button>
})

material.add({
  key: 'input',
  preRender: () => <ElInput placeholder="输入框物料">222</ElInput>,
  render: () => <input type="text" placeholder="输入框"/>
})