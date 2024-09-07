
export const Token = () => {

    return <div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-2">
                <p className="pb-4">Base Token</p>
                <button className="border border-slate-400 p-2 w-72 rounded">connect wallet</button>
            </div>
            <div className="p-2">
                <p className="pb-4">Quote Token</p>
                <button className="border border-slate-400 p-2 w-72 rounded">connect wallet</button>
            </div>
        </div>
    </div>
}