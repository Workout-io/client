export default function Popup() {
    return(
        <div className={'fixed inset-0 flex justify-center items-center transition-colors visible bg-black/50'}>
            <div className="bg-black text-white w-1/2 h-1/2">
            Hello
            </div>
        </div>
    );
}