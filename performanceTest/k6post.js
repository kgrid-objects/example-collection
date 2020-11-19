// k6 run -e URL=http://localhost:8080/node/executive/1.0/process k6post.js -u 10 -i 1000
import http from "k6/http";
import {Counter, Rate} from "k6/metrics";

let counter400 = new Counter("Number of 400");
let counter200 = new Counter("Number of 200");
let okRate = new Rate('Percentage ok');

export default function() {
  var url = __ENV.URL;
  var payload = JSON.stringify({
    name: "Steve"
  });
  var params =  { headers: { "Content-Type": "application/json" } }

  let res = http.post(url, payload, params);
  if(res.status === 400){
    counter400.add(1);
    okRate.add(0);

  } else if(res.status === 200){
    counter200.add(1);
    okRate.add(1);
  }
};
