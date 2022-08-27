let options = {
    title: "Menu",
    width: 100,
    height: {
        px:20
    }
  };
  
  /*
  Note the name of vairable on the left side has to be the same as that of object keys 
  else the result is undefined. But we can use : to asssign to different named variables which 
  we will discuss later
  */
  let {title, width, height} = options;
console.log(title);  // Menu
console.log(width);  // 100
console.log(height.px); // 200