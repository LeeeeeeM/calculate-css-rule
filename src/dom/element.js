// https://developer.mozilla.org/zh-CN/docs/Web/API/Element
/**
 * DOM 属性类，直接挂载到element上的属性
 */
import Node from './node'

export default class Element extends Node {
  constructor() {
    super(...arguments)
    this.classList = []
    this.attributes = {}
    this.id = null
    this.tagName = null
  }

  getElementById() {
    // TODO
  }

  // AND SO ON
}