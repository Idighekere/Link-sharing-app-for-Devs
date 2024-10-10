/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'
import AuthHeader from '../../../components/auth/AuthHeader'
import RegisterForm from '../../../components/auth/RegisterForm'
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import Link from 'next/link'
type Props = {}

const Register = (props: Props) => {
    return (
        <main className='flex flex-col items-center justify-center'>

            <AuthHeader /><div className="flex items-center justify-center">

                <Card className='bg-white sdm:w-[470px] max-w-lg w-full rounded-[12px] '>
                    <CardHeader><CardTitle className='text-[2rem] font-[700]'>Create account</CardTitle>
                        <CardDescription className='text-base '>Let's get you started sharing your links!</CardDescription></CardHeader>
                    <CardContent>                    <RegisterForm />
                    </CardContent>
                    <CardFooter><span>Already have an account? <Link href="/login" className="text-purple
                    e"> Login</Link></span></CardFooter>         </Card>
            </div>
        </main >
    )
}

export default Register