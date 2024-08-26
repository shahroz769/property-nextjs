'use client';
import { useEffect } from 'react';
import { useFormState } from 'react-dom';
import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import addMessage from '@/app/actions/addMessage';
import SubmitMessageButton from '@/components/SubmitMessageButton';

const PropertyContactForm = ({ property }) => {
    const { data: session } = useSession();

    const [state, formAction] = useFormState(addMessage, {});

    useEffect(() => {
        if (state.error) toast.error(state.error);
        if (state.submitted) toast.success('Message sent successfully!');
    }, [state]);

    if (state.submitted) {
        return (
            <p className='text-gray-600 font-semibold mb-4'>
                Your message has been sent successfully!
            </p>
        );
    }

    return (
        session && (
            <div className='bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto'>
                <h3 className='text-2xl font-bold mb-6 text-gray-800 border-b pb-2'>
                    Contact Manager
                </h3>
                <form
                    action={formAction}
                    autoComplete='off'
                    className='space-y-6'
                >
                    <input
                        type='hidden'
                        id='property'
                        name='property'
                        defaultValue={property._id}
                        spellCheck='false'
                        autoComplete='off'
                    />
                    <input
                        type='hidden'
                        id='recipient'
                        name='recipient'
                        defaultValue={property.owner}
                        spellCheck='false'
                        autoComplete='off'
                    />
                    <div>
                        <label
                            className='block text-gray-700 text-sm font-semibold mb-2'
                            htmlFor='name'
                        >
                            Name
                        </label>
                        <input
                            className='w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 transition duration-300'
                            id='name'
                            name='name'
                            type='text'
                            placeholder='Enter your name'
                            required
                            spellCheck='false'
                            autoComplete='off'
                        />
                    </div>
                    <div>
                        <label
                            className='block text-gray-700 text-sm font-semibold mb-2'
                            htmlFor='email'
                        >
                            Email
                        </label>
                        <input
                            className='w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 transition duration-300'
                            id='email'
                            name='email'
                            type='email'
                            placeholder='Enter your email'
                            required
                            spellCheck='false'
                            autoComplete='off'
                        />
                    </div>
                    <div>
                        <label
                            className='block text-gray-700 text-sm font-semibold mb-2'
                            htmlFor='phone'
                        >
                            Phone
                        </label>
                        <input
                            className='w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 transition duration-300'
                            id='phone'
                            name='phone'
                            type='text'
                            placeholder='Enter your phone number'
                            spellCheck='false'
                            autoComplete='off'
                        />
                    </div>
                    <div>
                        <label
                            className='block text-gray-700 text-sm font-semibold mb-2'
                            htmlFor='message'
                        >
                            Message
                        </label>
                        <textarea
                            className='w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 transition duration-300 h-32 resize-none'
                            id='message'
                            name='message'
                            placeholder='Enter your message'
                            spellCheck='false'
                            autoComplete='off'
                        ></textarea>
                    </div>
                    <div>
                        <SubmitMessageButton />
                    </div>
                </form>
            </div>
        )
    );
};
export default PropertyContactForm;
