
import http from "k6/http";

import { check, fail } from "k6";
const params = {headers: {'Content-Type': 'application/json'}};
let hostname = __ENV.HOSTNAME === undefined ? 'localhost:8080' : __ENV.HOSTNAME
let testObjects = [
  {endpoint: "exec/example/v1.0.0/execute", input: {"name": "test-1-step", "iterations":10, "steps": "10"}, result: 45, name: "test-1-step-"},
  {endpoint: "exec/example/v1.0.0/execute", input: {"name": "test-2-step", "iterations":100000, "steps": "10"}, result: 4999950000, name: "test-2-step-"},
  {endpoint: "exec/example/v1.0.0/execute", input: {"name": "test-3-step", "iterations":1000000, "steps": "10"}, result: 499999500000, name: "test-3-step-"},
  {endpoint: "exec/example/v1.0.0/execute", input: {"name": "test-4-step", "iterations":10000000, "steps": "10"}, result: 49999995000000, name: "test-4-step-"},

]

export default function() {

  //Get test data
  let randomtestObject = testObjects[Math.floor(Math.random() * testObjects.length)];

  //construct URL
  const url = `http://${hostname}/`+randomtestObject.endpoint;

  //Call endpoint with input data
  let response = http.post(url,JSON.stringify(randomtestObject.input), params);

  //Check Response
  check(response, {
    'is status 200': (r) => r.status === 200,
    "name0" : (r) => JSON.parse(r.body).result.steps["0"].name == randomtestObject.name + "0",
    "name9" : (r) => JSON.parse(r.body).result.steps["9"].name == randomtestObject.name + "9",
    "result0": (r) => JSON.parse(r.body).result.steps["0"].result == randomtestObject.result,
    "result9": (r) => JSON.parse(r.body).result.steps["9"].result == randomtestObject.result,
    "correlation": (r) => JSON.parse(r.body).result.steps["0"].correlationId == JSON.parse(r.body).result.steps["9"].threadsafe
  }) || fail(r.body);

};
