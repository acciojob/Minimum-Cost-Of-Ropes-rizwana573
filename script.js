function calculateMinCost() {
  //your code here
	let arr = document.getElementById("rope-lengths").value.split(",").map(Number);
    // console.log(nums, nums);
	//const arr = arr.push();
  console.log("arr11 ", arr);
	arr.sort(function(a,b){return a-b;});
  while(arr.length > 1){
	  
	  console.log("arr33 ", arr);
	  let minCost = (arr[0])+(arr[1]);
	  arr.shift();
	  arr.shift(); 
	  arr.push(minCost);
	  arr.sort(function(a,b){return a-b;});
	   console.log("arr22 ", arr); 
  }
	document.getElementById("result").innerHTML=arr[0];
	
}  
