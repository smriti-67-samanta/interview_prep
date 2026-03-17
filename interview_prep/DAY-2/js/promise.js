/* promise -->  object representing the eventual completion or failure of an asynchronous operation
                includes three staes 1. fulfilled
                                     2.pending
                                     3.rejected
*/

//example ->

function fetchData(){
    return new Promise((resolve, reject) => {
         setTimeout(() => {
        const success=true
        if(success){
            resolve("data fetched successfully")
        }
        else{
            reject("error fetching data")
        }
    },2000)
    })
}
fetchData()
       .then(result=>console.log(result))
       .catch(error=>console.log(error))
       .finally(()=>console.log("done"))