import axios from "axios";
import expect from "expect";
import { concat } from "lodash";


/**
 * Для проверки, что jest настроен правильно. Можно удалить
 
test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
})*/

const basicUrl = 'https://bookstore.demoqa.com'

/**
 * раздел для тестов /Account/v1/User
 */
describe('create user test: /Account/v1/User', () => {
    test.skip('create new user', async () => {
        const newUser = {
            method: "POST",
            url: `${basicUrl}/account/v1/user`,
            data: {
              userName: "User20",
              password: "testPass20!",
            },
          }
        const response = await axios(newUser);
        expect(response.status).toBe(201)
        expect(response.data.username).toEqual("User20")
        /* почему не происходит удаление - не понятно. вместо удаления - ответ 401 User not autorised
        const idUser = response.data.userID
        console.log(response.data)
        console.log('UserId = ' + idUser)
        console.log(`${basicUrl}/account/v1/user/${idUser}`)
        const delUser = {
            method: "DELETE",
            url: `${basicUrl}/account/v1/user/${idUser}`,
        }
        const resp = await axios(delUser);
        //console.log(resp.data)
        expect(resp.status).toBe(200)*/        
    })
    test('create new user with existing login', async () => {
        const newUser = {
            method: "POST",
            url: `${basicUrl}/account/v1/user`,
            data: {
              userName: "User20",
              password: "testPass20!",
            },
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