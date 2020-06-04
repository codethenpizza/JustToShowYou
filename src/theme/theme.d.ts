import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      socialNetwoks: {
        socialNetworks: {
          facebook: {
            gradient: string[],
            simple: string
          },
          instagram: {
            gradient: string[],
            simple: string
          },
          twitter: {
            gradient: string[],
            simple: string
          }
        }
      }
    }
  }
}