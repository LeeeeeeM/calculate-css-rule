// https://developer.mozilla.org/zh-CN/docs/Web/API/Comment
/**
 * 整个DOM的dom类 doc
 */

import Node from './node'

export default class Comment extends Node {
  constructor() {
    super(...arguments)
    this._data = null
  }
}
