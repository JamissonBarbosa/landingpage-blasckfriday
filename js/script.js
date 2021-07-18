const form = document.getElementById('form')

form.addEventListener('submit', (event) => {
    event.preventDefault()

    //pega os dados do user
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value

    let data = {
        name,
        email
    }

    let convertData = JSON.stringify(data)

    localStorage.setItem('lead', convertData)
})