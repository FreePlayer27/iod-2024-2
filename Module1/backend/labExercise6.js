const book = {
    "title" : "Lorg of the Rings",
    "description" : "Finction",
    "author" : "Tolkien",
    "Number_of_pages" : 987
    }

    function printMemeber(instance, name){
        console.log(name + " = " + instance[name]);
    }

    printMemeber(book, "title");
    printMemeber(book, "description");
    printMemeber(book, "author");
    printMemeber(book, "Number_of_pages");

    
    console.log(book);


    book.title = "Dune";
    book.description = "Finction";
    book.author = "Frank Gerbert";
    book.Number_of_pages = "300";
    

    printMemeber(book, "title");
    printMemeber(book, "description");
    printMemeber(book, "author");
    printMemeber(book, "Number_of_pages");
    
    console.log(book);


    let books = new Array;

    for (let i = 0; i < 5; i++)    {
        books.push(book);
    }

    console.log(books);