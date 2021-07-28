import { Schema , model , Document } from 'mongoose';


const schema = new Schema ({
    description : String ,
    amount : Number,
    egress : Boolean,
});

interface IBudget extends Document {
    description : string ;
    amount : number;
    egress : boolean;
}

export default model <IBudget>('personal-budget', schema);