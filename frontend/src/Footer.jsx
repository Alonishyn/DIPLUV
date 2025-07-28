
export default function Footer({contactRef}) {

    return (<>
        <footer className="relative flex h-20 w-full bg-gray-950 bottom-0 left-0 border-t-amber-50 border-2 " ref={contactRef}>
            <div className="w-[50%] h-[100%] justify-items-center">
                <h1 className="text-amber-50 font-medium text-2xl ml-10 mt-1.5">Milano</h1>
                <p className="text-amber-50 ml-10 mt-1">Via </p>
            </div>
            <div className="w-[50%] h-[100%] justify-items-center">
                <p className="text-amber-50 font-medium text-[18px]  mt-2">Tel: +39</p>
                <p className="text-amber-50 font-medium text-[18px] ">Telegram: @</p>
            </div>
        </footer>
    </>)
}