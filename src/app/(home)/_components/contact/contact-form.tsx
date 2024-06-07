import React, {useContext, useRef, useState} from 'react';
import {Field, Form,  } from "react-final-form";
import ButtonApp from "@/app/_components/app-button";
// import ButtonApp from "../../button-app";
// import {useMutation} from "react-query";
// import {emailService} from "../../../services/email.service";
import emailjs from '@emailjs/browser';

import { animate, useInView, motion } from "framer-motion";
import {ContactFromContext} from "@/shared/providers/ContactFromProvider";


type IFormValues = {
    name: string,
    email: string,
    message: string
}
type IFormErrors = {
    name: string,
    email: string,
    message: string
}
const FormContact = () => {
    const form = useRef<HTMLFormElement | null>(null);
    const [isSuccess,setIsSuccess] = useState<boolean>(false);
    const [isLoading,setIsLoading] = useState<boolean>(true);
    const [isError,setIsError] = useState<boolean>(false);

    const {from, setFrom} = useContext(ContactFromContext)
    const sendEmail = (e: any) => {
        // e.preventDefault();
        console.log(form.current);

        emailjs
            .sendForm('service_u9bg4r7', 'template_scgk116', form.current!, {
                publicKey: 'kAlzB-xA97HNPQWIo',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setIsSuccess(true);
                    setTimeout(()=>{
                        setIsSuccess(false);
                    },3000)
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setIsError(true);
                    setTimeout(()=>{
                        setIsError(false);
                    },3000)
                },
            );
    };
    // const onSubmit = (values: IFormValues)=>{
    //     mutate(values)
    // }

    // const {mutate, isLoading, isError, isSuccess} = useMutation('mail',
    //     async (data:IFormValues)=>await emailService.sendMail(data)
    // )

    return (
        <>
            <Form
                validate={(values: IFormErrors) => {
                    const errors = {};
                    if (!values.name) {
                        // @ts-ignore
                        errors.name = "required"
                    }
                    if (!values.email) {
                        // @ts-ignore
                        errors.email = "required"
                    }
                    if (!String(values.email).toLowerCase().match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
                        // @ts-ignore
                        errors.email = 'wrong'
                    }
                    if (!values.message) {
                        // @ts-ignore
                        errors.message = 'required'
                    }
                    return errors;
                }}
                // onSubmit={onSubmit}
                onSubmit={sendEmail}
                render={({handleSubmit, submitting, pristine, errors}) => (
                    <form ref={form} onSubmit={handleSubmit} className='w-full'>
                        <div className='flex flex-col gap-3 w-full'>
                            <input value={from} readOnly className={'hidden'} name={'from'}/>
                            <Field name='name'>
                                {({input, meta}) => (
                                    <div className='flex flex-col gap-[6px]'>
                                        <span
                                            className={`text-sm max-phone:text-xs font-medium ${meta.touched && meta.error && 'text-main'}`}>Name</span>
                                        <input {...input} placeholder='Enter your name'
                                               className={'w-full px-5 py-4 border-[2px] rounded border-grey-stroke text-sm max-phone:text-xs focus:outline-0 max-phone:w-full ' +
                                                   '  active:border-grey-1 ' + (meta.touched && meta.error && ' !border-main')}/>
                                        {/*hover:shadow-[0px_4px_16px_0_rgba(157,0,0,0.16)]*/}
                                    </div>
                                )}
                            </Field>
                            <Field name='email'>
                                {({input, meta}) => (
                                    <div className='flex flex-col gap-[6px]'>
                                        <span
                                            className={`text-sm max-phone:text-xs font-medium ${meta.touched && meta.error && 'text-main'}`}>Email</span>
                                        <input {...input} placeholder='Enter your email'
                                               className={'w-full px-5 py-4 border-[2px] rounded border-grey-stroke  text-sm max-phone:text-xs focus:outline-0 max-phone:w-full ' +
                                                   '  active:border-grey-1  ' + (meta.touched && meta.error && ' !border-main')}/>
                                        {/*hover:shadow-[0px_4px_16px_0_rgba(157,0,0,0.16)]*/}
                                    </div>
                                )}
                            </Field>
                            <Field name='message'>
                                {({input, meta}) => (
                                    <div className='flex flex-col gap-[6px]'>
                                        <span
                                            className={`text-sm max-phone:text-xs font-medium ${meta.touched && meta.error && 'text-main'}`}>Message</span>
                                        <textarea {...input} draggable={false} itemScope={false}
                                                  placeholder='Enter your message'
                                                  className={'w-full h-[106px] px-5 py-4 text-sm max-phone:text-xs border-[2px] rounded border-grey-stroke  resize-none max-phone:w-full ' +
                                                      ' focus:outline-0  active:border-grey-1  ' + (meta.touched && meta.error && ' !border-main')}/>
                                        {/*hover:shadow-[0_4px_16px_0_rgba(157,0,0,0.16)]*/}
                                    </div>

                                )}

                            </Field>
                            <div className='flex justify-end w-full mt-5'>

                                {/*{isLoading && <span className='text-sm'>Відправляємо...</span>}*/}
                                {/*{isSuccess && <span className='text-sm text-green-700'>Відправили!</span>}*/}
                                {/*{isError && <span className='text-sm text-main-color'>Виникла якась помилка</span>}*/}
                                <ButtonApp
                                    disabled={submitting || pristine || errors?.name || errors?.email || errors?.message}
                                    text={'Send message'}/>

                            </div>
                        </div>
                    </form>
                )}
            />
            <motion.div
                animate={isSuccess ?
                    {
                        opacity: 1,
                        bottom: '0px',
                        transition: {
                            duration: 0.5
                        }
                    } :
                    {
                        bottom: '-100px',
                        opacity: 0,
                        transition: {
                            duration: 1
                        }
                    }}
                className={'select-none fixed my-10 rounded-xl py-4 px-12 text-base bg-green-600/90 text-white'}>
                Sended 🎉
            </motion.div>
            <motion.div
                animate={isError ?
                    {
                        opacity: 1,
                        bottom: '0px',
                        transition: {
                            duration: 0.5
                        }
                    } :
                    {
                        bottom: '-100px',
                        opacity: 0,
                        transition: {
                            duration: 1
                        }
                    }}
                className={'select-none fixed my-10 rounded-xl py-4 px-12 text-base bg-main/90 text-white'}>
                Something went wrong.
            </motion.div>

        </>
    );
};

export default FormContact;