// https://developer.mozilla.org/zh-CN/docs/Web/API/Node
/**
 * 底层Node基本属性和方法 底层基类
 */

import EventTarget from './eventTarget'
import { NodeTypeMap } from '../def/definition'
import { uniqueId } from '../util/index'

Node.NodeType = NodeTypeMap

export default class Node extends EventTarget {
  constructor() {
    super(...arguments)
    this.childNodes = []

    // special in this
    this.ref = uniqueId()

    this.nodeType = Node.NodeType.UNKNOWN
    this.nodeName = null
    this.textContent = null
    this.parentNode = null
    this.ownerDocument = null

    // nextSibling lastChild firstChild previousSibling
    // parentElement
  }

  appendChild() {
    // TODO
  }

  insertBefore() {
    // TODO
  }

  removeChild() {
    // TODO
  }

  // AND SO ON
}
