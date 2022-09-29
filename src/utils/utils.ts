export function compareDate(date: string): number {
  const current = new Date().getTime();
  const target = new Date(date);
  const year = target.getMonth() > new Date().getMonth() ? '2022' : '2023';
  const result = current - (new Date(`${year}-${target.getMonth() + 1}-${target.getDate()}`).getTime());
  return result;
};

export  function compareSearch(firstName: string, lastName: string, userTag: string, searchString: string): boolean {
  let text = searchString.trim();
   return firstName.toLowerCase().includes(text) ||
   lastName.toLowerCase().includes(text) ||
   userTag.toLowerCase().includes(text);
};

export function phoneNumber(number: string | undefined): string | null {
  if (number) {
    const numberWithoutSpace = number.replace(/\s/g, "");
  
    const joinNum = (splitNum: Array<string>) => {
      splitNum[1] = splitNum[1] + " (";
      splitNum[4] = splitNum[4] + ") ";
      splitNum[7] = splitNum[7] + " ";
      splitNum[9] = splitNum[9] + " ";
      return splitNum.join("");
    };
    
    if (numberWithoutSpace.length === 11 && /\d/g.test(numberWithoutSpace) && /^(8|7)/.test(numberWithoutSpace)) {
      const num = numberWithoutSpace.replace(/^(8|7)/, "+7");
      return joinNum(num.split(""));
    };
  
    if (numberWithoutSpace.length === 12 && /^\+\d{11}/.test(numberWithoutSpace)) {
      const num = numberWithoutSpace.replace(/^\+\d/, "+7");  
      return joinNum(num.split(""));
    };

    return number;
  };

  return null;
};

export function convertDate(str: string | undefined): string | null {
  if (str) {
    const date = new Date(str);
    const monthes = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    return `${date.getDate()} ${monthes[date.getMonth()]} ${date.getFullYear()}`;
  };
  return null;
};

export function calcAge(dateBirth: string | undefined): string | null {
  if (dateBirth) {
    const date = new Date(dateBirth);
    const current = new Date();
    const year = current.getFullYear() - date.getFullYear();
    const month = current.getMonth() - date.getMonth();
    const day = current.getDate() - date.getDate();
    let age = 0;
  
    if (month >= 0 && day >= 0) {
      age = year;
    } else {
      age = year - 1;
    }
  
    function changeWord(age: number): string {
      const words = ['год', 'года', 'лет'];
      const indexArray = [2, 0, 1, 1, 1, 2];
      let index = 0;
  
      if (age % 100 > 4 && age % 100 < 20) {
        index = 2;
      } else if (age % 10 < 5) {
        index = indexArray[age % 10];
      } else {
        index = indexArray[5];
      }
      return words[index];
    };
  
    return `${age} ${changeWord(age)}`;
  };
  return null;
}