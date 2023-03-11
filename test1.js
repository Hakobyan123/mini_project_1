function calculate() {
    TextFromInput = document.getElementById("text").value;
    //letters
    TextArray = TextFromInput.split("");
    document.getElementById("resultLetters").innerHTML = TextArray.length;
//Words   
arrForWords = TextFromInput.split(" ");
Words = [];
arrForWords.forEach((value) => {
   str = value / 1;
   if (Number.isNaN(str)) {
      Words.push(value);
   }
});
document.getElementById("resultWords").innerHTML = Words.length;
}