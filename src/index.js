module.exports = function toReadable (number) {
let result='';  
switch (~~(number/100)) {
    case 0:
      result = '';
      break;
    case 9:
      result = 'nine hundred';
      break;
    case 8:
        result = 'eight hundred';
      break;
    case 7:
        result = 'seven hundred';
    break;
    case 6:
        result = 'six hundred';
      break;
    case 5:
        result = 'five hundred';
      break;
    case 4: 
        result = 'four hundred';
    break;
    case 3:
        result = 'three hundred';
      break;
    case 2:
        result = 'two hundred';
      break;
    case 1:
        result = 'one hundred';      
       }
if ((number>99)&&(number%100)!=0){result=result+' '}  
switch (~~((number%100)/10)) {
    case 9:
      result = result+'ninety';
      break;
    case 8:
        result = result+'eighty';
      break;
    case 7:
        result = result+'seventy';
      break;
    case 6:
        result = result+'sixty';
      break;
    case 5:
        result = result+'fifty';
      break;
    case 4:
        result = result+'forty';
      break;
    case 3:
        result = result+'thirty';
      break;
    case 2:
        result = result+'twenty';
      break;
    case 1:
      {switch ((number%100)) {
        case 10:
          result = result+'ten';
          break;
        case 11:
            result = result+'eleven';
          break;
        case 12:
            result = result+'twelve';
        break;
        case 13:
            result = result+'thirteen';
          break;
        case 14:
            result = result+'fourteen';
          break;
        case 15:
            result = result+'fifteen';
        break;
        case 16:
            result = result+'sixteen';
          break;
        case 17:
            result = result+'seventeen';
          break;
        case 18:
            result = result+'eighteen';
        break;
        case 19:
            result = result+'nineteen';
        break;}
    }
}    
if((~~((number%100)/10))!=1){  
    if (((number%100)>20)&&(~~((number%100)/10)!=0)&&((number%10)!=0)){result=result+' '}     
    switch ((number%10)) {
        case 9:
          result = result+'nine';
          break;
        case 8:
            result = result+'eight';
          break;
        case 7:
            result = result+'seven';
        break;
        case 6:
            result = result+'six';
          break;
        case 5:
            result = result+'five';
          break;
        case 4:
            result = result+'four';
        break;
        case 3:
            result = result+'three';
          break;
        case 2:
            result = result+'two';
          break;
        case 1:
            result = result+'one';
        break;
          }     
        } 
if(number==0){result='zero';}
return result;
  
}
