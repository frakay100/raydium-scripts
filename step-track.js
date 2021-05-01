$(document).ready(function() {
  
  /** FYI: THE SCRIPT USES THE RAYDION 60 SECOND TIMER. IF THIS STOPS THE SCRIPT WILL PAUSE **/
  /** FILTER BY REWARDS TO CLEAN RAYDIUM NOISE FROM CONSOLE **/

  let v = {}, outputs = [], isTimed;
  let startTime = new Date().getTime();
  
  setInterval(function() {

        $('.value').each(function(i, obj) {
                
                let symbol = obj.innerText.replace(/[^a-zA-Z]/g,'').replace(/[NaN]/g,'');;
                
                if (parseFloat(obj.innerText) > 0 && symbol && symbol.length > 3) {
                    
                    v[symbol] = v[symbol] || [0,0,0]; // current, previous, difference
   
                    isTimed = (symbol === 'COPE');
                    
                    // raydium page value
                    let current = parseFloat(obj.innerText);

                    v[symbol][1] = (current > v[symbol][0]) ? v[symbol][0] : (v[symbol][1])
                    v[symbol][0] = current;
                    v[symbol][2]= (v[symbol][0] - v[symbol][1]);

                    if (v[symbol][2] > 0) { 
                        for (key in v) {

                                let output  = 'REWARDS : ' + key + ' Per Minute = ' + ((v[symbol][2] === current) ? 'Waiting...' : v[symbol][2])

                                if (outputs.indexOf(output) === -1) {
                                    console.log(output)
                                    outputs.push(output)
                                } else {
                                    outputs[outputs.indexOf(output)] = output;
                                }

                              
                            }
                        }
                     }
                
                })

   }, 1000)

});
