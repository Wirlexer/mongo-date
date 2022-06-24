var mongoose = require('mongoose');
var Author = require('./author');
var Book = require('./book');
 
mongoose.connect('mongodb://localhost/mongoose_basics', function (err) {
    if (err) throw err;
     
    console.log('Успешно подключено');
     
    var justAuthor = new Author({
        _id: new mongoose.Types.ObjectId(),
        name: {
            firstName: 'Александр',
            lastName: 'Пушкин'
        },
        biography: 'Поэт, писатель',

    });
 
    justAuthor.save(function(err) {
        if (err) throw err;
         
        console.log('Автор успешно сохранён');
         
        var mvcBook = new Book({
            _id: new mongoose.Types.ObjectId(),
            title: 'Книга 1',
            author: justAuthor._id,
            ratings:[{
                summary: 'Резюме'
            }]
        });
         
        mvcBook.save(function(err) {
            if (err) throw err;
         
            console.log('Книга 1 успешно сохранена');
        });
         
        var knockoutBook = new Book({
            _id: new mongoose.Types.ObjectId(),
            title: 'Книга 2',
            author: justAuthor._id
        });
         
        knockoutBook.save(function(err) {
            if (err) throw err;
         
            console.log('Книга 2 успешно сохранена');
        });
    });
});