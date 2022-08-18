import request from "./request.js";

class Render {
  static card(response, url, callback) {
    const ul = document.querySelector("ul")
    ul.innerHTML = ""

    response.forEach((element) => {
      const li  = document.createElement("li")
      const h3  = document.createElement("h3")
      const btn = document.createElement("button")
      
      btn.addEventListener("click", () => {
        url = url + `/${element.code}/models`
        console.log(url)
        callback(url)
      })

      h3.innerText  = element.name
      btn.innerText = "Mais informações"

      li.append(h3,btn)
      ul.append(li)
    })
  }
  static cardModels(response, url, callback){
      const ul = document.querySelector("ul")
      ul.innerHTML = ""
  
      response.forEach((element) => {
        const li  = document.createElement("li")
        const h3  = document.createElement("h3")
        const btn = document.createElement("button")
        
        btn.addEventListener("click", () => {
          url = url + `/${element.code}/years`
          console.log(url)
          callback(url)
        })
  
        h3.innerText  = element.name
        btn.innerText = "Mais informações"
  
        li.append(h3,btn)
        ul.append(li)
      })
  }
  static cardYears(response, url, callback){
    const ul = document.querySelector("ul")
      ul.innerHTML = ""
  
      response.forEach((element) => {
        const li  = document.createElement("li")
        const h3  = document.createElement("h3")
        const btn = document.createElement("button")
        
        btn.addEventListener("click", () => {
          url = url + `/${element.code}`
          console.log(url)
          callback(url)
        })
  
        h3.innerText  = element.name
        btn.innerText = "Mais informações"
  
        li.append(h3,btn)
        ul.append(li)
      })
  }
  static cardDetails(response){
    console.log(response)
    const ul = document.querySelector("ul")
    ul.innerHTML = ""

    const li    = document.createElement("li")
    li.id ="liDetails"
    const h3    = document.createElement("h3")
    h3.id ="h3Details"
    const p     = document.createElement("h3")
    p.id ="pDetails"
    const p2    = document.createElement("h3")
    p2.id ="p2Details"
    const span  = document.createElement("span")
    span.id = "spanDetails"
    const btn   = document.createElement("button")
    btn.id = "btnDetails" 
      
    btn.addEventListener("click", () => {
      request.brands()
    })

    h3.innerText   = response.model
    p.innerText    = response.brand
    p2.innerText   = response.modelYear
    span.innerText =` ${response.price}`
    btn.innerText  = "Voltar à pesquisa"

    li.append(h3, p, p2, span, btn)
    ul.append(li)
    }
}

export default Render;
