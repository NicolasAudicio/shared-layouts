import {ReactNode} from "react";
import Link from "next/link";

export default function DashboardPage({
    children,
    slot1,
    slot2,
    slot3,
                                      }:{
    children:React.ReactNode;
    slot1:React.ReactNode;
    slot2:React.ReactNode;
    slot3:React.ReactNode;
}) {
    return (
        <div className="flex h-dvh w-dvw flex-col items-center space-around gap-3">
            {children}
            {slot1}
            {slot3}
            {slot2}
            <Link href={"/"}>
                <button className="w-40 rounded-full bg-amber-500 p-2">Go to Home</button>
            </Link>
        </div>
    )
}