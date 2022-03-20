import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Como jogar?" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Adivinhe o bicho em 6 tentativas.<br></br>Depois de cada tentativa, a
        cor das letras mudará de acordo com o que você acertou ou errou.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="H"
          status="correct"
        />
        <Cell value="I" />
        <Cell value="E" />
        <Cell value="N" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        A letra H existe na palavra e na posição correta.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="P" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          status="present"
          value="E"
        />
        <Cell value="I" />
        <Cell value="X" />
        <Cell value="E" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        A letra E existe na palavra, mas na posição errada.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="T" />
        <Cell value="I" />
        <Cell value="G" />
        <Cell isRevealing={true} isCompleted={true} value="R" status="absent" />
        <Cell value="E" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        A letra R não existe na palavra.
      </p>
    </BaseModal>
  )
}
