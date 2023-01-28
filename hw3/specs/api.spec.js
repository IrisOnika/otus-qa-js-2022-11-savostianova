import axios from "axios";
import expect from "expect";


const basicUrl = 'https://bookstore.demoqa.com'
/**
 * пока не реализован рандом correctLogin надо менять перед каждым запуском 
 * + на данный момент тесты зависимы (имеет значение порядок запуска)
 */
const correctLogin = "User24"
const correctUser = {
    userName: correctLogin,
    password: "testPass11!",
}

/**
 * раздел для тестов /Account/v1/User
 */
describe('create user test: /Account/v1/User', () => {
    test('create new user', async () => {
        const newUser = {
            method: "POST",
            url: `${basicUrl}/account/v1/user`,
            data: correctUser
          }
        const response = await axios(newUser);
        expect(response.status).toBe(201)
        expect(response.data.username).toEqual(correctLogin)   
    })
    test('create new user with existing login', async () => {
        const newUser = {
            method: "POST",
            url: `${basicUrl}/account/v1/user`,
            data: correctUser
          }
        
        try {
          const response = await axios(newUser);
        } catch (error) {
            expect(error.response.status).toEqual(406);
            expect(error.response.data.message).toEqual("User exists!");
        }
        
    })
    test('pass is too easy', async () => {
        const newUser = {
            method: "POST",
            url: `${basicUrl}/account/v1/user`,
            data: {
              userName: "testUser00",
              password: "testPass00",
            },
          }
        
        try {
          const response = await axios(newUser);
        } catch (error) {
            expect(error.response.status).toEqual(400);
            const mess = "Passwords must have at least one non alphanumeric character, one digit ('0'-'9'), one uppercase ('A'-'Z'), one lowercase ('a'-'z'), one special character and Password must be eight characters or longer."
            expect(error.response.data.message).toEqual(mess);
        }
        
    })
})

/**
 * раздел для тестов /Account/v1/GenerateToken
 */
describe('create token tests: /Account/v1/GenerateToken', () => {
    test('create new token', async () => {
        const makeToken = {
            method: "POST",
            url: `${basicUrl}/account/v1/GenerateToken`,
            data: correctUser
          }
        const response = await axios(makeToken);
        expect(response.status).toEqual(200);
        expect(typeof response.data.token).toEqual("string")
        expect(response.data.expires).not.toBe(null)
        expect(response.data.status).not.toEqual("Failed")

    })
    test('do not create', async () => {
        const tokenError = {
            method: "POST",
            url: `${basicUrl}/account/v1/GenerateToken`,
            data: {
                userName: "User21",
                password: "testPass2",
            },
          }
        const response = await axios(tokenError);
        expect(response.status).toEqual(200);
        expect(response.data.token).toEqual(null)
        expect(response.data.expires).toBe(null)
        expect(response.data.status).toEqual("Failed")
        expect(response.data.result).toEqual("User authorization failed.")
              

    })

})