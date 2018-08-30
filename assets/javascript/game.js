var techArr = ['cybersecurity','domain','encryption','framework','compression','javascript','python','windows','wireless','macintosh']
        var userGuess =[]
        var correctGuess= []
        var resetButton = document.getElementById('resetButton')
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
            document.getElementById('hiddenGuess').innerHTML = "--"+wordToGuess+"--";
            userGuess = [];
            document.getElementById('displayedGuess').innerHTML = userGuess;
            
            wordToGuess = techArr[Math.floor(Math.random() * techArr.length)]
            resetButton.style.visibility = "visible";
            document.getElementById("instructions").innerHTML = "<h1>You cracked the code!<h1>";
            
        }
       
 
        if(userGuess.length >= 10){
            
                        
            
                        
            document.getElementById('displayedGuess').innerHTML = userGuess;
            
            wordToGuess = techArr[Math.floor(Math.random() * techArr.length)]
            document.getElementById("instructions").innerHTML = "<h1>Too many failed Attempts!<h1>";
            resetButton.style.visibility = "visible";
            document.getElementById('hiddenGuess').style.visibility = "hidden";
            document.getElementById('displayedGuess').style.visibility = "hidden";
           
        }
       
        
    }
        
    document.getElementById('resetButton').onclick = function(){
        resetButton.style.visibility = "hidden";
        document.getElementById("instructions").innerHTML = "<h1>Crack The Code! <br> Press any key to start!</h1>";
       
            
            hiddenGuess = wordToGuess.replace(/./g, '-');
            document.getElementById('hiddenGuess').innerHTML = hiddenGuess;
            correctGuess= []
            userGuess = [];
            document.getElementById('displayedGuess').innerHTML = userGuess;
            document.getElementById('hiddenGuess').style.visibility = "visible";
            document.getElementById('displayedGuess').style.visibility = "visible";
          
    };
    

   
//create array of words to guess
//start game when you press key
//choose random word from list
//record keystroke and check if its in word
//if its in word, reveal letters
//if not, record letter and lose one point from chances
//if chances at 0, game over
//if word is complete add  one point to score
