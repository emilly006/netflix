import "./DetailsMovie.css"

import { FaStar } from "react-icons/fa6";
import { Md18UpRating } from "react-icons/md"
import { BsHandThumbsUpFill } from "react-icons/bs";
import peaklogo from "../Imagens/resgaste.text.jpg";

function DetailsMovie(){

    return(

        <>
            <img src={peaklogo} style={{height:"250px", width:"300px"}}/>
            
                                    <div className="description-details">
                                        <BsHandThumbsUpFill style={{color:"white",height:'25px',width:"25px"}}/>
                                        <strong>2023</strong>
                                        <Md18UpRating style={{color:"white",height:'40px',width:"40px"}}/>
                                        <strong> filme 2</strong>
            
                                        <div className="star">
                                            <FaStar style={{color:"yellow",height:'30px',width:"30px"}}/>
                                            <div className="description-start">
                                                <strong>8,7/10</strong>
                                                <strong>727 mil</strong>
                                            </div>
                                        </div>
            
                                    </div>
                                    
                                    <div class='text-details' style={{lineHeight:"1.4"}}>
                                        <strong>Um mercenário retorna à ação para salvar a família de um criminoso presa em uma prisão de alta segurança, enfrentando missões quase impossíveis..</strong>
                                    </div>
        </>

    )

}

export default DetailsMovie