function flames() {
    var result = document.getElementById("result");
    var a = document.getElementById("name1").value.toLowerCase();
    var b = document.getElementById("name2").value.toLowerCase();

    a = a.replace(" ","") 
    // in build function for ( "Ajith Kumar" --> "AjithKumar" )
    b = b.replace(" ","") 
    // in build function for ( "Shalini" --> "Shalini" )
   

    if (a != "" && b != "") {

// for loop for replacing the same character with " * "

        for (i = 0; i < a.length; i++) {
            for (j = 0; j < b.length; j++) {
                if (a[i] == b[j]) {
                    a = replaceAt(a, i, '*');
                    b = replaceAt(b, j, '*');
                }
            }
        }


        var countLetters = 0;
        for (i = 0; i < a.length; i++) {   // a = "*j*t*Kumar"
            if (a[i] != '*') {
                countLetters++;
            }
        }
        for (i = 0; i < b.length; i++) {   // b = "S**l*ni"
            if (b[i] != '*') {
                countLetters++;
            }
        } //countLetters = 11
      
        if (countLetters == 1) {
            flames = "Sibling";
            bgChanger(flames);
        }

        if (countLetters == 0) {
            flames = "Its Same Name !!!";
        }

        if (countLetters > 1) {
            var flames = "FLAMES";
            c = 0;
            l = 1;
            while(flames.length != 1) {
                if (l == countLetters)  
                    {
                    if (c >= flames.length) {
                        c = 0;
                    }

                    flames = replaceAt(flames, c, ''); //removing the c'th index of "FLAMES"
                    l = 1;
                }

                if (c >= flames.length)
                {
                    c = 0;
                }
                l++;
                c++;
            }
            

            switch (flames) {
                case 'F':
                    flames = "Friend";
                    bgChanger(flames);
                    break;
                case 'L':
                    flames = "Love";
                    bgChanger(flames);
                    break;
                case 'A':
                    flames = "Affection";
                    bgChanger(flames);
                    break;
                case 'M':
                    flames = "Marriage";
                    bgChanger(flames);
                    break;
                case 'E':
                    flames = "Enemies";
                    bgChanger(flames);
                    break;
                case 'S':
                    flames = "Sibling";
                    bgChanger(flames);
                    break;
            }
        }

        var crush = document.getElementById("name2").value;
       
        result.innerHTML = "<b style='color:blue;'>" + crush + "</b> is Your <b style='color:red;'>" + flames + "</b>";
    } 
    
    else {
        result.innerHTML = "Please Enter Name";
    }
}


//for replacing * symbol
function replaceAt(string, index, replace) {
    var str =  string.substring(0, index) + replace + string.substring(index + 1);
    return str;
   }


//Background changer function

function bgChanger(result) {
    const backgrounds = {
        Friend: "url('./assets/friend.jpeg')",
        Love: "url('./assets/love.jpeg')",
        Affection: "url('./assets/affection.jpeg')",
        Marriage: "url('./assets/marriage.jpeg')",
        Enemies: "url('./assets/enemy.jpeg')",
        Sibling: "url('./assets/siblings.jpeg')"
    }
    var body = document.querySelector("body");
    body.style.backgroundImage = backgrounds[result];
    body.style.backgroundSize = "cover"; // Makes the image cover the entire background
    body.style.backgroundRepeat = "no-repeat"; // Prevents the image from repeating
    body.style.backgroundPosition = "center"; // Centers the image
}





