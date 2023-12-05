import React, { useState } from 'react';
import Banner from '../../components/Banner'
import TextoPrimario from '../../components/TextoPrimario'
import TextoSecundario from '../../components/TextoSecundario';
import ButtonCalcular from '../../components/Button';
import Input from '../../components/Cards';


function Inicio(){
    const [precoEtanol, eventoEtanol] = useState('');
    const [precoGasolina, eventoGasolina] = useState('');

    const Etanol = (event) => {
        eventoEtanol(event.target.value);
    };

    const Gasolina = (event) => {
        eventoGasolina(event.target.value);
    };

    const Calcular = () => {
        const resultado = precoEtanol / precoGasolina
        if(resultado < 0.7){
            alert(`O cálculo será igual a ${resultado.toFixed(2)}. Portanto, compensa mais abastecer com Etanol`)
        }else{
            alert(`O cálculo será igual a ${resultado.toFixed(2)}. Portanto, compensa mais abastecer com Gasolina`)
        }
    };

    return (
        <>
            <Banner imagem='combustivel'/>
            <TextoPrimario>
                <h1>Você sabe com qual combustível compensa mais abastecer seu carro?</h1>
            </TextoPrimario>
            <TextoPrimario>
                <h1>Utilize a calculadora abaixo:</h1>
            </TextoPrimario>

            <TextoSecundario>
                <p>Preço - litro etanol (R$):</p>
            </TextoSecundario>
            <Input onChange={Etanol}/>

            <TextoSecundario>
                <p>Preço - litro gasolina (R$):</p>
            </TextoSecundario>
            <Input onChange={Gasolina}/>

            <ButtonCalcular title='Calcular' onClick={Calcular}/>
        </>
    )
}
export default Inicio;