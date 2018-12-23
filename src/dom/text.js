// 没有具体规范需要自己实现
/**
 * 文本节点，特殊节点。   <span>xxxx</span>  xxxx就是文本节点
 */

import Node from './node'

export default class Text extends Node {
  constructor() {
    super(...arguments)
    this.nodeType = ''
    this.nodeName = '#text'
    this.textContent = null
  }
}