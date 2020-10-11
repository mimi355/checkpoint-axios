
const express=require("express")
const app =express()
const axios=require("axios")

// Make a request for a user with a given ID
app.get("/:cityName",(req,res)=>{
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${req.params.cityName}&appid=36cf97a7345360498a692e1c5947d003&units=metric`
    axios.get(url)
    .then(function (response) {
      // handle success
      res.send(response.data)
     
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
   

})
app.listen(3000,()=>{ console.log("the server is running on port 3000")})