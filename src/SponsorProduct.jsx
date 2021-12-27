const SponsorProduct = ({ name, image }) => {
    return (
        <div class="card">
            <div class="circle"></div>
            <div class="content">
                <h2>{name}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aspernatur animi reiciendis dolorem quae alias adipisci commodi.</p>
                <a href="#">Comprar</a>
            </div>
            <img src={image} alt="" />
        </div>
    );
}

export default SponsorProduct;