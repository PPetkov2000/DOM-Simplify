import { htmlElements } from "./htmlElements.js"
import { createElement } from "../utils/domUtils.js"
import { formatElement } from "../utils/stringUtils.js"

const htmlElementsFactory = htmlElements.reduce((acc, curr) => {
  acc[formatElement(curr)] = createElement.bind(undefined, curr)
  return acc
}, {})

export default htmlElementsFactory
