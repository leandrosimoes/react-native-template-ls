/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components/native'

import { TTheme } from '../theme/theme'

declare module 'styled-components/native' {
    type ThemeType = TTheme

    export interface DefaultTheme extends ThemeType {}
}
