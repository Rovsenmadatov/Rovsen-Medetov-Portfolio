import PropTypes from "prop-types"




const ButtonPrimary = ({href,target,label,icon,classes,fileUrl,fileName}) =>{
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = fileUrl; 
        link.download = fileName || "Rovsen-Cv.pdf"; 
        link.click(); 
      };

    {
     if(href){
         return(
             <a href={href} target={target} className={"btn btn-primary " + classes}>
                 {label}
                 {icon 
                 ? <span className="material-symbols-rounded" aria-hidden="true">{icon}</span>
                 : undefined
                 }
             </a>
         )
     }else{
         return(
             <button onClick={handleDownload}  className={"btn btn-primary " + classes}>
                 {label}
 
                 {icon 
                 ? <span className="material-symbols-rounded" aria-hidden="true">{icon}</span>
                 : undefined
                 }
             </button>
         )
     }
 }
}

const ButtonOutline = ({href,target,label,icon,classes}) => {

    {
     if(href){
         return(
             <a href={href} target={target} className={"btn btn-outline " + classes}>
                 {label}
                 {icon 
                 ? <span className="material-symbols-rounded" aria-hidden="true">{icon}</span>
                 : undefined
                 }
             </a>
         )
     }else{
         return(
             <button className={"btn btn-outline " + classes}>
                 {label}
 
                 {icon 
                 ? <span className="material-symbols-rounded" aria-hidden="true">{icon}</span>
                 : undefined
                 }
             </button>
         )
     }
 }
}

ButtonPrimary.propTypes={
    label:PropTypes.string.isRequired,
    href:PropTypes.string,
    target:PropTypes.string,
    icon:PropTypes.string,
    classes:PropTypes.string
}

export{
    ButtonPrimary,
    ButtonOutline
}

