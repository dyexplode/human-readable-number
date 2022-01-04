let unitsArray = ['zero','one','two','three','four','five','six','seven','eight','nine'];
let onedozenArray = ['ten', 'eleven', 'twelve','thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
let dozensArray = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

const getUnits = (num) => {   
    return unitsArray[num];
}
const getDozens = (num) => {
    if (num < 10) {
        return getUnits(num);
    } else if (num < 20){
      return onedozenArray[num - 10];
  } else {
      return `${dozensArray[Math.floor(num/10)-1]}${(num%10) == 0 ? '':' '+ getUnits(num%10)}`;
  }
}

module.exports = function toReadable (number) {

if (number<10){
    return getUnits(number);
    }else if (number < 100){
        return getDozens(number);
        }else{
          return `${getUnits(number.toString()[0])} hundred${number%100 == 0 ? '' : ' '+ getDozens(number%100)}`;
  };
};


