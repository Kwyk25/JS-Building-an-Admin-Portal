
// Your Code Here

async function main(){
    let res = await fetch ('http://localhost:3001/listBooks')

    let books = await res.json()

    books.forEach(renderBook)
}
//adding input and buttons
function renderBook(book) {
    let root = document.querySelector('#root')

    let li = document.createElement('li')
    li.textContent = book.title

    let quantityInput = document.createElement('input')
    quantityInput.value = book.quantity

    let saveBtn = document.createElement('button')
    saveBtn.textContent = 'Save'

    saveBtn.addEventListener('click', () => {
        fetch('http://localhost:3001/updateBook', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: book.id,
                quantity: quantityInput.value
            })
        })
    })
    
    li.append(quantityInput, saveBtn)
    root.append(li)
}
main()












