import React from "react"
{about DataTransfer.map ((curelement) =>{
    const { id,title,info} = curelement ;
    return{
        <>
        < div className="row our-services-info"key={id}>
        <div className="col-1 our-service-number">{id}</div>
        <div className="col-10 our-service-data">
        <h2>{title}</h2>
        <p className="main-hero-para">{info}</p>
        </div>
        </div>
        </>
    
    };
})}

<br/>
<button className="btn-style btn-style-border"> Learn more
</button>
</div>
<div className="col-12 col-lg-5 our service-right side-img">
    <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fflowers&psig=AOvVaw1YBl3XEI-OWdka7ai5B24X&ust=1679591475871000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCLjdmvyD8P0CFQAAAAAdAAAAABAE" />

</div>
</div>
</section>
</>
);
};
 export default about