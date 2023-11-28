fetch("https://restcountries.com/v3.1/all")
.then((data)=>data.json())
.then((ele)=>{
    for(let i=0;i<ele.length;i++){
        console.log(ele[i].name.common);
        let a= document.createElement("div");
        a.innerHTML=`<div class="card1">
        <div class="row col-lg-4 -col-sm-12 ">
        <div class="col">
          <div class="card">
          <div class="card-header">${ele[i].name.common}</div>
            <img src="${ele[i].flags.png}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Capital : ${ele[i].capital}</h5>
              <h5 class="card-title">Region : ${ele[i].region}</h5>
              <h5 class="card-title">Country Code : ${ele[i].cca3} </h5>
              <h5 class="card-title">Latlng : ${ele[i].latlng}</h5>
              <button class="btn btn-primary" id="weatherbutton">Click for weather</button>
            </div>
          </div>
        </div>`
        document.getElementById("cardsContainer").appendChild(a)
        document.body.append(a);
        // let b=document.getElementById("weatherbutton");
        // b.innerText=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${a48bc57de61b3da9eb170f8463f08cd7}`

       
        
    }
})

