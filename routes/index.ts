import {Router} from 'express';


const router =Router();
import {createBudget, getBudgets}   from '../src/controllers/personal-budget-controller';


router.route('/budgets')
    .post (createBudget)
    .get(getBudgets)


export default router;