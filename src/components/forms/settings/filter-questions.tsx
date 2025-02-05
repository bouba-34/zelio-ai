'use client'
import Section from '@/components/section-label'
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card'
import { useFilterQuestions, useHelpDesk } from '@/hooks/settings/use-settings'
import React from 'react'
import { Button } from '@/components/ui/button'
import { Loader } from '@/components/loader'
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {ErrorMessage} from "@hookform/error-message";
import {Textarea} from "@/components/ui/textarea";
import {Bot} from "lucide-react";

type Props = {
  id: string
}

const FilterQuestions = ({ id }: Props) => {
  const { register, errors, onAddFilterQuestions, isQuestions, loading } =
    useFilterQuestions(id)

  return (
    <Card className="w-full grid grid-cols-1 lg:grid-cols-2 border-0 bg-gradient-to-b from-gray-800/50 to-gray-900/50 ">
      <CardContent className="p-6 border-r-[1px] text-white">
        <CardTitle>
            Bot Questions
        </CardTitle>
        <form
          onSubmit={onAddFilterQuestions}
          className="flex flex-col gap-6 mt-10"
        >
          <div className="flex flex-col gap-3">
            <Section
              label="Question"
              message="Add a question that you want your chatbot to ask"
            />
            <Label
                className="flex flex-col gap-2"
                htmlFor={`input-Question`}
            >
                Question
                <Input
                    id={`input-Question`}
                    type="text"
                    placeholder="Type your question"
                    form="filter-questions-form"
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
              message="The answer for the question above"
            />
            <Label
                className="flex flex-col gap-2"
                htmlFor={`input-Answer`}
            >
                Answer
                <Textarea
                    id={`input-Answer`}
                    placeholder="Type your answer"
                    form="filter-questions-form"
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
                                 hover:to-purple-700 text-white"          >
            Create
          </Button>
        </form>
      </CardContent>
      <CardContent className="p-6 overflow-y-auto chat-window text-gray-500">
        <Loader loading={loading}>
          {isQuestions.length ? (
            isQuestions.map((question) => (
              <p
                key={question.id}
                className="font-bold"
              >
                {question.question}
              </p>
            ))
          ) : (
            <CardDescription className="text-gray-500">No Questions</CardDescription>
          )}
        </Loader>
      </CardContent>
    </Card>
  )
}

export default FilterQuestions