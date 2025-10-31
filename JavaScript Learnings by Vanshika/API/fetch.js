const res  = fetch("https://jsonplaceholder.typicode.com/posts")
console.log(res)

function success(res){
    console.log(res)
    res.json().then((result)=>{
        console.log(result)
    })
}
function error(){

}
res.then(success).catch(error)