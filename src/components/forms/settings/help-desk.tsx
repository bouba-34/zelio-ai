'use client'
import React from 'react'
import { useHelpDesk } from '@/hooks/settings/use-settings'
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card'
import Section from '@/components/section-label'
import { Button } from '@/components/ui/button'
import { Loader } from '@/components/loader'
import Accordion from '@/components/accordian'
import {Label} from "@/components/ui/label";
import { ErrorMessage } from '@hookform/error-message'
import {Textarea} from "@/components/ui/textarea";
import {Input} from "@/components/ui/input";

type Props = {
  id: string
}

const HelpDesk = ({ id }: Props) => {
  const { register, errors, onSubmitQuestion, isQuestions, loading } = useHelpDesk(id)

  return (
    <Card className="w-full grid grid-cols-1 lg:grid-cols-2 border-0 bg-gradient-to-b from-gray-800/50 to-gray-900/50">
      <CardContent className="p-6 border-r-[1px] text-white">
        <CardTitle>Help Desk</CardTitle>
        <form
          onSubmit={onSubmitQuestion}
          className="flex flex-col gap-6 mt-10"
        >
          <div className="flex flex-col gap-3">
            <Section
              label="Question"
              message="Add a question that you believe is frequently asked."
            />
            <Label
                className="flex flex-col gap-2"
                htmlFor="input-question"
            >
                Question
                <Input
                    id="input-question"
                    type="text"
                    placeholder="Type your question"
                    form="help-desk-form"
                    className="bg-gray-800/50 border-gray-700/20 text-white placeholder:text-gray-500"
                    {...register('question')}
                />
                <ErrorMessage
                    errors={errors}
                    name="question"
                    render={({ message }) => (
                        <p className="text-red-400 mt-2">
                            {message === 'Required' ? '' : message}
                        </p>
                    )}
                />
            </Label>
          </div>
          <div className="flex flex-col gap-3">
            <Section
              label="Answer to question"
              message="The answer for the question above."
            />
            <Label
                className="flex flex-col gap-2"
                htmlFor="input-answer"
            >
                Answer
                <Textarea
                    id="input-answer"
                    placeholder="Type your answer"
                    form="help-desk-form"
                    rows={5}
                    className="min-h-[100px] bg-gray-800/50 border-gray-700/20 text-white placeholder:text-gray-500"
                    {...register('answer')}
                />
                <ErrorMessage
                    errors={errors}
                    name="answer"
                    render={({ message }) => (
                        <p className="text-red-400 mt-2">
                            {message === 'Required' ? '' : message}
                        </p>
                    )}
                />
            </Label>
          </div>
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700
                                 hover:to-purple-700 text-white"
          >
            Create
          </Button>
        </form>
      </CardContent>
      <CardContent className="p-6 overflow-y-auto chat-window text-gray-400">
        <Loader loading={loading}>
          {isQuestions.length ? (
            isQuestions.map((question) => (
              <Accordion
                key={question.id}
                trigger={question.question}
                content={question.answer}
              />
            ))
          ) : (
            <CardDescription className="text-gray-500">No Questions to show</CardDescription>
          )}
        </Loader>
      </CardContent>
    </Card>
  )
}

export default HelpDesk