import React from 'react'
import {Input} from "@/components/ui/input";
import {FieldErrors, FieldValues, UseFormRegister} from "react-hook-form";
import Section from "@/components/section-label";
import {ErrorMessage} from "@hookform/error-message";

type GreetingMessageProps = {
    message: string
    register: UseFormRegister<FieldValues>
    errors: FieldErrors<FieldValues>
}

const GrettingsMessage = ({
                              message,
                              register,
                              errors,
                          }: GreetingMessageProps) => {
    return (
        <div className="flex flex-col gap-2">
            <Section
                label="Greeting message"
                message="Customize your welcome message"
            />
            <div className="lg:w-[500px]">
                {/*<FormGenerator
                    placeholder={message}
                    inputType="textarea"
                    lines={2}
                    register={register}
                    errors={errors}
                    name="welcomeMessage"
                    type="text"
                />*/}
                <Input
                    id="welcomeMessage"
                    type="textarea"
                    placeholder={message}
                    {...register('welcomeMessage')}
                />
                <ErrorMessage
                    errors={errors}
                    name="welcomeMessage"
                    render={({ message }) => (
                        <p className="text-red-400 mt-2">
                            {message === 'Required' ? '' : message}
                        </p>
                    )}
                />
            </div>
        </div>
    )
}
export default GrettingsMessage
