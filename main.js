nomeAlunoArray = [];

function buttonEnviar(){
    var name1 = document.getElementById("nomeAluno1").value;
    var name2 = document.getElementById("nomeAluno2").value;
    var name3 = document.getElementById("nomeAluno3").value;
    var name4 = document.getElementById("nomeAluno4").value;
    var name5 = document.getElementById("nomeAluno5").value;

    nomeAlunoArray.push(name1);
    nomeAlunoArray.push(name2);
    nomeAlunoArray.push(name3);
    nomeAlunoArray.push(name4);
    nomeAlunoArray.push(name5);

    console.log(nomeAlunoArray);
    
    document.getElementById("displayName").innerHTML = nomeAlunoArray;
    document.getElementById("submit").style.display = "none";
    document.getElementById("sortButton").style.display = "inline-block";
}

function sorting() {
    nomeAlunoArray.sort();
    console.log(nomeAlunoArray);
    document.getElementById("displayName").innerHTML = nomeAlunoArray;
}