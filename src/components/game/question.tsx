interface Props {
  questionNumber: number
  questionDescription: string
}

export function Question({ questionNumber, questionDescription }: Props) {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-green text-2xl font-semibold">
        {`Questão ${questionNumber}`}
      </h2>

      <p className="text-justify text-pretty">{questionDescription}</p>
    </div>
  )
}
