// Fetching the emails from API 

const res = fetch("https://jsonplaceholder.typicode.com/users")
function success(res){
    console.log(res)
    res.json().then((result)=>{
        let emails = result.map(user => user.email); 
        console.log(emails)
    
    })
}
function error(){

}
res.then(success).catch(error)

