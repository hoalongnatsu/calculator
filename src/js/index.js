import './general';

class Calculator {

   constructor() {
      this.displayNumber = document.querySelector('.display__number');
      this.displayResult = document.querySelector('.display__result');
      this.keyboard = document.querySelector('.keyboard');

      this.function = ['AC', 'MC', 'del', '='];
      this.functions = {
         'AC': () => {
            this.displayNumber.innerHTML = '';
            this.displayResult.innerHTML = 0;
         },
         'MC': () => {
            
         },
         'del': () => {
            this.displayNumber.innerHTML = this.displayNumber.innerHTML.trim().slice(0, -1);
         },
         '=': () => {
            try {
               this.displayResult.innerHTML = eval(this.displayNumber.innerHTML);
               this.displayNumber.innerHTML = '';
            } catch (error) {
               this.displayResult.innerHTML = 'Error';
            }
         }
      }
      this.addEventListener();
   }

   
   addEventListener() {
      this.keyboard.addEventListener('click', (e) => {
         let el = e.target, pressResult, exp;
         if (el.matches('.number')) {
            pressResult = el.dataset.keyboard;
            exp = this.displayNumber.innerHTML;
            
            if (!isNaN(+pressResult) || pressResult === '.') {
               this.displayNumber.innerHTML = exp + pressResult;
            } else if (!this.function.includes(pressResult)) {
               this.displayNumber.innerHTML = `${exp} ${pressResult} `;
            } else {
               this.functions[pressResult]();
            }
         }
      });
   }
}

new Calculator();