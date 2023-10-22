class User {
    constructor(fullname, email, password) {
      this.fullname = fullname;
      this.email = email;
      this.password = password;
    }
  
    verifyLogin(email, password) {
      if (this.email === email && this.password === password) {
        return console.log("Login aprovado");
      }
      console.log("Login reprovado");
    }
  }
  
  const lucasPio = new User('Lucas Pio', 'lucaspio.galvao@gmail.com', '&Redinh0$')
  
  const randomUser = new User('Jorge', 'jorgehenrique.pimba@gmail.com', 'senha123')
  
  lucasPio.verifyLogin('lucaspio.galvao@gmail.com', '&Redinh0$')

  randomUser.verifyLogin('lucaspio.galvao@gmail.com', '&Redinh0$')