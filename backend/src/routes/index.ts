import {Router} from 'express';


const router =Router();
import {createBudget, getBudgets, getBudget, deleteBudget , updateBudget}   from '../controllers/personal-budget-controller';


router.route('/budgets')
    .get(getBudgets)
    .post (createBudget)
    
router.route('/budgets/:id')
    .get(getBudget)
    .delete(deleteBudget)
    .put(updateBudget)
router.route('/users/signin')

router.route('/users/signup')





export default router;