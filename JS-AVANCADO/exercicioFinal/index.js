    const buttonGET = document.querySelector('.buttonGET') 
    const buttonPUT = document.querySelector('.buttonPUT') 
    const formPOST = document.querySelector('.formPOST') 
    const formDELETE = document.querySelector('.formDELETE') 

    function createOneTransaction (transaction) {
        const senderArea = document.createElement('h2')
        const sender = transaction.Sender 
        senderArea.textContent = `Sender: ${sender}`

        const recieverArea = document.createElement('h2')
        const reciever = transaction.Reciever 
        recieverArea.textContent = `Reciever: ${reciever}`

        const valueArea = document.createElement('h3')
        const value = transaction.Value 
        valueArea.textContent = `Value: ${value}`

        const idArea = document.createElement('p')
        const id = transaction.id 
        idArea.textContent = `Id: ${id}`

        const oneTransaction = document.createElement('div')
        oneTransaction.classList.add('oneTransaction')
        oneTransaction.append(senderArea, recieverArea, valueArea, idArea) 

        document.querySelector('.transactions').append(oneTransaction)
    }

    async function getTransaction() {
        document.querySelector('.transactions').textContent = ""
        const data = await axios.get('http://localhost:3000/Transactions')
        const transactions = data.data
        transactions.forEach(transaction => {
            createOneTransaction(transaction)
        });
    }

    function updateDataTransaction() {
        document.querySelector('form').reset()
        setTimeout(() => {
            getTransaction()
        }, 200);
    }

    function hasNumber(text) {
        for (let i = 0; i < text.length; i++) {
            if (!isNaN(parseInt(text[i]))) {
                return true
            }
        }
    }

    function formatarString(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    formPOST.addEventListener('submit', async (ev) => {
        ev.preventDefault()

        const sender = formatarString(document.querySelector('.senderPOST').value)
        const reciever = formatarString(document.querySelector('.recieverPOST').value)
        const value = document.querySelector('.valuePOST').value

        if (!sender || !reciever || !value) {
            alert("All camps must be filled")
            throw new Error("All camps must be filled!")
        }
        if (hasNumber(sender) || hasNumber(reciever)) {
            alert("Sender and reciever must be text")
            throw new Error("Sender and reciever must be text!")
        }
        if (isNaN(value)) {
            alert("Value must be a number")
            throw new Error("Value must be a number!")
        }

        const postData = {
            Sender: sender,
            Reciever: reciever,
            Value: value
        }

        axios.post('http://localhost:3000/Transactions', postData)
        updateDataTransaction()
    })

    formDELETE.addEventListener('submit', async (ev) => {
        ev.preventDefault()
        const transactionID = document.querySelector('.transactionID').value
        if (!transactionID) {
            alert("A id must be specified")
            throw new Error("A id must be specified!")
        }
        await axios.delete(`http://localhost:3000/Transactions/${transactionID}`)
        alert(`Transaction was deleted`)
        updateDataTransaction()
    })

    async function putTransaction() {
        const reciever = document.querySelector('.recieverPUT').value
        const sender = document.querySelector('.senderPUT').value
        const value = document.querySelector('.valuePUT').value
        const id = document.querySelector('.idPUT').value
        
        if (!id) {
            alert("Id must be specified")
            throw new Error("Id must be specified!")
        } 
        if (!sender || !reciever || !value) {
            alert("All camps must be filled")
            throw new Error("All camps must be filled!")
        }
        if (hasNumber(sender) || hasNumber(reciever)) {
            alert("Sender and reciever must be text")
            throw new Error("Sender and reciever must be text!")
        }
        if (isNaN(value)) {
            alert("Value must be a number")
            throw new Error("Value must be a number!")
        }

        const updateData = {
            Reciever: reciever,
            Sender: sender,
            Value: value
        }

        await axios.put(`http://localhost:3000/Transactions/${id}`, updateData)
        getTransaction()
    }


    // buttonGET.addEventListener('click', getTransaction)

    document.addEventListener('DOMContentLoaded', getTransaction)
    buttonPUT.addEventListener('click', putTransaction)
