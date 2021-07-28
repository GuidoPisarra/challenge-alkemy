import {Request , Response} from 'express';


export function getBudgets (req: Request , res: Response){

}


export function createBudget (req: Request , res: Response){
    console.log('guarda');


    return res.json({
        message:'Budget successfully saved'
    })
}

