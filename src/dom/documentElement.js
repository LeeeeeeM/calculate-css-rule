// https://developer.mozilla.org/zh-CN/docs/Web/API/Document/documentElement
/**
 * HTML类，作为document的根元素 即HTML元素
 */

import Node from './node'

export default class DocumentElement extends Node {
  constructor() {
    super(...arguments)
  }
}