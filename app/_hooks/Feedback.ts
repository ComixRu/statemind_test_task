import {useState} from "react";

type UseFeedbackHook = {
    loading: boolean,
    sendFeedback: (data: string, onSuccess: () => void, onError: () => void) => void
}

export const useFeedback = () => {
    const [loading, setLoading] = useState(false);

    const sendFeedback = (data: string, onSuccess: () => void, onError: () => void) => {
        try {
            setLoading(true);

            setTimeout(() => {
                setLoading(false);
                onSuccess();
            }, 2000);
        } catch (error) {
            console.error('Ошибка при отправке формы:', error);
            setLoading(false);
            onError();
        }
    }
    return {
        loading,
        sendFeedback
    }
}