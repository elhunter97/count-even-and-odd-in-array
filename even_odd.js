let arr=[];
let n = +prompt('Input size of array');
for(let i=0;i<n;i++){
    arr[i]=+prompt(i);
}
let cntOdd = 0;
let cntEven = 0;
for (let i = 0; i < n; i++) {
    if(arr[i]%2===0) cntEven++;
    else cntOdd++;
}
document.write('Even have '+cntEven+'<br> Odd have '+cntOdd);