function perform(anyMethod,wrappers){
  
}

perform(function(){
  console.log('say')
},[{
  initialize(){
    console.log('besay1')
  },
  close(){
    console.log('close1')
  }
},{
  initialize(){
    console.log('besay2')
  },
  close(){
    console.log('close2')
  }
}])