import mongoose from 'mongoose';

const Connection = async (username = 'khushbu', password = '9929343638') => {
    const URL = `mongodb://${username}:${password}@ac-i1apg64-shard-00-00.rc7ll9q.mongodb.net:27017,ac-i1apg64-shard-00-01.rc7ll9q.mongodb.net:27017,ac-i1apg64-shard-00-02.rc7ll9q.mongodb.net:27017/DOCS?ssl=true&replicaSet=atlas-3vyyv2-shard-0&authSource=admin&retryWrites=true&w=majority`;

   try{
     await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
     console.log('Database connected succesfully');
   } catch (error){
       console.log('Error while connecting with the database ', error);
   }
}

export default Connection;