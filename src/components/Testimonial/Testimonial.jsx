function Testimonial(props){
    return(
        <div className="flex items-center flex-col gap-3 text-center w-[360px] md:w-[345px] lg:w-[288px] h-[350px] rounded-[20px] border-[.5px] border-[#c4c4c4] p-10 md:p-5 hover:border-[#be4dec] cursor-pointer">
            <img src={props.img} className="w-[80px] h-[80px] rounded-[50px]" />
            <h1 className="text-[22px]">{props.name}</h1>
            <p className="text-[14px]">{props.testimonial}</p>
        </div>
    )
}
export default Testimonial;