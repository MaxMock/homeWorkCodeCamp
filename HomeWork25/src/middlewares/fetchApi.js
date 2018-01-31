import { headers } from "./headers";

const METHOD = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE"
};
export class fetchApi {
  constructor() {
    this.headers = headers;
  }

  prepare(method) {
    this.header = {
      method: method,
      mode: "cors",
      header: this.headers
    };
  }

  prepare(method,data) {
    this.header = {
      method: method,
      body:data,
      mode: "cors",
      header: this.headers
    };
  }
  get(url) {
    this.prepare(METHOD.GET);
    return fetch(url, this.header);
  }
  
 post(url,data){
    this.prepare(METHOD.POST,data);
    return fetch(url, this.header);
  }

}
