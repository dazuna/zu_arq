import React from 'react';
import './proyectos.css';
import { logo } 
from "../img"

class Proyectos extends React.Component {
    render(){
        return (
            <div className="proyectos">
                <div className="nosTitle">PROYECTOS</div>
                <Gallery/>            
            </div>
        );
    }
}

class Gallery extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            idxPry: 0,
            galImg: [
                [logo,logo,logo,logo,logo,logo],
                [logo,logo,logo,logo,logo,logo],
                [logo,logo,logo,logo,logo,logo],
                [logo,logo,logo,logo,logo,logo],
                [logo,logo,logo,logo,logo,logo],
            ],
            pryNames: ["ZURICH","ZURICH","ZURICH","PRUDENTIAL","AYGÜEY"],
            pryDescs:[
                <div>
                    Oficina de Seguros<br/>Altavista, CDMX<br/>Proyecto & Coordinación de Obra<br/>450m2
                </div>,
                <div>
                    Oficina de Seguros<br/>Guadalajara, Jalisco<br/>Proyecto & Coordinación de Obra<br/>1008m2
                </div>,
                <div>
                    Oficina de Seguros<br/>Monterrey, Nuevo León<br/>Proyecto & Coordinación de Obra<br/>670m2
                </div>,
                <div>
                    Oficina de Agentes<br/>Antara Polanco, CDMX<br/>Proyecto & Coordinación de Obra<br/>650m2
                </div>,
                <div>
                    Tienda de Ropa                        
                    <br/>Aguascalientes, Aguascalientes<br/>Altabrisa, Villahermosa<br/>Galerías Torreón, Coahuila<br/>                     
                    Proyecto<br/>75m2
                </div>,
            ]
        };
    }

    nextGallery() {
        const idx = this.state.idxPry;
        if(this.state.idxPry === 4){
            this.setState({
                idxPry: 0,
            })
        }
        else{
            this.setState({
                idxPry: idx+1,
            })
        }
    }

    render() {
        let idxPry = this.state.idxPry;
        let galImg = this.state.galImg;
        let pryDescs = this.state.pryDescs;
        let pryNames = this.state.pryNames;
        return (
            <div>
            <div className="pry-content margin2">
                <div className="pry-left margin2">
                    <h1 className="pry-name margin2">
                        {pryNames[idxPry]}
                    </h1>
                    <div className="pry-desc margin2">
                        {pryDescs[idxPry]}
                    </div>
                </div>
                <div className="pry-right gallery margin2">
                    <div className="galeria">
                        {galImg[idxPry].map((x)=>{console.log(x); return(<img src={x} alt="whatever"/>) })}
                    </div>
                </div>                
            </div>
            <div className="pry-content margin2">
                <input 
                className="simple-button" 
                onClick={()=>this.nextGallery()}
                type="button" value="Next" />
            </div>
            </div>     
        )
    }
} 

export default Proyectos;