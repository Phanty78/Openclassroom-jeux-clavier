
let score = 0
let motTapeUtilisateur = ""
let choixUtilisateur = ""
let nbrBoucle = 0

function afficherResultat(score,nbrElementAfficher){
    let phraseResultat = "Votre score est de " + score + " sur " + nbrElementAfficher
    return phraseResultat
 }

 function choisirPhrasesOuMots(){
    let niveauChoisit = ""
    while (niveauChoisit !== "mots" && niveauChoisit !=="phrases"){
        niveauChoisit = prompt("Tapez mots ou phrases")
    }  
    return niveauChoisit
 }

 function lancerBoucleDeJeu(choixUtilisateur){
    if (choixUtilisateur === "mots") {
        for (let i=0; i < listeMots.length; i++){
            motTapeUtilisateur = prompt("Ecrivez le mot :" + listeMots[i])
        
            if (motTapeUtilisateur === listeMots[i]) {
                score ++
            }   
            nbrBoucle ++
        }
        console.log(afficherResultat(score,nbrBoucle))
    }else if(choixUtilisateur === "phrases"){
        for (let i=0; i < listePhrases.length; i++){
            motTapeUtilisateur = prompt("Ecrivez la phrase :" + listePhrases[i])
        
            if (motTapeUtilisateur === listePhrases[i]) {
                score ++
            }   
            nbrBoucle ++
        }
        console.log(afficherResultat(score,nbrBoucle))
    }
    return score
 }

 function lancerJeu(){
    lancerBoucleDeJeu(choisirPhrasesOuMots())
 }




