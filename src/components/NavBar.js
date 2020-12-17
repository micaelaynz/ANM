import CartWidget from './CartWidget.js';

function NavBar() {

  return (
    <>
       <nav>
           <a href="#">A&M</a>
           <a href="#">Marcas</a>
           <a href="#">Mi perfil</a>
         <CartWidget/>
       </nav>
    </>
  );
}

export default NavBar