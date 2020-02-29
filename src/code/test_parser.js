export let parser =(str) =>{  // name=lbj
    let obj={}
    str.replace(/([^&=]*)=([^&=]*)/g,function () {
        obj[arguments[1]]=arguments[2]
    })
    return obj      // {name:lbj}
}

export  let stringifj=(obj)=>{   // {name:lbj}
    let arr=[]
    for(let key in obj){
        arr.push(`${key}=${obj[key]}`)
    }
    return arr.join('&') // name=lbj
}

console.log(parser('name=lbj'))
console.log(stringifj({name:'lbj'}))