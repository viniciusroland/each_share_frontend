// usando essas funcoes parar encodar/decodar o id da pasta na url
export const stringToBase64 = (str) => {
  return Buffer.from(str.toString()).toString('base64')
}

export const base64ToString = (encodedStr) => {
  return Buffer.from(encodedStr.toString(), 'base64').toString()
}