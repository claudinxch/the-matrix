'use server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function getAIExplanation(
  question: string,
  expectedAnswer: number[][],
  userAnswer: number[][],
) {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content:
            "You are a math tutor who provides brief, direct and complete explanations about matrices in Portuguese. You will receive a statement and must explain why the user's answer is correct or incorrect in Portuguese. You don't need to say 'Your answer is right' or 'Your answer is incorrect', you just need to explain why is it correct or incorrect.",
        },
        {
          role: 'user',
          content: `Provide a brief and direct explanation in Portuguese of why the user's answer is correct or incorrect for the following matrix question:\n\nQuestion: ${question}\nCorrect Answer: ${JSON.stringify(
            expectedAnswer,
          )}\nUser's Answer: ${JSON.stringify(userAnswer)}`,
        },
      ],
      max_tokens: 150,
    })

    return {
      explanation:
        response.choices[0]?.message?.content?.trim() || 'Erro na explicação.',
    }
  } catch (error) {
    console.error('Error while generating explanation:', error)
    return {
      explanation:
        'Houve um erro ao gerar a explicação. Por favor, tente novamente.',
    }
  }
}
