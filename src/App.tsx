import React, { useEffect, useState } from 'react';
import Button from "./components/button";
import Number from "./components/number";
import "./css/style.css";


//funcao com o nome do componente, a função retorna um html atrvés do jsx
function App() {

  //criando um estado vulgo varivael, feito com uma desconstrução do array
  const [numero1, setNumero1] = useState("");//use state retorna um array
  const [numero2, setNumero2] = useState("");//use state retorna um array
  const [calculo, setCalculo] = useState(0);



  function diminuir() {
    setCalculo( parseInt(numero1) - parseInt(numero2));
  }
  function aumentar() {
    setCalculo( parseInt(numero1) + parseInt(numero2));
    
  }
  function multiplicar() {
    setCalculo( parseInt(numero1) * parseInt(numero2));
  }
  function dividir() {
    setCalculo( parseInt(numero1) / parseInt(numero2));
  }

  function limpar(){
    setNumero1("");
    setNumero2("");
    setCalculo(0);
  }


  return (
    <main>
     
    <div>
    <h2>Calculadora do Yago</h2>
      <form>
    <Number>
    <label >Primeiro Número:</label>
    <input type="number" name="numero1" id={numero1} value={numero1} onChange={(e) => setNumero1(e.target.value)}/>
    <label >Segundo Número:</label>
    <input type="number" name="numero2" id={numero2} value={numero2} onChange={(e) => setNumero2(e.target.value)} />
    <label >Resultado:</label>
    <input type="number" name="calculo" id="calculo" style={{color:"red"}} value={calculo}/>
    </Number>
    </form>
    <Button className='diminuir' onClick = {diminuir} texto = "-"></Button>
    <Button className='aumentar' onClick = {aumentar} texto = "+"></Button>
    <Button className='multiplicar'onClick = {multiplicar} texto = "x"></Button>
    <Button className='dividir'onClick = {dividir} texto = "/"></Button> 
    <Button className='limpar' onClick = {limpar} texto = "Limpar"></Button> 
   </div>
    </main>
   
   
  );
}

export default App;
