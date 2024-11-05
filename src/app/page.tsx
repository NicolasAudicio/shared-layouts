import Link from "next/link";

export default function DashboardPage(){
    return(
        <div className="container h-screen w-max  mx-auto my-auto flex flex-col justify-center">
        <Link href={"/dashboard"}>
            <button className="w-40 rounded-full bg-amber-500 p-2">Go to shared layouts</button>
        </Link>
    </div>
)
}