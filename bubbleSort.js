function sort(nums) {
    let placeHolder = 0
    let didSwapHappen = false
    let iterations = 0
    do{
      didSwapHappen =false
      for(i=0; i<nums.length-iterations; i++){
        if(nums[i] > nums[i+1]){
          placeHolder = nums[i];
          nums[i] = nums[i+1];
          nums[i+1] = placeHolder;
          didSwapHappen = true
        }
      }
  
      
    }while(didSwapHappen)
  }