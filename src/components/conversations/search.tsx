import React from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

type Props = {
    register: UseFormRegister<FieldValues>
    domains?:
        | {
        name: string
        id: string
        icon: string
    }[]
        | undefined
}

const ConversationSearch = ({ register, domains }: Props) => {
    return (
        <div className="flex flex-col ">
            <select
                {...register('domain')}
                className="px-3 py-4 text-sm border-[1px] rounded-lg mr-5 bg-gray-800/50 border-gray-700/20 text-gray-400"
            >
                <option
                    disabled
                    selected
                    className="bg-gray-800/50 border-gray-700/20 text-gray-400"
                >
                    Domain name
                </option>
                {domains?.map((domain) => (
                    <option
                        value={domain.id}
                        key={domain.id}
                        className="text-gray-400 bg-gray-800/50 border-gray-700/20 "
                    >
                        {domain.name}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default ConversationSearch
