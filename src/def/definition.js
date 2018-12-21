// https://developer.mozilla.org/zh-CN/docs/Web/API/Node
/**
 * 节点类型
 */

export const nodeTypeMap = {
  ELEMENT_NODE: 1,  // element元素节点
  ATTRIBUTE_NODE: 2,
  TEXT_NODE: 3, // text文本节点
  CDATA_SECTION_NODE: 4,
  ENTITY_REFERENCE_NODE: 5,
  ENTITY_NODE: 6,
  PROCESSING_INSTRUCTION_NODE: 7,
  COMMENT_NODE: 8, // 注释节点
  DOCUMENT_NODE: 9, // DOM节点
  DOCUMENT_TYPE_NODE:	10,
  DOCUMENT_FRAGMENT_NODE: 11, // fragment节点
  NOTATION_NODE: 12
}
