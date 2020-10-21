/*

Mongoose - MySQL
Schema = models, database for each website (bukan kot)
       = table (SQL)

1 schema = 1 table?

model 1 --- * documents?
(1 to many)


// Define schema
var Schema = mongoose.Schema;

var SomeModelSchema = new Schema({
  a_string: String,
  a_date: Date
});

// Compile model from schema
var SomeModel = mongoose.model('SomeModel', SomeModelSchema );

define schema > put fields > compile into model > can CRUD already


schema 1 --- * fields

document = 1 row of table as in SQL
every document has a unique id

1 model = 1 table?

schema = table?
NEXT
Working with related documents — population

mongodb+srv://sora2ta:sembilan@cluster0.9ecqa.gcp.mongodb.net/local_library?retryWrites=true&w=majority
*/