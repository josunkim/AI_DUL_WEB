export const COLORS = {
  Black: {
    /**'#6B6B6B' */
    100: '#6B6B6B',
    /**'#525252' */
    200: '#525252',
    /**'#373737' */
    300: '#373737',
    /**'#1F1F1F' */
    400: '#1F1F1F',
    /**'#040404' */
    500: '#040404',
    /**'#000' */
    600: '#000',
  },
  Grayscale: {
    /**'#000000' */
    50: '#000000',
    /**'#DEDEDE' */
    100: '#DEDEDE',
    /**'#C4C4C4' */
    200: '#C4C4C4',
    /**'#ABABAB' */
    300: '#ABABAB',
    /**'#999999' */
    400: '#999999',
    /**'#808080' */
    500: '#808080',
  },
  PrimaryBlue: {
    /**'#F5FAFF' */
    50: '#F5FAFF',
    /**'#E9F4FF' */
    100: '#E9F4FF',
    /**'#4DA9FF' */
    200: '#4DA9FF',
    /**'#1B92FF' */
    300: '#1B92FF',
    /**'#242945' */
    400: '#242945',
    /**'#1976d2' */
    500: '#1976d2',
    /**'#4285F4' */
    600: '#4285F4',
    /**'#357AE8' */
    700: '#357AE8',
  },
  White: {
    /**#FFFFFF */
    100: '#FFFFFF',
  },
  SecondaryYellow: {
    /**#FFC149 */
    100: '#FFC149',
    /**#F9D000 */
    200: '#F9D000',
    /**#FAE100 */
    300: '#FAE100',
  },
  SecondaryRed: {
    /**#FFEEF0 */
    100: '#FFEEF0',
    /**#FF4F64 */
    200: '#FF4F64',
  },
  Line: {
    /**#F2f2f2*/
    100: '#F2f2f2',
    /**#E6E6E6 */
    200: '#E6E6E6',
  },
  Background: {
    /**#F2F3F8 */
    100: '#F2F3F8',
    /**#F4F7FB */
    400: '#F4F7FB',
  },
  NeutralGray: {
    /**#F5F5F5 */
    50: '#F5F5F5',
    /**#FAFAFA */
    100: '#FAFAFA',
    /**#F7F7F7 */
    200: '#F7F7F7',
    /**#EFEFEF */
    300: '#EFEFEF',
  },
};

export const DARK_COLORS = {
  Black: {
    /**#A0A0A0 */
    100: '#A0A0A0',
    /**#7A7A7A */
    200: '#7A7A7A',
    /**#707070 */
    300: '#707070',
    /**#505050 */
    400: '#505050',
    /**#ffffff */
    500: '#ffffff',
    /**#000 */
    600: '#000',
  },
  Grayscale: {
    /**#FAFAFA */
    50: '#FAFAFA',
    /**#444444 */
    100: '#444444',
    /**#555555 */
    200: '#555555',
    /**#666666 */
    300: '#666666',
    /**#777777 */
    400: '#777777',
    /**#888888 */
    500: '#888888',
  },
  PrimaryBlue: {
    /**#1B1F26 */
    50: '#1B1F26',
    /**#223344 */
    100: '#223344',
    /**#3D8BDA */
    200: '#3D8BDA',
    /**#5DB0FF */
    300: '#5DB0FF',
    /**#A0CFFF */
    400: '#A0CFFF',
    /**#90C2FF */
    500: '#90C2FF',
    /**#A7D3FF */
    600: '#A7D3FF',
    /**#8ABEFF */
    700: '#8ABEFF',
  },
  White: {
    /**#1E1E1E */
    100: '#1E1E1E',
  },
  SecondaryYellow: {
    /**#FFD666 */
    100: '#FFD666',
    /**#4F3B00 */
    200: '#4F3B00',
    /**#C2A100 */
    300: '#C2A100',
  },
  SecondaryRed: {
    /**#3B1B1D */
    100: '#3B1B1D',
    /**#FF6B81 */
    200: '#FF6B81',
  },
  Line: {
    /**#292929 */
    100: '#292929',
    /**#3C3C3C */
    200: '#3C3C3C',
  },
  Background: {
    /**#2B2D31 */
    100: '#2B2D31',
    /**#393B40 */
    400: '#393B40',
  },
  NeutralGray: {
    /**#2C2C2C */
    50: '#2C2C2C',
    /**#2E2E2E */
    100: '#2E2E2E',
    /**#333333 */
    200: '#333333',
    /**#3D3D3D */
    300: '#3D3D3D',
  },
};

declare module '@mui/material/styles' {
  interface Palette {
    Black: typeof COLORS.Black;
    Grayscale: typeof COLORS.Grayscale;
    PrimaryBlue: typeof COLORS.PrimaryBlue;
    White: typeof COLORS.White;
    SecondaryYellow: typeof COLORS.SecondaryYellow;
    SecondaryRed: typeof COLORS.SecondaryRed;
    Line: typeof COLORS.Line;
    Background: typeof COLORS.Background;
    NeutralGray: typeof COLORS.NeutralGray;
  }
  interface PaletteOptions {
    Black?: typeof COLORS.Black;
    Grayscale?: typeof COLORS.Grayscale;
    PrimaryBlue?: typeof COLORS.PrimaryBlue;
    White?: typeof COLORS.White;
    SecondaryYellow?: typeof COLORS.SecondaryYellow;
    SecondaryRed?: typeof COLORS.SecondaryRed;
    Line?: typeof COLORS.Line;
    Background?: typeof COLORS.Background;
    NeutralGray?: typeof COLORS.NeutralGray;
  }
}
