import mongoose from 'mongoose';



export async function startConnection(){
  const db =await mongoose.connect('mongodb://localhost/photo-gallery-db',{
        useNewUrlParser:true
    });
    console.log("database connected");
}



