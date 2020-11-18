import http from "k6/http";
import {Counter} from "k6/metrics";

let counter = new Counter("Number of 400");

export default function() {
  var url = "http://localhost:8080/js/simple/1.0/welcome";
  // var url = "http://localhost:3000/kn101010101"
  var payload = JSON.stringify({
    name: "Steve"
  });
  var params =  { headers: { "Content-Type": "application/json" } }

  let res = http.post(url, payload, params);

  if(res.status === 400){
    counter.add(1);
  }
};
