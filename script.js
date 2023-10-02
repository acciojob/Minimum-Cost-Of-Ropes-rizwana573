function calculateMinCost() {
  //your code here
  const arr = [];
	arr.push(document.getElementById("rope-lengths").value.split(","));
  //console.log("arr ", arr);
  while(arr.length>1){
	  arr.sort();
	  let minCost = arr[0]+arr[1];
	  arr.shift();
	  arr.shift();
	  console.log("arr ", arr); 
	  arr.push(minCost);
  }
	
	return arr[0];
	
}  
