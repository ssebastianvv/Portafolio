"use client";
import React, { useState } from 'react';
import styles from '../../styles/contact.module.css';


const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        reason: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Datos del formulario:', formData);
        // Aquí puedes agregar la lógica para enviar el formulario a tu correo

        setFormData({ name: '', email: '', company: '', reason: '' });
    };

    return (
        <form onSubmit={handleSubmit} className={styles.formContainer}>
            <div className={styles.formGroup}>
                <label htmlFor="name">Nombre:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="email">Correo electrónico:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="company">Empresa:</label>
                <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="reason">Razón de contacto:</label>
                <textarea
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Enviar</button>
        </form>
    );
};

export default ContactForm;
