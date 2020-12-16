import CartWidget from './CartWidget.js';

function NavBar() {

  return (
    <>
       <nav>
           <h1>A&M</h1>
           <ul>
               <li>Secciones</li>
               <li>Marcas</li>
               <li>
                   <CartWidget/>
               </li>
           </ul>
       </nav>
    </>
  );
}

export default NavBar