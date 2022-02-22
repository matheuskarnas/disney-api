import axios from 'axios';
import { AllDataOfCharters } from '../App'



export const responseApi = async (url: string) => {
  const response = await axios.get(url)
  const { nextPage } = response.data
  return [response.data.data, nextPage]
}
