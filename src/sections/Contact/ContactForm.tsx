import { useForm, ValidationError } from '@formspree/react'

export const ContactForm = () => {
    const [state, handleSubmit] = useForm("myyvjkky");

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Your Email:
                    <input
                        id="email"
                        type="email"
                        name="email"
                        required
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                </label>
                <label style={{ flexGrow: 1 }}>
                    Message:
                    <textarea
                        id="message"
                        name="message"
                        required
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                </label>
                <button type="submit" disabled={state.submitting}>
                    Submit
                </button>
            </form>
            {state.succeeded && <p>Email sent!</p>}
        </>
    );
}