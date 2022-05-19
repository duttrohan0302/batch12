function swap(arr,x,y){
    let temp = arr[x];
    arr[x]=arr[y];
    arr[y]=temp;
}

function shuffle(arr){

    const n = arr.length;
    arr.sort((a,b)=>a-b)


    // wave for arr[0]<=arr[1]>=arr[2]<=arr[3] & so on
    // for(let i = 1;i<n-1;i+=2){
    //     swap(arr,i,i+1)
    // }

    // wave for arr[1]>=arr[1]<=arr[2]>=arr[3] & so on
    for(let i = 0;i<n-1;i+=2){
        swap(arr,i,i+1)
    }

    return arr;
}

const questionArr = [2,1,5,3,11,7]

const answerArr = shuffle(questionArr);

console.log(answerArr)

//Time Complexity - O(nlogn)
// Space Complexity - O(1)