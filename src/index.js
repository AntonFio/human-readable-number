module.exports = function toReadable (number) {
   const numOne = {
      0: 'zero',
      1: 'one',
      2: 'two',
      3: 'three',
      4: "four",
      5: 'five',
      6: 'six',
      7: "seven",
      8: 'eight',
      9: 'nine',
      10: 'ten',
      11: 'eleven',
      12: 'twelve',
      13: 'thirteen',
      14: 'fourteen',
      15: 'fifteen',
      16: 'sixteen',
      17: 'seventeen',
      18: 'eighteen',
      19: 'nineteen',
   }

   if (number >= 20) {
      const numTwo = {
         20: 'twenty',
         30: 'thirty',
         40: 'forty',
         50: 'fifty',
         60: 'sixty',
         70: 'seventy',
         80: 'eighty',
         90: 'ninety',
      }

      const num = String(number).split('');
   if (num.length === 2) 
      if (number % 10 == 0) {
        return numOne[number];
      }else {
         if (num[0] == 2) {
            return 'twenty' + ' ' + numOne[num[1]];
         }
         if (num[0] == 3) {
            return 'thirty' + ' ' + numOne[num[1]];
         }
         if (num[0] == 4) {
            return 'forty' + ' ' + numOne[num[1]];
         }
         if (num[0] == 5) {
            return 'fifty' + ' ' + numOne[num[1]];
         }
         if (num[0] == 6) {
            return 'sixty' + ' ' + numOne[num[1]];
         }
         if (num[0] == 7) {
            return 'seventy' + ' ' + numOne[num[1]];
         }
         if (num[0] == 8) {
            return 'eighty' + ' ' + numOne[num[1]];
         }
         if (num[0] == 9) {
            return 'ninety' + ' ' + numOne[num[1]];
         }
         }
      
         if (num.length === 3)
         if (number % 100 != 0) {
             if (number % 10 === 0)
                 if (num[1] != 2) {
                     if (num[1] != 3) {
                         if (num[1] == 4) {
                             return numOne[parseInt(num[0])] + ' hundred ' + numTwo[40];
                         }
                         if (num[1] == 5) {
                             return numOne[parseInt(num[0])] + ' hundred ' + numTwo[50];
                         }
                         if (num[1] == 6) {
                             return numOne[parseInt(num[0])] + ' hundred ' + numTwo[60];
                         }
                         if (num[1] == 7) {
                             return numOne[parseInt(num[0])] + ' hundred ' + numTwo[70];
                         }
                         if (num[1] == 8) {
                             return numOne[parseInt(num[0])] + ' hundred ' + numTwo[80];
                         }
                         if (num[1] == 9) {
                             return numOne[parseInt(num[0])] + ' hundred ' + numTwo[90];
                         }
                     } else {
                         return numOne[parseInt(num[0])] + ' hundred ' + numTwo[30];
                     }
                 } else {
                     return numOne[parseInt(num[0])] + ' hundred ' + numTwo[20];
                 }
             if (num[1] == 0) {
                 return numOne[parseInt(num[0])] + ' hundred ' + numOne[num[2]];
             }
             if (num[1] == 1) {
                 if (num[2] == 0) {
                     return numOne[parseInt(num[0])] + ' hundred ' + numOne[10];
                 }
                 if (num[2] == 1) {
                     return numOne[parseInt(num[0])] + ' hundred ' + numOne[11];
                 }
                 if (num[2] == 2) {
                     return numOne[parseInt(num[0])] + ' hundred ' + numOne[12];
                 }
                 if (num[2] == 3) {
                     return numOne[parseInt(num[0])] + ' hundred ' + numOne[13];
                 }
                 if (num[2] == 4) {
                     return numOne[parseInt(num[0])] + ' hundred ' + numOne[14];
                 }
                 if (num[2] == 5) {
                     return numOne[parseInt(num[0])] + ' hundred ' + numOne[15];
                 }
                 if (num[2] == 6) {
                     return numOne[parseInt(num[0])] + ' hundred ' + numOne[16];
                 }
                 if (num[2] == 7) {
                     return numOne[parseInt(num[0])] + ' hundred ' + numOne[17];
                 }
                 if (num[2] == 8) {
                     return numOne[parseInt(num[0])] + ' hundred ' + numOne[18];
                 }
                 if (num[2] == 9) {
                     return numOne[parseInt(num[0])] + ' hundred ' + numOne[19];
                 }
             }
             if (num[1] == 2) {
                 return numOne[parseInt(num[0])] + ' hundred ' + numTwo[20] + ' ' + numOne[num[2]];
             }
             if (num[1] == 3) {
                 return numOne[parseInt(num[0])] + ' hundred ' + numTwo[30] + ' ' + numOne[num[2]];
             }
             if (num[1] == 4) {
                 return numOne[parseInt(num[0])] + ' hundred ' + numTwo[40] + ' ' + numOne[num[2]];
             }
             if (num[1] == 5) {
                 return numOne[parseInt(num[0])] + ' hundred ' + numTwo[50] + ' ' + numOne[num[2]];
             }
             if (num[1] == 6) {
                 return numOne[parseInt(num[0])] + ' hundred ' + numTwo[60] + ' ' + numOne[num[2]];
             }
             if (num[1] == 7) {
                 return numOne[parseInt(num[0])] + ' hundred ' + numTwo[70] + ' ' + numOne[num[2]];
             }
             if (num[1] == 8) {
                 return numOne[parseInt(num[0])] + ' hundred ' + numTwo[80] + ' ' + numOne[num[2]];
             }
             if (num[1] == 9) {
                 return numOne[parseInt(num[0])] + ' hundred ' + numTwo[90] + ' ' + numOne[num[2]];
             }
         } else {
             return numOne[parseInt(num[0])] + ' hundred';
         }
 } else {
     return numOne[number];
      
   }
}
