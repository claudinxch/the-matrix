interface Props {
  questionNumber: number
  questionDescription: string
}

export function Question({ questionNumber, questionDescription }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-green text-2xl font-semibold">
        Questão {questionNumber}
      </h1>

      <p className="text-justify text-pretty">{questionDescription}</p>
    </div>
  )
}
