export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['Parabéns!']
export const GAME_COPIED_MESSAGE = 'Resultado copiado'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'Letras insuficientes'
export const WORD_NOT_FOUND_MESSAGE = 'Palavra não encontrada'
export const HARD_MODE_ALERT_MESSAGE =
  'O modo difícil só pode ser habilitado no começo'
export const HARD_MODE_DESCRIPTION =
  'A dica revelada deve ser usada no próximo palpite'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'Para melhor visualização'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `O animal era ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Usar ${guess} na posição ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Palpite deve conter a letra ${letter}`
export const ENTER_TEXT = 'Enter'
export const DELETE_TEXT = 'Delete'
export const STATISTICS_TITLE = 'Estatísticas'
export const GUESS_DISTRIBUTION_TEXT = 'Distribuição de palpites'
export const NEW_WORD_TEXT = 'Próxima palavra em'
export const SHARE_TEXT = 'Compartilhar'
export const TOTAL_TRIES_TEXT = 'Total de tentativas'
export const SUCCESS_RATE_TEXT = 'Taxa de sucesso'
export const CURRENT_STREAK_TEXT = 'Streak atual'
export const BEST_STREAK_TEXT = 'Melhor streak'
