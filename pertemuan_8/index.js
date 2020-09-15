/*
    1.Buat dengan nama account dengan 2 properti 
*/

let account = 
{
    Nama: "Angelina",
    Expenses: [],

/*
    2. Function dengan nama addExpenses()
*/
    addExpense: function (description, amount)
    {
        this.Expenses.push ({"description" : description, "amount": amount});
    },
/*
    3. function dengan nama getAccountSummary()
*/
    getAccountSummary : function ()
        {
        let totalExpenses = 0;
        this.Expenses.forEach (function(el)
            {
            totalExpenses = totalExpenses + el.amount;
            });

        return totalExpenses;
        }
};
/*
    4.Panggil fungsi addExpenses dan getAccountSummary
*/
account.addExpense ( "Beli Pakaian" , 10000);
account.addExpense ("Beli Sepatu", 75000);
account.addExpense ("Beli Makanan", 20000);
console.log ("Total pengeluaran " + account.Nama + " adalah Rp" + account.getAccountSummary());