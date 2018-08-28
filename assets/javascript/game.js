

        var techArr = ['cybersecurity','domain','encryption','framework','compression','javaScript','python','windows','wireless','macintosh']
        var userGuess =[]
        var correctGuess= []
        var displayedGuess = document.getElementById('displayedGuess')
        var wordToGuess = techArr[Math.floor(Math.random() * techArr.length)]
        document.getElementById('displayedGuess').innerHTML = userGuess;
        var hiddenGuess = wordToGuess.replace(/./g, '-');
        document.getElementById('hiddenGuess').innerHTML = hiddenGuess;
        function replaceAt(string, index, replace) {
      return string.substring(0, index) + replace + string.substring(index + 1);
                       }
        
    document.onkeypress = function(event) {
      
        
        var key = event.key

        
        
       


       
       if(userGuess.indexOf(key) == -1 && wordToGuess.indexOf(key) == -1 && hiddenGuess.indexOf(key) == -1){
        userGuess.push(key)
        document.getElementById('displayedGuess').innerHTML = userGuess;
            
        }
        else{
            correctGuess.push(key)
            for(var i = 0; i<wordToGuess.length; i++){
                if(wordToGuess[i]==key){
                    hiddenGuess = replaceAt(hiddenGuess, i, key); 
                    document.getElementById('hiddenGuess').innerHTML = hiddenGuess;
                    
            
                }
            }
           
        }

        

        if(wordToGuess == hiddenGuess){
            document.getElementById('hiddenGuess').innerHTML = wordToGuess;
            userGuess = [];
            document.getElementById('displayedGuess').innerHTML = userGuess;
            alert('you win');
            wordToGuess = techArr[Math.floor(Math.random() * techArr.length)]
            hiddenGuess = wordToGuess.replace(/./g, '-');
            document.getElementById('hiddenGuess').innerHTML = hiddenGuess;
        }
       
 

        if(userGuess.length == 10){
            
            userGuess = [];
            document.getElementById('displayedGuess').innerHTML = userGuess;
            
            wordToGuess = techArr[Math.floor(Math.random() * techArr.length)]
            hiddenGuess = wordToGuess.replace(/./g, '-');
            document.getElementById('hiddenGuess').innerHTML = hiddenGuess;
            correctGuess= []
            userGuess =[]
            alert('you lose');
        }
        
    }
    

   
//create array of words to guess
//start game when you press key
//choose random word from list
//record keystroke and check if its in word
//if its in word, reveal letters
//if not, record letter and lose one point from chances
//if chances at 0, game over
//if word is complete add  one point to score



