function isBirthdayValid(birthdayDate) {
    const nowDate = new Date();
    const nowYears = nowDate.getFullYear();
    const nowMonth = nowDate.getMonth();
    const nowDays = nowDate.getDate();
  
    const user = new Date(birthdayDate);
    const userYears = user.getFullYear();
    const userMonth = user.getMonth();
    const userDays = user.getDate();
  
    return (
      nowYears - userYears >= 14 && nowMonth >= userMonth && nowDays >= userDays
    );
  }
  
  console.log(isBirthdayValid("2022-01-01"));