const obj = { 
  get es7() { return 777; },
  get es8() { return 888; }
};
Object.getOwnPropertyDescriptors(obj);