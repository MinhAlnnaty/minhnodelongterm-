const {readFileSync,writeFileSync}=require('fs')

const first=readFileSync('./content/first.txt','utf8')
const second=readFileSync('./content/subcantent/text.txt','utf8')

console.log(first,second);

writeFileSync('./content/sync.txt','here is the result'+`${first},${second}`,{flag:'a'})