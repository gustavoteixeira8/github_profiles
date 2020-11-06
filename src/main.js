import 'core-js/stable'
import 'regenerator-runtime/runtime'
import './assets/css/style.css'
import { newError } from './modules/errors'
import { fetchUser, fetchRepos } from './modules/fetchFiles'


const addRepoIntoDOM = async (userJSON) => {
    try {
        const getRepos = await fetchRepos(userJSON)
        const repos = getRepos.slice(0, 4)
        const reposContainer = document.querySelector('#repositories')

        repos.forEach(el => {
            reposContainer.innerHTML += `
            <a href="${el.html_url}" target="_blank">
                ${el.full_name}
            </a><br>
            `
        })
    } catch(e) {
        newError('ERROR')
    }
}


export const addUserIntoDOM = (userJSON) => {
    const cardContainer = document.querySelector('#card-container')

    cardContainer.innerHTML = `
        <div class="d-md-flex">
            <div class="col-md-4">
                <img src="${userJSON.avatar_url}" class="img-thumbnail" alt="User image">
            </div>
            <div class="col-md-8 text-black-50">
                <h3 class="mb-3">
                    <a href="${userJSON.html_url}" target="_blank" class="text-decoration-none text-dark">
                    ${userJSON.login}
                    </a>
                </h3>
                <p>Followers: ${userJSON.followers}</p>
                <p>Following: ${userJSON.following}</p>
                <p>Repositories count: ${userJSON.public_repos}</p>
                <div id="repositories">
                    Some repositories:<br>
                </div>
            </div> 
        </div>
    `
    addRepoIntoDOM(userJSON)
}


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
