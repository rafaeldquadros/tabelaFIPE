import render from "./render.js";

class Request {
  static brands() {
    fetch("https://parallelum.com.br/fipe/api/v2/cars/brands")
      .then((res) => res.json())
      .then((res) => {
        render.card(res, "https://parallelum.com.br/fipe/api/v2/cars/brands", Request.models)
      })
  }

  static models(url) {
      fetch(url)
        .then(res => res.json())
        .then((res) => {
          render.cardModels(res, url, Request.years)
        })
  }

  static years(url) {
    fetch(url)
      .then(res => res.json())
      .then((res) => {
        render.cardYears(res, url, Request.details)
      })
 
  }

  static details(url) {
    fetch(url)
      .then(res => res.json())
      .then((res) => {
        render.cardDetails(res)
    })
  }    
}

export default Request;
