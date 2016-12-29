/**
 * @providesModule configPages
 */

export const makePage = (title, key) => ({ key, title })
export const keyPage = (page) => page.key

export const homePage = makePage('Текущие мероприятия', 'home')
export const anotherPage = makePage('Welcome to @Another@ Page!', 'another')
export const welcomePage = makePage('Добро Пожаловать!', 'welcome')