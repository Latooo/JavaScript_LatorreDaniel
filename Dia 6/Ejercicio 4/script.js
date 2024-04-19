class BankAccount{
    constructor(account, balance){
        this.account = account
        this.balance = balance
    }

    deposit(amount){
        if (amount > 0){
            this.balance =+ amount
            console.log(`Depositado ${amount}, Nuevo balance ${this.balance}`)
            }
        else {
            console.log(`Cantidad de deposito invalida, Por favor ingrese un valor positivo`)
            }
    }


    withdraw(amount){
        if (amount > 0 && amount <= this.balance){
            this.balance -= amount
            console.log(`Retirado ${amount}. Nuevo balance ${this.balance}`)
        }
        else{
            console.log(`Retiro invalido insuficiente dinero`)
        }
  
    }
}


const account1 = new BankAccount("12345", 500)
const account2 = new BankAccount("67890", 1000)

account1.deposit(500)
account2.deposit()

account1.withdraw(200)
account2.withdraw()