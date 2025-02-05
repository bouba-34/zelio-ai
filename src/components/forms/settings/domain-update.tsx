import React from 'react'

import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {ErrorMessage} from "@hookform/error-message";

type DomainUpdateProps = {
  name: string
  register: UseFormRegister<FieldValues>
  errors: FieldErrors<FieldValues>
}

export const DomainUpdate = ({ name, register, errors }: DomainUpdateProps) => {
  return (
    <div className="flex gap-2 pt-5 items-end w-[400px] text-white">
        {/*<FormGenerator
        label="Domain name"
        register={register}
        name="domain"
        errors={errors}
        type="text"
        inputType="input"
        placeholder={name}
      />*/}
        <Label className="flex flex-col gap-2" htmlFor="input-Domain name">
            Domain name
            <Input
            id="input-Domain name"
            type="text"
            placeholder={name}
            {...register('domain')}
            />
            <ErrorMessage
                errors={errors}
                name={name}
                render={({ message }) => (
                    <p className="text-red-400 mt-2">
                        {message === 'Required' ? '' : message}
                    </p>
                )}
            />
        </Label>
    </div>
  )
}