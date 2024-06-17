interface IButton {
    name:string
    onClick: () => void;
}

const ResultButton:React.FC<IButton> = ({name, onClick}) => {
    return(
        <div className="ml-2 p-2 bg-gray-500 text-white rounded" onClick={onClick}>
            {name}
        </div>
    )
}

export default ResultButton