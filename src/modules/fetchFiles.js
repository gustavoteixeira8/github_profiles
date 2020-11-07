import { newError, hasErrors } from './errors'
import { addUserIntoDOM } from './addIntoDOM'

const fetchUser = async (text) => {
    const urlApi = `https://api.github.com/users/${text}`

    const response = await fetch(urlApi)
    
    const userJSON = await response.json()
 
    if(!hasErrors(response)) {
        newError('Username is not valid')
        return
    }

    addUserIntoDOM(userJSON)
}


const fetchRepos = async (userJSON) => {
    const response = await fetch(userJSON.repos_url)
    const reposJSON = await response.json()
    return reposJSON
}


export { fetchUser, fetchRepos }
