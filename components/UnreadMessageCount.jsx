'use client';
import { useGlobalContext } from '@/context/GlobalContext';

const UnreadMessageCount = ({ mobile }) => {
    const { unreadCount } = useGlobalContext();

    return unreadCount > 0 ? (
        <span
            className={
                mobile
                    ? 'ml-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full'
                    : 'absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full'
            }
        >
            {unreadCount}
        </span>
    ) : null;
};

export default UnreadMessageCount;
