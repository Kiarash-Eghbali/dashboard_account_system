import { JSX } from "react/jsx-runtime";

const LoadingBox: React.FC = (): JSX.Element => {
    return ( 
        <>
            <div className="h-screen flex items-center justify-center">
                <h1 className="text-5xl text-blue-500 font-bold animate-pulse">Loading...</h1>
            </div>
        </>
    )
}

export default LoadingBox;