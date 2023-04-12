
let pronoun = ['the','our','da'];
  let adj = ['great', 'big','horrible','blasted' ];
  let Noun = ['jogger','racoon','human','alliance'];
  let Domain = ['.com', '.io','.net','.tk','.us,']  

pronoun.forEach(function(ProF){
    adj.forEach(function(adjF){
        Noun.forEach(function(NounF){
            Domain.forEach(function(DomainF){
          console.log(ProF + "" + adjF + "" + NounF + "" + DomainF);
        });
      });
    });
  });

//   First tests

// let randomPronoun = Math.floor(Math.random() * pronoun.length); 
// let PronounIndex = pronoun[randomPronoun];

// let randomadj = Math.floor(Math.random() * adj.length); 
// let adjIndex = adj[randomadj];

// let randomNoun = Math.floor(Math.random() * Noun.length); 
// let NounIndex = Noun[randomNoun];

// let randomDomain = Math.floor(Math.random() * Domain.length); 
// let DomainIndex = Domain[randomDomain];



// console.log(PronounIndex + "" + adjIndex + "" + NounIndex + "" + DomainIndex)

// const merged = [].concat = [PronounIndex, adjIndex, NounIndex, DomainIndex];
// console.log(merged);