import { transformToCamelCase } from "../utils/stringUtils.js"
import { elementsById, elementsByClassName, elementsByTagName } from "./domReferences.js"

const idReferences = domReferencesCreator(elementsById, getElementById)
const classReferences = domReferencesCreator(elementsByClassName, getElementsByClassName)
const tagReferences = domReferencesCreator(elementsByTagName, getElementsbyTagName)

function getElementById(id) {
  return document.getElementById(id)
}

function getElementsByClassName(className) {
  const elements = document.getElementsByClassName(className)
  return elements.length === 1 ? elements[0] : elements
}

function getElementsbyTagName(tagName) {
  return document.getElementsByTagName(tagName)
}

function domReferencesCreator(references, getReferencesFn) {
  return references.reduce((acc, curr) => {
    acc[transformToCamelCase(curr)] = getReferencesFn.bind(undefined, curr)
    return acc
  }, {})
}

const domReferences = Object.assign({}, idReferences, classReferences, tagReferences)

export default domReferences
