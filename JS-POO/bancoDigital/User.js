const deposits = [];
const transfers = [];
const users = [];

class UserBank {
  accountBalance = 0;

  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.accountNumber = Math.floor(Math.random() * 900000) + 100000;

    const checkEmail = users.forEach((user) => {
      if (user.email == this.email) {
        throw new Error("This email is already in use");
      }
    });

    users.push(this);
  }

  deposit(money) {
    if (money < 0) {
      throw new Error("Error, deposit must be bigger than 0");
    }
    this.accountBalance += money;
    const currentDate = new Date();
    const day = currentDate.getDay().toString().padStart(2, '0');
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0')
    const year = currentDate.getFullYear();
    const hour = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');

    const formattedDate = `${month}/${day}/${year} ${hour}:${minutes}`;
    const depositReport = {
      name: this.name,
      accountNumber: this.accountNumber,
      depositedMoney: money,
      depositDate: formattedDate,
    };
    deposits.push(depositReport);
  }

  transfer(targetUser, valueToDeposit) {
    if (this.accountBalance < valueToDeposit) {
      throw new Error(
        "Error, your accountBalance must be bigger or equals than valueToDeposit"
      );
    }
    this.accountBalance -= valueToDeposit;
    targetUser.accountBalance += valueToDeposit;
    const currentDate = new Date();
    const day = currentDate.getDay().toString().padStart(2, '0');
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0')
    const year = currentDate.getFullYear();
    const hour = currentDate.getHours().toString().padStart(2, '0');
    const minutes = currentDate.getMinutes().toString().padStart(2, '0');

    const formattedDate = `${month}/${day}/${year} ${hour}:${minutes}`;
    const transferReport = {
      sendersName: this.name,
      recipientsName: targetUser.name,
      transferredValue: valueToDeposit,
      transferDate: formattedDate,
    };
    transfers.push(transferReport);
  }
}

const lucas = new UserBank("Lucas", "lucaspio.galvao@gmail.com");
const matheus = new UserBank("Matheus", "matheus.silva@outlook.com");

lucas.deposit(10000);
matheus.deposit(520);

lucas.transfer(matheus, 300);

console.table(transfers);
console.table(deposits);
