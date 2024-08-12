import React from 'react'
import styles from './contact.module.css'
import { useForm } from 'react-hook-form'
import { customImages } from '../../../../images'

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const submitHandler = async (data) => {
        console.log(data)
    }
    return (
        <section className={`${styles.contact} container`}>
            <h2 className={styles.title}>Contact</h2>
            <div className={styles.form__container}>
                <form onSubmit={handleSubmit(submitHandler)} className={styles.form}>
                    <input
                        type="text"
                        placeholder='NAME, SURNAME'
                        autoComplete='off'
                        {...register("name", { required: true })}
                    />
                    <input
                        type="email"
                        placeholder='Email'
                        autoComplete='off'
                        {...register("email", { required: true })}
                    />
                    <input
                        type='text'
                        placeholder='Theme'
                        autoComplete='off'
                        {...register("theme", { required: true })}
                    />
                    <textarea
                        className={styles.textarea}
                        placeholder='YOUR MESSAGE'
                        {...register("message", { required: true })}
                    />
                    <button className={styles.submit__button}>
                        Send
                    </button>
                </form>
                <div className={styles.img}>
                    <img src={customImages.contact} alt="furniture contact" />
                </div>
            </div>
        </section>
    )
}

export default Contact