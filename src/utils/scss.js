const scssToObject = (val) => {
    const str = val.substring(8).replace(/^{(\n*)|(\n*)}$/g, '').replace(/(\n*)(\s*)/g, '')
    const arr = str.split(';')

    const obj = {}

    arr.forEach(item => {
        if (item) {
            const attr = item.split(':')
            obj[attr[0]] = attr[1]
        }
    });
    return obj
}

export default scssToObject