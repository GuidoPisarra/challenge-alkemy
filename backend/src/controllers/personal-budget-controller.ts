import {Request , Response} from 'express';

import PersonalBudget from "../models/PersonalBudget";


export async function getBudgets (req: Request , res: Response): Promise<Response>{
    const budgets = await PersonalBudget.find();

    return res.json(budgets);
}
export async function getBudget (req: Request , res: Response): Promise<Response>{
    const { id } = req.params;
    const budget = await PersonalBudget.findById(id);   
    console.log(budget) 
    return res.json(budget);

}

export async function createBudget (req: Request , res: Response):Promise<Response>{
    const {description , amount, egress, day, month, year} =req.body;
    const newBudget = {
        description:description,
        amount: amount, 
        egress :egress,
        day:day,
        month:month,
        year:year,
    };
    const budget = new PersonalBudget (newBudget);
    await budget.save();
    return res.json({
        message:'Budget successfully saved',
        budget
    })
}

export async function deleteBudget (req: Request , res: Response):Promise<Response>{
    const { id } = req.params;
    const budget = await PersonalBudget.findByIdAndRemove(id); 
    return res.json({
        message: "Budget Deleted",
        budget
    });
}
export async function updateBudget (req: Request , res: Response):Promise<Response>{
    const { id } = req.params;
    const {description , amount , egress, day, month, year } = req.body;
    const updatedBudget = await PersonalBudget.findByIdAndUpdate(id, {
        description,
        amount,
        egress,
        day,
        month,
        year
    }, {new : true}); 
    return res.json({
        message: "Budget Updated",
        updatedBudget
    });
}


