function calculateMinCost() {
  //your code here
	let arr = document.getElementById("rope-lengths").value.split(",").map(Number);
    // console.log(nums, nums);
	//const arr = arr.push();
  //console.log("arr11 ", arr);
	arr.sort((a,b) => a-b);
	let res=0;
  while(arr.length > 1){
	  
	 // console.log("arr33 ", arr);
	 let first = arr.shift();
	  let second = arr.shift(); 
	 res+=first+second;
	  arr.push(first+second);
	  arr.sort((a,b) => a-b);
	  // console.log("arr22 ", arr); 
  }
	document.getElementById("result").innerHTML=res;
	
}  
