const newError = (msg) => {
    const errorContainer = document.querySelector('#error-container')

    errorContainer.innerHTML = `
        <div class="alert alert-danger text-center">
            ${msg}
        </div>
    `

    setTimeout(() => errorContainer.innerHTML = '', 2000)
}

const hasErrors = (response) => response.status !== 200 ? false : true


export { newError, hasErrors }