// https://developer.mozilla.org/zh-CN/docs/Web/API/Document
/**
 * 整个DOM的dom类 doc
 */

import Node from './node'

export default class Document extends Node {
  constructor() {
    super(...arguments)
    this.body = null // 返回body节点
  }
}