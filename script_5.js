const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33},
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];

  console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?")
  let i = 0
  books.forEach(book => {if (book.rented == 0) {i++}})
    if(i == 0){
        console.log("tous les livres ont deja ete emprunté au moins une fois")
    }
    else{
        console.log("Un luvre n'a jamais ete emprunté")
    }   
    
    console.log(" ")

    console.log("Quel est livre le plus emprunté ?")

    books.sort(function(a,b) {
        if (a.rented > b.rented)
            return -1
        else if (a.rented < b.rented)
            return 1
    })
    console.log(`le book le plus emprunté est ${books[0].title}`)



    console.log(" ")

    console.log("Quel est livre le moins emprunté ?")

    books.sort(function(a,b) {
        if (a.rented > b.rented)
            return 1
        else if (a.rented < b.rented)
            return -1
    })
    console.log(`le book le moins emprunté est ${books[0].title}`)

    console.log(" ")

    console.log(books.find(book => book.id === 873495))

    console.log(" ")

    for (let i in books) {
        if (books[i].id === 133712) {
          books.splice(i, 1);
        }
      }
    console.log(books)

    console.log(" ")

    function compare(a,b){
        const LastA = a.title.toUpperCase()
        const LastB = b.title.toUpperCase()

        let comparisson = 0
        if (LastA > LastB){
            return comparisson = 1
        } 
        else if (LastA < LastB){
            return comparisson = -1
        }
    }
    console.log(books.sort(compare))