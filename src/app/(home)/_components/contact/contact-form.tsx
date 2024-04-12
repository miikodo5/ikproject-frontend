import React from 'react';
import {Field, Form,  } from "react-final-form";
import ButtonApp from "@/app/_components/app-button";
// import ButtonApp from "../../button-app";
// import {useMutation} from "react-query";
// import {emailService} from "../../../services/email.service";


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

    // const onSubmit = (values: IFormValues)=>{
    //     mutate(values)
    // }

    // const {mutate, isLoading, isError, isSuccess} = useMutation('mail',
    //     async (data:IFormValues)=>await emailService.sendMail(data)
    // )

    return (
        <Form
            validate={(values:IFormErrors)=>{
                const errors = {};
                if(!values.name){
                    // @ts-ignore
                    errors.name = "required"
                }
                if(!values.email){
                    // @ts-ignore
                    errors.email = "required"
                }
                if(!String(values.email).toLowerCase().match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)){
                    // @ts-ignore
                    errors.email = 'wrong'
                }
                if(!values.message) {
                    // @ts-ignore
                    errors.message = 'required'
                }
                return errors;
            }}
            // onSubmit={onSubmit}
            onSubmit={()=>{}}
            render={({ handleSubmit, submitting , pristine, errors}) => (
                <form onSubmit={handleSubmit} className='w-full'>
                    <div className='flex flex-col gap-3 w-full'>
                        <Field name='name'>
                            {({ input, meta }) => (
                                <div className='flex flex-col gap-[6px]'>
                                    <span className={`text-sm max-phone:text-xs font-medium ${meta.touched && meta.error && 'text-main'}`}>Name</span>
                                    <input {...input} placeholder='Enter your name'
                                           className={'w-full px-5 py-4 border-[2px] rounded border-grey-stroke text-sm max-phone:text-xs focus:outline-0 max-phone:w-full ' +
                                               '  active:border-grey-1 ' + (meta.touched && meta.error && ' !border-main')}/>
                                {/*hover:shadow-[0px_4px_16px_0_rgba(157,0,0,0.16)]*/}
                                </div>
                            )}
                        </Field>
                        <Field name='email'>
                            {({ input, meta }) => (
                                <div className='flex flex-col gap-[6px]'>
                                    <span className={`text-sm max-phone:text-xs font-medium ${meta.touched && meta.error && 'text-main'}`}>Email</span>
                                    <input {...input} placeholder='Enter your email'
                                           className={'w-full px-5 py-4 border-[2px] rounded border-grey-stroke  text-sm max-phone:text-xs focus:outline-0 max-phone:w-full ' +
                                               '  active:border-grey-1  ' + (meta.touched && meta.error && ' !border-main')}/>
                                {/*hover:shadow-[0px_4px_16px_0_rgba(157,0,0,0.16)]*/}
                                </div>
                            )}
                        </Field>
                        <Field name='message'>
                            {({ input, meta }) => (
                                <div className='flex flex-col gap-[6px]'>
                                    <span className={`text-sm max-phone:text-xs font-medium ${meta.touched && meta.error && 'text-main'}`}>Message</span>
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
                            <ButtonApp disabled={submitting || pristine || errors?.name || errors?.email || errors?.message} text={'Send message'}/>

                        </div>
                    </div>
                </form>
            )}
        />
    );
};

export default FormContact;