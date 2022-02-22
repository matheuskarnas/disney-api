import axios from 'axios';
import { AllDataOfCharters } from '../App'

let allData: AllDataOfCharters[] = []
export const allResponseOfAPI = async (url: string | undefined): Promise<AllDataOfCharters[]> => {
  let urlTest = url
  while (urlTest !== undefined) {
    console.log(urlTest)
    const response = await axios.get(urlTest)
    const { nextPage } = response.data
    allData = [...allData, ...response.data.data]
    urlTest = nextPage

  }

  return allData

}
export const responseApi = async (url: string) => {
  const response = await axios.get(url)
  const { nextPage } = response.data
  return [response.data.data, nextPage]
}
