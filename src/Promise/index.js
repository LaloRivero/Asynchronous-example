
const somethingWillHappend = () =>{
  return new Promise((resolve, reject) =>{

      if(false){
        resolve("The promise is resolve")
      }else{
        reject("Error with the promise")
      }

  })
}

somethingWillHappend()
  .then( response => console.log(response))
  .catch( err => console.log(err))