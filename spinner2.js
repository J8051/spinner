let animationArray =['\r|   ', '\r/   ','\r-   ','\r\\   ','\r|   '];
let spin = function(arr) { 
  arr.push("\n"); 
  let time = 100; 
  for(let elements of arr) { 
    setTimeout(() => { 
      process.stdout.write(elements);
    }, time);
    time += 200; 
  }
}
console.log(spin(animationArray)); 








