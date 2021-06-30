function capitalize(str) {
  return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase()
}

function transformToCamelCase(str, separator = "-") {
  if (str.includes(separator)) {
    const parts = str.split(separator)
    str = parts[0] + parts.slice(1).map(capitalize).join("")
  }
  return str
}

function formatElement(element) {
  return `create${capitalize(element)}`
}

export { capitalize, transformToCamelCase, formatElement }