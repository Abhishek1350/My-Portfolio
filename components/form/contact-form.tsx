"use client";

import { Label, Input, Textarea, LabelInputContainer } from "./";
import { IoSendSharp } from "react-icons/io5";
import { useReducer } from "react";

interface Props {
    className?: string;
}

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
    loading: boolean;
    error: {
        hasError: boolean;
        message: string;
    };
}

enum ActionTypes {
    UPDATE_STATE = "UPDATE_STATE",
    RESET_STATE = "RESET_STATE",
}

type Action = {
    type: ActionTypes;
    payload: Partial<FormData>;
};

const initialInputState = {
    name: "",
    email: "",
    subject: "",
    message: "",
    loading: false,
    error: {
        hasError: false,
        message: "",
    },
};

function inputReducer(state: FormData, action: Action) {
    switch (action.type) {
        case ActionTypes.UPDATE_STATE:
            return {
                ...state,
                ...action.payload,
            };

        case ActionTypes.RESET_STATE:
            return initialInputState;

        default:
            return state;
    }
}

export function ContactForm({ className }: Props) {
    const [state, dispatch] = useReducer(inputReducer, initialInputState);

    function handleInputChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        dispatch({
            type: ActionTypes.UPDATE_STATE,
            payload: {
                [e.target.id]: e.target.value,
            },
        });
    }

    function isFormValid() {
        return (
            state.name.trim() &&
            state.email.trim() &&
            state.subject.trim() &&
            state.message.trim()
        );
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (state.loading) return;

        if (!isFormValid()) {
            return dispatch({
                type: ActionTypes.UPDATE_STATE,
                payload: {
                    error: { hasError: true, message: "Pleae fill all fields!" },
                },
            });
        }

        dispatch({
            type: ActionTypes.UPDATE_STATE,
            payload: { loading: true, error: { hasError: false, message: "" } },
        });

        console.log(state);

        setTimeout(() => {
            dispatch({
                type: ActionTypes.RESET_STATE,
                payload: initialInputState,
            });
        }, 2000);
    }

    return (
        <form className={className} onSubmit={handleSubmit}>
            <LabelInputContainer className="mb-4">
                <Label htmlFor="name">Name</Label>
                <Input
                    id="name"
                    placeholder="Abhishek Bhardwaj"
                    type="text"
                    value={state.name}
                    onChange={handleInputChange}
                />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
                <Label htmlFor="email">Email</Label>
                <Input
                    id="email"
                    placeholder="hello@imabhishek.online"
                    type="email"
                    value={state.email}
                    onChange={handleInputChange}
                />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
                <Label htmlFor="subject">Subject</Label>
                <Input
                    id="subject"
                    placeholder="Want to build a website"
                    type="text"
                    value={state.subject}
                    onChange={handleInputChange}
                />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
                <Label htmlFor="message">Message</Label>
                <Textarea
                    rows={3}
                    id="message"
                    placeholder="Looking for a proficient software developer skilled in React and Next.js for a specific project"
                    className="resize-none"
                    value={state.message}
                    onChange={handleInputChange}
                />
            </LabelInputContainer>

            <button
                className="group/btn relative h-12 w-full shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset] animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none"
                type="submit"
                disabled={state.loading}
            >
                {state.loading ? (
                    <span className="flex w-full justify-center items-center gap-2">
                        Wait! <LoadingIcon />
                    </span>
                ) : (
                    <span className="flex w-full justify-center items-center gap-2">
                        Submit <IoSendSharp />
                    </span>
                )}
                <BottomGradient />
            </button>

            <p className="mt-4 text-sm text-center text-red-500">
                {state.error.hasError &&
                    (state.error.message
                        ? state.error.message
                        : "Something went wrong! Please try again!")}
            </p>

            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-5 h-[1px] w-full" />
        </form>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LoadingIcon = () => {
    return (
        <svg
            aria-hidden="true"
            role="status"
            className="inline mr-3 w-5 h-5 text-blue-100 animate-spin"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB"
            ></path>
            <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
            ></path>
        </svg>
    );
};
