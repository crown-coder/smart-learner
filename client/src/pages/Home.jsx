import { LuConstruction } from "react-icons/lu";
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <main className="w-full h-dvh flex flex-col items-center justify-center gap-3">
            <h1 className="text-2xl">Welcome to Unique Selves,</h1>
            <LuConstruction className="text-8xl" />
            <p className="text-lg">Sorry this page is under construction, but u can proceed to signup <b>Mentors Onlys</b> </p>
            <button className="py-2 px-3 rounded-lg text-white bg-blue-400">
                <Link to='/signup'>
                    Proceed to Sign up
                </Link>
            </button>
        </main>
    )
}

export default Home
