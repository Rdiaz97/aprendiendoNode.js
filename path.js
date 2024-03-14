const path = require('node:path')

// unir rutas con  path.join
// unix /  
// windows \
// barra separadora de carpetas
console.log(path.sep);

const filePath = path.join('content','subfolder', 'text.txt')

console.log(filePath)

const base = path.basename('/tmp/secret-files/password.txt')
console.log(base)
 
const filename  = path.basename('/tmp/secret-files/password.txt','.txt')
console.log(filename)

const extension =path.extname('image.jpg')
console.log(extension)