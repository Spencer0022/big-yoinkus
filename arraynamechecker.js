let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  const isEveryoneHere=obj=> {
 return ['Alan','Jeff','Sarah','Ryan'].every(num=>obj.hasOwnProperty(num));

}
  console.log(isEveryoneHere(users));