const fs=require("fs");
const path=require("path");
const filePath=path.join(__dirname,"expenses.join");
function readExpenses(){
    try{
        const data=fs.readFileSync(filePath,"utf-8");
        const expenses=JSON.parse(data);
        if(!Array.isArray(expenses)){
            throw new Error("Expense data must be an array.");
        }
        return expenses;
    }catch(error){
        if(error.code==="ENOENT"){
            fs.writeFileSync(filePath,"[]");
            return [];
        }
        throw error;

    }
}
function saveExpenses(expenses){
    fs.writeFileSync(filePath,JSON.stringify(expenses,null,2));
}

// Add an expense
function addExpense(amount,category,description){
    if(!Number.isFinite(amount) || amount<=0){
        console.log("Amount must be positive number.");
        return;
    }
    if(!category || !description){
        console.log("Category and description are required.");
        return;
    }
    const expenses=readExpenses();
    const expense={
        id:Date.now().toString(),
        amount,
        category,
        description
    };
    expenses.push(expense);
    saveExpenses(expenses);
}

//List an Expense
function listExpenses(){
    const expenses=readExpenses();
    if(expenses.length===0){
        console.log("No expenses Found.");
        return;
    }
    for(const expense of expenses){
        console.log(
            `ID:${expense.id} | ` +
            `Amount:${expense.amount.toFixed(2)} | ` +
            `Category:${expense.category} | ` +
            `Description:${expense.description} | `
        );
    }
}

//delete an expense
function deleteExpense(id){
    const expenses=readExpenses();
    const updatedExpenses=expenses.filter(
        expense=>expense.id!==id
    );
    if(updatedExpenses.length===expenses.length){
        console.log("Expense ID not found.");
        return;
    }
    saveExpenses(updatedExpenses);
    console.log("Expense deleted successfully!");
}

//Total of an expense
function showTotal(){
    const expenses=readExpenses();
    const total=expenses.reduce(
        (sum,expense)=>sum+expense.amount,
        0
    );
    console.log(`Total Expenses:${total.toFixed(2)}`);
}
function showHelp() {
    console.log(`
        Expense Tracker CLI
        Commands:
        node app.js add <amount> <category> <description>
        node app.js list
        node app.js delete <id>
        node app.js total
    `);
}
function main(){
    const[, , command, ...args]=process.argv;
    switch(command){
        case "add":{
            const [amountText,category, ...descriptionParts]=args;
            const amount=Number(amountText);
            const description=descriptionParts.join(" ");
            addExpense(amount,category,description);
            break;
        }
        case "list":
            listExpenses();
            break;
        case "delete":
            if(!args[0]){
                console.log("please provide an expense ID.");
                return;
            }
            deleteExpense(args[0]);
            break;
        case "total":
            showTotal();
            break;
        default:
            showHelp();
        
    }
}
try{
    main();
}catch(error){
    console.log("Error:",error.message);
    process.exitCode=1;
}