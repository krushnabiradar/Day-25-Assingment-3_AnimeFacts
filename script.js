fetch("https://anime-facts-rest-api.herokuapp.com/api/v1 ")
.then((x)=>x.json())
.then((response)=>{
    console.log(response);
    let content = document.getElementById("content")
    
    const arr = response.data
    
   arr.map((data)=>{
         let item =document.createElement("div") ;
         item.classList.add("item")
       let image_element = document.createElement('img')
       image_element.src =data.anime_img ;
       image_element.classList.add("img-fluid","d-flex", "justify-content-center","rounded", "img-thumbnail")
       item.appendChild(image_element)

       let name_element= document.createElement('p')
       name_element.innerText=` ${data.anime_name}` ;
       name_element.classList.add("fs-3","fw-bolder", "text-center","text-capitalize","bg-gradient","m-0","text-dark", "bg-light");
    item.appendChild(name_element);
    
    let btn =document.createElement("button") ;
    btn.innerText = "get an interesting fact"  ;
   btn.classList.add("text-muted","fs-5","fw-bolder", "bg-dark", "text-center","text-capitalize","btn","bg-gradient","m-0","p-0")
   btn.setAttribute("data-bs-toggle","modal")
   btn.setAttribute("data-bs-target",".exampleModal")
   btn.addEventListener("click",()=>{
      let name = document.getElementById("name")
      name.classList.add("fw-bolder","fs-4", "text-uppercase")
      name.innerText=data.anime_name ;
      getDetails(data.anime_name)
   })
    item.appendChild(btn);
    content.appendChild(item)  ;  
   })
    })
.catch((er)=>{
console.error(er);
})
function getDetails(anime_name){
   fetch(`https://anime-facts-rest-api.herokuapp.com/api/v1/${anime_name}`) 
   .then((x)=>x.json())
   .then((response)=>{
      console.log(response);
      let facts = document.getElementById("facts")
      facts.classList.add("fw-bolder", "fst-italic","font-monospace")
      facts.innerText = response.data[0].fact
   
 })
 .catch((er)=>{
   console.error(er);
   })
}