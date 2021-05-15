import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'

const files = import.meta.globEager('./modules/*.js')
const mockList = []

Object.keys(files).forEach(key => {
    mockList.push(...files[key].default)
})

export const setupProdMockServer = () => {
    createProdMockServer(mockList)
}