function ServiceCard({ service }) {

    const Icon = service.icon;

    return (

        <a
            href="#contact"
            className="service-card">

            <div className="service-icon">
                <Icon />
            </div>

            <h3>{service.title}</h3>

            <div className="gold-line" />

            <p>{service.description}</p>

            <span className="price">
                {service.price}
            </span>

        </a>

    );

}

export default ServiceCard;