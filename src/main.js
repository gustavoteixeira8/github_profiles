import 'core-js/stable'
import 'regenerator-runtime/runtime'
import './assets/css/style.css'
import { newError } from './modules/errors'
import { fetchUser } from './modules/fetchFiles'


const form = document.querySelector('#form')

form.addEventListener('submit', async (e) => {
    e.preventDefault()

    try {
        const inputText = document.querySelector('#inputText')

        if(!inputText.value) {
            newError('Input cannot be empty')
            return
        }

        await fetchUser(inputText.value)

    } catch(e) {
        newError('ERROR')
    }
})
