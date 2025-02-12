'use server'

import { client } from '@/lib/prisma'
import { currentUser, redirectToSignIn } from '@clerk/nextjs'
//import { onGetAllAccountDomains } from '../settings'

export const onCompleteUserRegistration = async (
    fullname: string,
    clerkId: string,
    type: string
) => {
    //console.log("data to store: ", fullname, clerkId, type)
    try {
        const registered = await client.user.create({
            data: {
                fullname,
                clerkId,
                type,
                subscription: {
                    create: {},
                },
            },
            select: {
                fullname: true,
                id: true,
                type: true,
            },
        })

        if (registered) {
            return { status: 200, user: registered }
        }
    } catch (error) {
        return { status: 400 }
    }
}

export const onLoginUser = async () => {
    const user = await currentUser()

    if (!user)
        return null
        //redirectToSignIn()
    else {
        try {
            const authenticated = await client.user.findUnique({
                where: {
                    clerkId: user.id,
                },
                select: {
                    fullname: true,
                    id: true,
                    type: true,
                },
            })
            if (authenticated) {
                const domains = await onGetAllAccountDomains()
                return { status: 200, user: authenticated, domain: domains?.domains }
            }
        } catch (error) {
            return { status: 400 }
        }
    }
}

export const onGetAllAccountDomains = async () => {
    const user = await currentUser()
    if (!user) return
    try {
        const domains = await client.user.findUnique({
            where: {
                clerkId: user.id,
            },
            select: {
                id: true,
                domains: {
                    select: {
                        name: true,
                        icon: true,
                        id: true,
                        customer: {
                            select: {
                                chatRoom: {
                                    select: {
                                        id: true,
                                        live: true,
                                    },
                                },
                            },
                        },
                    },
                },
            },
        })
        return { ...domains }
    } catch (error) {
        console.log(error)
    }
}