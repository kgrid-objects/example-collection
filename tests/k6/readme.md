#Load Testing

### Install k6
 
Windows installer or Mac Brew install installation instructions can be found at 
[K6 Installation](https://docs.k6.io/docs/installation)

### Running the test
A KGrid Activator loaded with the example exec-example object will need to be running.  By default the scripts look to
localhost:8080 but you can change the hostname when running the script. k6 works with the concept of virtual users (VUs), which run scripts - they're essentially glorified, 
parallel while(true) loops. 

The following script hits the activator at localhost:8080 (the default) using the exec-example KO, 
running a 10-second, 5-VU load test

```bash
k6 run --vus 5 --duration 10s tests/k6/exec-tests.js 
```


The following script hits the activator at localhost:8080 (the default) using the exec-example KO, 
running a 10-second, 5-VU load test

```bash
k6 run -e HOSTNAME=kgrid-activator.herokuapp.com  --vus 5 --duration 10s tests/k6/exec-tests.js

```