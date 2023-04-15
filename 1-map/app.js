const persons = [
    { id: 1, name: "Вася" },
    { id: 2, name: "Петя" },
    { id: 1, name: "Вася" },
  ];

  function getUniqPersons (arr){
    const arrString = arr.map(item => JSON.stringify(item))
    const arrSet = new Set(arrString)
    return [...arrSet].map(item => JSON.parse(item))
  }
  console.log(new Set(getUniqPersons(persons)));
  
