import React from 'react'

const Outils = ({name}) => {
  // console.log('porps',props)
  console.log('meriam',name)
  // same thing :   const name = props.name;
  // {name if we use the Comment utiliser les accessoires avec déstructuration
  // La différence est dans la première ligne de code. Au lieu de passer propsen argument, nous avons déstructuré et passé les variables en argument de la fonction.



  return (
    <div> 
         <h1>My name is {name}.</h1>
    <p>My favorite design tool is Figma.</p>
    </div>
  )
}

export default Outils