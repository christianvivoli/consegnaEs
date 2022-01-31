var p1;
var p2;

var griglia=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41];

var giocatori=false;

function reset(){

griglia=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41];

document.getElementById("cella1").innerHTML="";
document.getElementById("cella2").innerHTML="";
document.getElementById("cella3").innerHTML="";
document.getElementById("cella4").innerHTML="";
document.getElementById("cella5").innerHTML="";
document.getElementById("cella6").innerHTML="";
document.getElementById("cella7").innerHTML="";
document.getElementById("cella8").innerHTML="";
document.getElementById("cella9").innerHTML="";
document.getElementById("cella10").innerHTML="";
document.getElementById("cella11").innerHTML="";
document.getElementById("cella12").innerHTML="";
document.getElementById("cella13").innerHTML="";
document.getElementById("cella14").innerHTML="";
document.getElementById("cella15").innerHTML="";
document.getElementById("cella16").innerHTML="";
document.getElementById("cella17").innerHTML="";
document.getElementById("cella18").innerHTML="";
document.getElementById("cella19").innerHTML="";
document.getElementById("cella20").innerHTML="";
document.getElementById("cella21").innerHTML="";
document.getElementById("cella22").innerHTML="";
document.getElementById("cella23").innerHTML="";
document.getElementById("cella24").innerHTML="";
document.getElementById("cella25").innerHTML="";
document.getElementById("cella26").innerHTML="";
document.getElementById("cella27").innerHTML="";
document.getElementById("cella28").innerHTML="";
document.getElementById("cella29").innerHTML="";
document.getElementById("cella30").innerHTML="";
document.getElementById("cella31").innerHTML="";
document.getElementById("cella32").innerHTML="";
document.getElementById("cella33").innerHTML="";
document.getElementById("cella34").innerHTML="";
document.getElementById("cella35").innerHTML="";
document.getElementById("cella36").innerHTML="";
document.getElementById("cella37").innerHTML="";
document.getElementById("cella38").innerHTML="";
document.getElementById("cella39").innerHTML="";
document.getElementById("cella40").innerHTML="";
document.getElementById("cella41").innerHTML="";
document.getElementById("cella42").innerHTML="";


}

function tunogiocatore(){

    if (giocatori == true) {
    giocatori = false;
} else {
    giocatori = true;
}

if (giocatori == true) {
    document.getElementById("p1")
    document.getElementById("p2")
} else {
    document.getElementById("p2")
    document.getElementById("p1")
}

return giocatori;
}

function vincitore(posizionecasella) {

    if (griglia[posizionecasella] == "X") {
        document.getElementById("Win").innerHTML = "Complimenti giocatore 1 hai vinto";
    } else if (griglia[posizionecasella] == "O") {
        document.getElementById("Win").innerHTML = "Complimenti giocatore 2 hai vinto";
    }
}

function pareggio() {
    var contatore = 0;
    for (var i = 0; i < 42; i++) {
        if (griglia[i] == "X" || griglia[i] == "O") {
            contatore++;
        }
    }
    if (contatore == 42) {
        document.getElementById("Win");
        document.getElementById("Win").innerHTML = "pareggio";
    }
}

function verifica(posizionecasella) {

    if (griglia[posizionecasella] == "X" || griglia[posizionecasella] == "O") {
        return true;
    }

    return false;
}


function controlli(){
    //controlli orizzontali
    
        if (grid[6] == grid[12] && grid[6] == grid[18] && grid[6]==grid[24]) { 
            vincitore(6);
        } 
        else if (grid[12] == grid[18] && grid[12] == grid[24] && grid[12]==grid[30]) { 
            vincitore(12);
        } 
        else if (grid[18] == grid[24] && grid[18] == grid[30] && grid[18]==grid[36]) { 
            vincitore(18);
        } 
        else if (grid[24] == grid[30] && grid[24] == grid[36] && grid[24]==grid[42]) { 
            vincitore(24);
        } 
        else if (grid[5] == grid[11] && grid[5] == grid[17] && grid[5]==grid[23]) { 
            vincitore(5);
        } 
        else if (grid[11] == grid[17] && grid[11] == grid[23] && grid[11]==grid[29]) { 
            vincitore(11);
        } 
        else if (grid[17] == grid[23] && grid[17] == grid[29] && grid[17]==grid[35]) { 
            vincitore(17);
        } 
        else if (grid[23] == grid[29] && grid[23] == grid[35] && grid[23]==grid[41]) { 
            vincitore(23);
        } 
        else if (grid[4] == grid[10] && grid[4] == grid[16] && grid[4]==grid[22]) { 
            vincitore(4);
        } 
       var p1;
var p2;

var griglia=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41];

var giocatori=false;

function reset(){

griglia=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41];

document.getElementById("cella1").innerHTML="";
document.getElementById("cella2").innerHTML="";
document.getElementById("cella3").innerHTML="";
document.getElementById("cella4").innerHTML="";
document.getElementById("cella5").innerHTML="";
document.getElementById("cella6").innerHTML="";
document.getElementById("cella7").innerHTML="";
document.getElementById("cella8").innerHTML="";
document.getElementById("cella9").innerHTML="";
document.getElementById("cella10").innerHTML="";
document.getElementById("cella11").innerHTML="";
document.getElementById("cella12").innerHTML="";
document.getElementById("cella13").innerHTML="";
document.getElementById("cella14").innerHTML="";
document.getElementById("cella15").innerHTML="";
document.getElementById("cella16").innerHTML="";
document.getElementById("cella17").innerHTML="";
document.getElementById("cella18").innerHTML="";
document.getElementById("cella19").innerHTML="";
document.getElementById("cella20").innerHTML="";
document.getElementById("cella21").innerHTML="";
document.getElementById("cella22").innerHTML="";
document.getElementById("cella23").innerHTML="";
document.getElementById("cella24").innerHTML="";
document.getElementById("cella25").innerHTML="";
document.getElementById("cella26").innerHTML="";
document.getElementById("cella27").innerHTML="";
document.getElementById("cella28").innerHTML="";
document.getElementById("cella29").innerHTML="";
document.getElementById("cella30").innerHTML="";
document.getElementById("cella31").innerHTML="";
document.getElementById("cella32").innerHTML="";
document.getElementById("cella33").innerHTML="";
document.getElementById("cella34").innerHTML="";
document.getElementById("cella35").innerHTML="";
document.getElementById("cella36").innerHTML="";
document.getElementById("cella37").innerHTML="";
document.getElementById("cella38").innerHTML="";
document.getElementById("cella39").innerHTML="";
document.getElementById("cella40").innerHTML="";
document.getElementById("cella41").innerHTML="";
document.getElementById("cella42").innerHTML="";


}

function tunogiocatore(){

    if (giocatori == true) {
    giocatori = false;
} else {
    giocatori = true;
}

if (giocatori == true) {
    document.getElementById("p1")
    document.getElementById("p2")
} else {
    document.getElementById("p2")
    document.getElementById("p1")
}

return giocatori;
}

function vincitore(posizionecasella) {

    if (griglia[posizionecasella] == "X") {
        document.getElementById("Win").innerHTML = "Complimenti giocatore 1 hai vinto";
    } else if (griglia[posizionecasella] == "O") {
        document.getElementById("Win").innerHTML = "Complimenti giocatore 2 hai vinto";
    }
}

function pareggio() {
    var contatore = 0;
    for (var i = 0; i < 42; i++) {
        if (griglia[i] == "X" || griglia[i] == "O") {
            contatore++;
        }
    }
    if (contatore == 42) {
        document.getElementById("Win");
        document.getElementById("Win").innerHTML = "pareggio";
    }
}

function verifica(posizionecasella) {

    if (griglia[posizionecasella] == "X" || griglia[posizionecasella] == "O") {
        return true;
    }

    return false;
}


function controlli(){
    //controlli orizzontali
    
        if (grid[6] == grid[12] && grid[6] == grid[18] && grid[6]==grid[24]) { 
            vincitore(6);
        } 
        else if (grid[12] == grid[18] && grid[12] == grid[24] && grid[12]==grid[30]) { 
            vincitore(12);
        } 
        else if (grid[18] == grid[24] && grid[18] == grid[30] && grid[18]==grid[36]) { 
            vincitore(18);
        } 
        else if (grid[24] == grid[30] && grid[24] == grid[36] && grid[24]==grid[42]) { 
            vincitore(24);
        } 
        else if (grid[5] == grid[11] && grid[5] == grid[17] && grid[5]==grid[23]) { 
            vincitore(5);
        } 
        else if (grid[11] == grid[17] && grid[11] == grid[23] && grid[11]==grid[29]) { 
            vincitore(11);
        } 
        else if (grid[17] == grid[23] && grid[17] == grid[29] && grid[17]==grid[35]) { 
            vincitore(17);
        } 
        else if (grid[23] == grid[29] && grid[23] == grid[35] && grid[23]==grid[41]) { 
            vincitore(23);
        } 
        else if (grid[4] == grid[10] && grid[4] == grid[16] && grid[4]==grid[22]) { 
            vincitore(4);
        } 
        else if (grid[10] == grid[16] && grid[10] == grid[22] && grid[10]==grid[28]) { 
            vincitore(10);
        } 
        else if (grid[16] == grid[22] && grid[16] == grid[28] && grid[16]==grid[34]) { 
            vincitore(16);
        } 
        else if (grid[22] == grid[28] && grid[22] == grid[34] && grid[22]==grid[40]) { 
            vincitore(22);
        } 
        else if (grid[3] == grid[9] && grid[3] == grid[15] && grid[3]==grid[21]) { 
            vincitore(3);
        } 
        else if (grid[9] == grid[15] && grid[9] == grid[21] && grid[9]==grid[27]) { 
            vincitore(9);
        } 
        else if (grid[15] == grid[21] && grid[15] == grid[27] && grid[15]==grid[33]) { 
            vincitore(15);
        } 
        else if (grid[21] == grid[27] && grid[21] == grid[33] && grid[21]==grid[39]) { 
            vincitore(21);
        } 
        else if (grid[2] == grid[8] && grid[2] == grid[14] && grid[2]==grid[20]) { 
            vincitore(2);
        } 
        else if (grid[8] == grid[14] && grid[8] == grid[20] && grid[8]==grid[26]) { 
            vincitore(8);
        } 
        else if (grid[14] == grid[20] && grid[14] == grid[26] && grid[14]==grid[32]) { 
            vincitore(14);
        } 
        else if (grid[20] == grid[26] && grid[20] == grid[32] && grid[20]==grid[38]) { 
            vincitore(20);
        } 
        else if (grid[1] == grid[7] && grid[1] == grid[13] && grid[1]==grid[19]) { 
            vincitore(1);
        } 
        else if (grid[7] == grid[13] && grid[7] == grid[19] && grid[7]==grid[25]) { 
            vincitore(7);
        } 
        else if (grid[13] == grid[19] && grid[13] == grid[25] && grid[13]==grid[31]) { 
            vincitore(13);
        } 
        else if (grid[19] == grid[25] && grid[19] == grid[31] && grid[19]==grid[37]) { 
            vincitore(19);
        }        
        
        //controlli verticali    
        
        else if (grid[6] == grid[5] && grid[6] == grid[4] && grid[6]==grid[3]) { 
            vincitore(6);
        } 
        else if (grid[5] == grid[4] && grid[5] == grid[3] && grid[5]==grid[2]) { 
            vincitore(5);
        } 
        else if (grid[4] == grid[3] && grid[4] == grid[2] && grid[4]==grid[1]) { 
            vincitore(4);
        } 
        else if (grid[12] == grid[11] && grid[12] == grid[10] && grid[12]==grid[9]) { 
            vincitore(12);
        } 
        else if (grid[11] == grid[10] && grid[11] == grid[9] && grid[11]==grid[8]) { 
            vincitore(11);
        } 
        else if (grid[10] == grid[9] && grid[10] == grid[8] && grid[10]==grid[7]) { 
            vincitore(10);
        } 
        else if (grid[18] == grid[17] && grid[18] == grid[16] && grid[18]==grid[15]) { 
            vincitore(18);
        }
        else if (grid[17] == grid[16] && grid[17] == grid[15] && grid[17]==grid[14]) { 
            vincitore(17);
        } 
        else if (grid[16] == grid[15] && grid[16] == grid[14] && grid[16]==grid[13]) { 
            vincitore(16);
        } 
        else if (grid[24] == grid[23] && grid[24] == grid[22] && grid[24]==grid[21]) { 
            vincitore(24);
        } 
        else if (grid[23] == grid[22] && grid[23] == grid[21] && grid[23]==grid[20]) { 
            vincitore(23);
        } 
        else if (grid[22] == grid[21] && grid[22] == grid[20] && grid[22]==grid[19]) { 
            vincitore(22);
        } 
        else if (grid[30] == grid[29] && grid[30] == grid[28] && grid[30]==grid[27]) { 
            vincitore(30);
        } 
        else if (grid[29] == grid[28] && grid[29] == grid[27] && grid[29]==grid[26]) { 
            vincitore(29);
        } 
        else if (grid[28] == grid[27] && grid[28] == grid[26] && grid[28]==grid[25]) { 
            vincitore(28);
        }
        else if (grid[36] == grid[35] && grid[36] == grid[34] && grid[36]==grid[33]) { 
            vincitore(36);
        } 
        else if (grid[35] == grid[34] && grid[35] == grid[33] && grid[35]==grid[32]) { 
            vincitore(35);
        } 
        else if (grid[34] == grid[33] && grid[34] == grid[32] && grid[34]==grid[31]) { 
            vincitore(34);
        } 
        else if (grid[42] == grid[41] && grid[42] == grid[40] && grid[42]==grid[39]) { 
            vincitore(42);
        } 
        else if (grid[41] == grid[40] && grid[41] == grid[39] && grid[41]==grid[38]) { 
            vincitore(41);
        } 
        else if (grid[40] == grid[39] && grid[40] == grid[38] && grid[40]==grid[37]) { 
            vincitore(40);
        }                                                                              
    
        //controlli obliqui
    
        else if (grid[6] == grid[11] && grid[6] == grid[16] && grid[6]==grid[21]) { 
            vincitore(6);
        }       
        else if (grid[11] == grid[16] && grid[11] == grid[21] && grid[11]==grid[26]) { 
            vincitore(11);
        }       
        else if (grid[16] == grid[21] && grid[16] == grid[26] && grid[16]==grid[31]) { 
            vincitore(16);
        } 
        else if (grid[5] == grid[10] && grid[5] == grid[15] && grid[5]==grid[20]) { 
            vincitore(5);
        }       
        else if (grid[10] == grid[15] && grid[10] == grid[20] && grid[10]==grid[25]) { 
            vincitore(10);
        }       
        else if (grid[4] == grid[9] && grid[4] == grid[14] && grid[4]==grid[19]) { 
            vincitore(4);
        }  
        else if (grid[12] == grid[17] && grid[12] == grid[22] && grid[12]==grid[27]) { 
            vincitore(12);
        }     
        else if (grid[17] == grid[22]&& grid[17] == grid[27] && grid[17]==grid[32]) { 
            vincitore(17);
        }
        else if (grid[22] == grid[27]&& grid[22] == grid[32] && grid[22]==grid[37]) { 
            vincitore(22);
        }
        else if (grid[18] == grid[23] && grid[18] == grid[28] && grid[18]==grid[33]) { 
            vincitore(18);
        }   
        else if (grid[23] == grid[28] && grid[23] == grid[33] && grid[23]==grid[38]) { 
            vincitore(23);
        }   
        else if (grid[24] == grid[29] && grid[24] == grid[34] && grid[24]==grid[39]) { 
            vincitore(24);
        }   
    
        else {
            pareggio();
        }
    }




function inserisci1(){
    for(var i=1;i<42;i=i+7){
        if(verifica(i)==false){
            xo(i);
        }
    }

}

function xo(i){
    for(var i=1;i<42;i++){
       if(verifica(i)==false){
            grid[i]="x";
       }
    }
}