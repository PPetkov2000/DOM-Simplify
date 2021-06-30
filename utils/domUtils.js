function createElement(type, content, attributes) {
  const element = document.createElement(type)

  if (attributes !== undefined) {
    Object.assign(element, attributes)
  }

  if (Array.isArray(content)) {
    content.forEach(append)
  } else {
    append(content)
  }

  function append(node) {
    if (typeof node === "string" || typeof node === "number") {
      node = document.createTextNode(node)
    }
    element.appendChild(node)
  }

  return element
}

function elementsExist(...elements) {
  return elements.every((element) => element != null)
}

function traverseElement(element, childElementsFound = []) {
  if (element.children.length === 0) return [element]
  element.children.forEach((child) => {
    childElementsFound.push(child)
    traverseElement(child, childElementsFound)
  })
  return [element, ...childElementsFound]
}

function getInnermostChild(element) {
  if (element.children.length === 0) return element
  return getInnermostChild(element.children[0])
}

export { createElement, elementsExist, traverseElement, getInnermostChild }