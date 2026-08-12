import services from "../../data/services";
import ServiceCard from "./ServiceCard";

function ServicesGrid() {

    return (

        <div className="services-grid">

            {services.map((service) => (

                <ServiceCard
                    key={service.title}
                    service={service}
                />

            ))}

        </div>

    );

}

export default ServicesGrid;