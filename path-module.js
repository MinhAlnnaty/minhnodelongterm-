const path=require('path')

console.log(path.sep)

const filepath=path.join('/content/','subcantent','text.txt')
console.log(filepath)


console.log(path.basename(filepath))

console.log(path.resolve(__dirname,'text.txt'))