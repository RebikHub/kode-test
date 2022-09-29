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