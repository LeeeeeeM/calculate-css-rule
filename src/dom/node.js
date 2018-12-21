// https://developer.mozilla.org/zh-CN/docs/Web/API/Node
/**
 * 底层Node基本属性和方法
 */
export class Node {
  constructor() {
    this.childNodes = []
    // nextSibling lastChild firstChild previousSibling
    // parentElement
    this.nodeType = 0 /* number */
    this.nodeName = null
    this.textContent = null
    this.parentNode = null
    this.ownerDocument = null
  }

  appendChild () {
    // TODO
  }

  insertBefore () {
    // TODO
  }

  removeChild () {
    // TODO
  }

  // AND SO ON
}