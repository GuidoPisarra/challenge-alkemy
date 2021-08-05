import { Schema , model , Document } from 'mongoose';

const schema = new Schema ({
    description : String ,
    amount : Number,
    egress : Boolean,
    day : Number ,
    month : Number,
    year  : Number

});

interface IBudget extends Document {
    description : string ;
    amount : number;
    egress : boolean;
    day : number ;
    month: number;
    year: number;
}

export default model <IBudget>('personal-budget', schema);