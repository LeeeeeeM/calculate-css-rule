// 没有具体规范需要自己实现
/**
 * 文本节点，特殊节点。   <span>xxxx</span>  xxxx就是文本节点
 */
export class Text {
  constructor(text) {
    this._nodeType = ''
    this._nodeName = '#text'
    this._textContent = text
  }
}