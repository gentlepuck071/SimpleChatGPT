interface ITitle {
    title:string
    titleColor:string
}

const GPTTitle:React.FC<ITitle> = ({title, titleColor}) => {
    return(
        <div className="text-3xl font-bold flex justify-center items-center text-center mt-[6rem]" style={{color:titleColor}}>
            {title}
        </div>
    )
}

export default GPTTitle