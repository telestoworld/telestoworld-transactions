import { Configuration } from './types'

export function getConfiguration(): Configuration {
  return {
    serverURL: 'https://transactions-api.decentraland.io/v1',
    websocketProvider: 'wss://ws-mumbai.matic.today'
  }
}
