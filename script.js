function deepEquals(a, b) {
	a = a.sort((x,y)=>x-y)
	b = b.sort((x,y)=>x-y)
 return a === b
}

module.exports=deepEquals;
