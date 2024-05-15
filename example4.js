let data = fetchData();
let result;

if (data) {
  result = processData(data);
} else {
  result = "No data";
}

result = data ? processData(data) : "No data";
