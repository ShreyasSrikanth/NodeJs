console.log('a');
console.log('b');

const printData = () =>{
    const promise = new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve('d')
        }, 0);
    });
    return promise;
}

const printData2 = () => {
    const promise2 = new Promise((resolve,reject) =>{
        resolve('e')
    })
    return promise2
} 

setTimeout(() => {
    console.log('c');
    printData()
      .then(text =>{
        console.log(text);
        return printData2();
      })
      .then(text2 =>{
        console.log(text2)
      })
}, 3000);