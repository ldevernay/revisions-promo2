
/*Kata : développer un nombre

    Rédigez une fonction expandedForm qui écrive un nombre sous sa forme développée.

    **Exemple **:

      expandedForm(12); // Should return '10 + 2*1'
      expandedForm(42); // Should return '4*10 + 2*1'
      expandedForm(70304); // Should return '7*10000 + 3*100 + 4*1' */


function expandedForm(nbr) {
    var array = [];
    var str = nbr.toString();
    var puissance = str.length - 1;
    for (i = 0; i < str.length; i++) {
        if (str[i] != 0) {
            if (str[i] != 1) {
                array.push(str[i] + "*" + Math.pow(10, puissance - i))
            } else {
                array.push(Math.pow(10, puissance - i).toString())
            }
        }

    }
    console.log(array.join(" + "));
}
expandedForm(71304);