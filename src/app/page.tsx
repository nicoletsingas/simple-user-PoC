'use client';
import UserEdit from '@/app/components/user/UserEdit';
import UserProfile from '@/app/components/user/UserProfile';

export default function Home() {
    return (
        <div className="flex flex-row w-screen mx20 justify-center items-center mt-20 gap-10 p-5">
            <UserEdit />
            <UserProfile />
        </div>
    );
}
