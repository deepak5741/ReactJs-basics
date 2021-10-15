// import React from 'react'
// import '../style/footer.css'

// const Footer = () => {
//     return (
//         <div>
// <footer>
// <div className="container" >
// <div>
// <ul>
// <li>Career</li>
// <li>Service</li>
// <li>Not ur business</li>

// </ul>

// </div>
// <div className="soical" >
// <ul>
// <li><i class="fab fa-instagram"></i></li>
// <li><i class="fab fa-twitter"></i></li>
// <li><i class="fab fa-facebook"></i></li>

// </ul>

// </div>
// </div>

// </footer>
//         </div>
//     )
// }

// export default Footer



import React from 'react'
import '../style/footer.css'

const Footer = () => {

const till = new Date().getFullYear()

    return (
        <div>
            
<footer>
    <div className="infoot" >
<div>

<ul className="sp" >

<li>Dark Career</li>
<li>Dont Contact us</li>
<li>RIP</li>

</ul>

</div>
<div>
<ul className="sm" >
<li><i class="fab fa-instagram"></i></li>
<li><i class="fab fa-facebook"></i></li>
<li><i class="fab fa-twitter"></i></li>

</ul>

</div>
</div>
<p>Copy rights {till} </p>
</footer>

        </div>
    )
}

export default Footer
