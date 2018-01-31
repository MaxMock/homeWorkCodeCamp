export class templateBinder {
  
  static bind(template, data) {
    let templates = []
    data.forEach(a => {
      let aTemplate = template
      Object.keys(a)
        .forEach(aKey => {
          aTemplate = aTemplate.replace(`{{${aKey}}}`, a[aKey])
        })
      templates.push(aTemplate)
    })
    return templates.join('')
  }
}