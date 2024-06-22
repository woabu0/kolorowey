function Service(props){
    return(
        <div className="flex flex-col items-center gap-5">
            <img src={props.img} className="w-10 h-10" />
            <h1 className="text-[10px] md:text-[16px] text-center">{props.title}</h1>
        </div>
    )
}
export default Service;