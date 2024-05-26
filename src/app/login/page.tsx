'use client'
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import googlePng from '@/assets/google.png';
import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Form,
    FormControl,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Github } from 'lucide-react';
import Image from 'next/image';

const formSchema = z.object({
    email: z.string().email({ message: 'Please enter a valid email address.' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters.' }),
});

const LoginPage: React.FC = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: any) => {
        const result = await signIn('credentials', {
            redirect: false,
            email: data.email,
            password: data.password,
        });

        if (result?.error) {
            // handle error
        } else {
            // handle success
        }
    };

    return (
        <div className="flex items-center justify-center h-screen overflow-hidden bg-gray-900 text-white">
            <div className="w-full max-w-md p-8 space-y-8 rounded shadow-md bg-gray-800">
                <h2 className="text-2xl font-bold text-center">Login</h2>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input {...form.register('email')} type="email" placeholder="Enter your email" />
                            </FormControl>
                            <FormMessage>
                                {form.formState.errors.email?.message?.toString()}
                            </FormMessage>
                        </FormItem>
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input {...form.register('password')} type="password" placeholder="Enter your password" />
                            </FormControl>
                            <FormMessage>
                                {form.formState.errors.password?.message?.toString()}
                            </FormMessage>
                        </FormItem>
                        <Button type="submit" className="w-full p-2 text-white bg-blue-500 rounded">
                            Login
                        </Button>
                    </form>
                </Form>
                <div className="text-center">or</div>
                <div className="flex gap-4">
                    <Button
                        className="flex-1 p-2 text-white bg-gray-600 rounded"
                        onClick={() => signIn('github')}
                    >
                        <Github className="mr-2" />
                        GitHub
                    </Button>
                    <Button
                        className="flex-1 flex gap-2 p-2 text-white bg-red-500 rounded"
                        onClick={() => signIn('google')}
                    >
                        <Image width={50} height={30} src={googlePng.src} alt='google' className='h-[25px] w-[25px]' />
                        <span>

                            Google
                        </span>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
