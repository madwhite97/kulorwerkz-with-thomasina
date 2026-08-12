import {
    Sparkles,
    Paintbrush2,
    Calendar,
    Heart,
    ArrowUpRight,
} from "lucide-react";

const items = [
    {
        icon: Sparkles,
        title: "Luxury Nails",
        href: "#services",
    },
    {
        icon: Paintbrush2,
        title: "Artistry",
        href: "#gallery",
    },
    {
        icon: Calendar,
        title: "Curated Experiences",
        href: "#contact",
    },
    {
        icon: ArrowUpRight,
        title: "Follow the Art",
        href: "https://instagram.com/thomidoinnails",
        external: true,
    },
    {
        icon: Heart,
        title: "Always With Love",
        href: "#contact",
    },
];

export default function SignatureStrip() {
    return (
        <section className="signature-strip">
            {items.map((item, index) => {
                const Icon = item.icon;

                return (
                    <a
                        key={item.title}
                        href={item.href}
                        className="signature-item"
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                    >
                        <Icon
                            size={18}
                            strokeWidth={1.6}
                        />

                        <span>{item.title}</span>

                        {index < items.length - 1 && (
                            <div className="signature-divider" />
                        )}
                    </a>
                );
            })}
        </section>
    );
}