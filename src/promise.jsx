 
 
    //get method in fetch call   
    fetch('https://jsonplaceholder.typicode.com/posts/1',{
       method:'GET',
       })
       .then((response) => response.json())
       .then((res) => console.log(res))
       .catch((err) => console.log(err))
       .then(() => console.log('complited get method'))
   
    //post method in fetch call   
    fetch("https://jsonplaceholder.typicode.com/posts",{
       method:"POST",
       headers:{'Content-type': 'application/json; charset=UTF-8'},
       body:JSON.stringify({userId:101,id:101,title:"react",body:"apicalls"})
   }).then(res => res.json())
   .then(res => console.log(res))
   .catch( (err) =>  console.log(err))
   
   //put method in fetch call (if i am not passing headers then it will give only id in response not title)
   fetch('https://jsonplaceholder.typicode.com/posts/1',{
       method:'PUT',
       headers:{'Content-type': 'application/json; charset=UTF-8'},
       body:JSON.stringify({title:"put call"})
   }).then(res => res.json())
     .then(res => console.log(res))
     .catch(err=> console.log(err))
    
   
    // delete method in fetch call
    fetch('https://jsonplaceholder.typicode.com/posts/1',{
       method:"DELETE"
   }).then((res) => res.json())
   .then((res) => {console.log(res,'get the updated response')})
   
    // update and fetch the property
    fetch('https://jsonplaceholder.typicode.com/posts/1',{
       method:'PUT',
       headers:{'Content-type': 'application/json; charset=UTF-8'},
       body:JSON.stringify({title:"put call"})
   }).then(() => {
       return fetch('https://jsonplaceholder.typicode.com/posts/1',{
           method:"GET",
           
       }).then(res => res.json())}
          ).then(res => console.log(res)).catch(err=> console.log(err))
   
   // fetch -> delete -> fetch the updated property
   fetch('https://jsonplaceholder.typicode.com/posts',{
       method:"GET"
   }).then( () => {
   return fetch('https://jsonplaceholder.typicode.com/posts/1',{
       method:"DELETE"
   }).then(() => console.log('deleted'))
   }).then(() => {
      return fetch('https://jsonplaceholder.typicode.com/posts',{
       method:"GET"
   }).then(() => console.log('get the updated response'))
   })
      
   //async await
   const doapicalls = async() => {
       await fetch('https://jsonplaceholder.typicode.com/todos')
         .then((res) => {res.json()})
         .then((todos) => {
             return fetch('https://jsonplaceholder.typicode.com/todos/1')
                          .then((res) => res.json())
                          .then((result) => ({todos,result}))
         })
          .then(({todos,result}) => console.log({todos,result}))
         .then(() => console.log('complited'))
       }
   // more simple way
   const doapicalls1 = async() => {
       const todos = await fetch('https://jsonplaceholder.typicode.com/todos')
       const result = await todos.json()
       const firstindex = await fetch('https://jsonplaceholder.typicode.com/todos/1')
       const firstreult = await firstindex.json()
        
         console.log(result,firstreult)
          
        }
   let promise = doapicalls1()
   promise.then(res => console.log('success')).catch(err=> console.error('reject'))
   
   // second way
   const doapicalls2 = async() => {
       try{
       const todos = await fetch('https://jsonplaceholder.typicode.com/todos')
       const result = await todos.json()
       const firstindex = await fetch('https://jsonplaceholder.typicode.com/todos/1')
       const firstreult = await firstindex.json()
        
         console.log(result,firstreult)
       }catch(err){throw err}    
        }
   
   