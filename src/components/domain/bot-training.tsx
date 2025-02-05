"use client"
import React, {useState} from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, HelpCircle, MessageSquare, Trash2 } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface Question {
    id: string
    question: string
    answer: string
}

const initialQuestions: Question[] = [
    {
        id: "1",
        question: "What are your goals in web development?",
        answer: "I help developers achieve their web development goals through personalized guidance and support.",
    },
    {
        id: "2",
        question: "What's your name?",
        answer: "I'm an AI assistant created to help with web development questions and challenges.",
    },
]


const BotTraining = () => {
    const [questions, setQuestions] = useState(initialQuestions)
    const [newQuestion, setNewQuestion] = useState({ question: "", answer: "" })

    const addQuestion = () => {
        if (newQuestion.question && newQuestion.answer) {
            setQuestions([...questions, { id: Math.random().toString(), ...newQuestion }])
            setNewQuestion({ question: "", answer: "" })
        }
    }

    const deleteQuestion = (id: string) => {
        setQuestions(questions.filter((q) => q.id !== id))
    }

    return (
        <div className="grid lg:grid-cols-2 gap-6">
            <Card className="border-0 bg-gradient-to-b from-gray-800/50 to-gray-900/50">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20" />
                <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-xl">
                    <CardHeader>
                        <CardTitle className="text-xl font-semibold text-white">Bot Training</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400">Question</label>
                                <Input
                                    value={newQuestion.question}
                                    onChange={(e) => setNewQuestion({ ...newQuestion, question: e.target.value })}
                                    placeholder="Add a question that you want your chatbot to ask"
                                    className="bg-gray-800/50 border-gray-700/20 text-white"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400">Answer</label>
                                <Textarea
                                    value={newQuestion.answer}
                                    onChange={(e) => setNewQuestion({ ...newQuestion, answer: e.target.value })}
                                    placeholder="The answer for the question above"
                                    className="bg-gray-800/50 border-gray-700/20 text-white min-h-[100px]"
                                />
                            </div>
                            <Button
                                onClick={addQuestion}
                                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700
                         hover:to-cyan-700 text-white"
                            >
                                <Plus className="h-4 w-4 mr-2" />
                                Add Question
                            </Button>
                        </div>
                    </CardContent>
                </div>
            </Card>

            <div className="space-y-6">
                <Tabs defaultValue="questions" className="w-full">
                    <TabsList className="bg-gray-800/50 border border-gray-700/50">
                        <TabsTrigger
                            value="questions"
                            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500/20
                       data-[state=active]:to-cyan-500/20 data-[state=active]:text-white"
                        >
                            <MessageSquare className="h-4 w-4 mr-2" />
                            Questions
                        </TabsTrigger>
                        <TabsTrigger
                            value="help"
                            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500/20
                       data-[state=active]:to-cyan-500/20 data-[state=active]:text-white"
                        >
                            <HelpCircle className="h-4 w-4 mr-2" />
                            Help Desk
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="questions" className="space-y-4 mt-4">
                        <AnimatePresence>
                            {questions.map((q, index) => (
                                <motion.div
                                    key={q.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Card className="group relative border-gray-700/50 bg-gradient-to-b from-gray-800/30 to-gray-900/30">
                                        <CardContent className="p-4">
                                            <div className="flex items-start justify-between">
                                                <div className="space-y-1">
                                                    <p className="font-medium text-white">{q.question}</p>
                                                    <p className="text-sm text-gray-400">{q.answer}</p>
                                                </div>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    onClick={() => deleteQuestion(q.id)}
                                                    className="opacity-0 group-hover:opacity-100 text-red-500 hover:text-red-600
                                   hover:bg-red-600/10"
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </TabsContent>

                    <TabsContent value="help">
                        <Card className="border-gray-700/50 bg-gradient-to-b from-gray-800/30 to-gray-900/30">
                            <CardContent className="p-6">
                                <p className="text-gray-400">Help desk content and FAQs will appear here.</p>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}
export default BotTraining
