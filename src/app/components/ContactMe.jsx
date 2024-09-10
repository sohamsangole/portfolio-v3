import React, { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import emailjs from "emailjs-com";

const ContactMe = () => {
    const { theme } = useContext(ThemeContext);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [messageSent, setMessageSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            'service_jrzs78y',
            'template_5keg2qn',
            {
                from_name: formData.name,
                message: formData.message,
                email: formData.email,
                to_name: 'Soham'
            },
            'DIfhBu2_gSNqe6HjI'
        )
            .then((response) => {
                console.log("SUCCESS!", response.status, response.text);
                setFormData({ name: "", email: "", message: "" });
            })
            .catch((error) => {
                console.log("FAILED...", error);
            });
    };


    // Function to update form data
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <section
            className="min-h-screen flex flex-col justify-center items-center"
            id="contact"
            style={{
                backgroundColor: `rgba(${parseInt(
                    theme.background.slice(1, 3),
                    16
                )}, ${parseInt(theme.background.slice(3, 5), 16)}, ${parseInt(
                    theme.background.slice(5, 7),
                    16
                )}, 0.8)`,
            }}
        >
            <h2
                className="text-center text-4xl font-bold mt-4 mb-8 md:mb-12"
                style={{ color: theme.text }}
            >
                Contact Me
            </h2>
            {messageSent && (
                <p className="text-green-500 mb-4">Message sent successfully!</p>
            )}
            <form className="w-3/5 mx-auto" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label
                        htmlFor="name"
                        className="block text-lg font-bold mb-2"
                        style={{ color: theme.text }}
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border rounded"
                        style={{
                            backgroundColor: theme.background,
                            color: theme.text,
                        }}
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="email"
                        className="block text-lg font-bold mb-2"
                        style={{ color: theme.text }}
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border rounded"
                        style={{
                            backgroundColor: theme.background,
                            color: theme.text,
                        }}
                    />
                </div>

                <div className="mb-4">
                    <label
                        htmlFor="message"
                        className="block text-lg font-bold mb-2"
                        style={{ color: theme.text }}
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="4"
                        className="w-full p-3 border rounded"
                        style={{
                            backgroundColor: theme.background,
                            color: theme.text,
                        }}
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-3 mt-4 font-bold rounded-lg"
                    style={{
                        backgroundColor: theme.primary_color,
                        color: theme.background,
                    }}
                >
                    Send Message
                </button>
            </form>

        </section>
    );
};

export default ContactMe;
