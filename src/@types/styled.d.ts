import 'styled-components'
import { dark } from '../styles/themes'

export type Theme = typeof dark

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
