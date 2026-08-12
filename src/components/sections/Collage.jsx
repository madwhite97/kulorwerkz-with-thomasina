const tiles = [
    { id: 1, className: "col-span-1 row-span-1" },
    { id: 2, className: "col-span-1 row-span-1" },
    { id: 3, className: "col-span-1 row-span-1" },
    { id: 4, className: "col-span-1 row-span-1" },

    { id: 5, className: "col-span-1 row-span-2" },

    { id: "logo", className: "col-span-2 row-span-2" },

    {id: 6, className: "col-span-1 row-span-1" },
    { id: 7, className: "col-span-1 row-span-2" },

    { id: 8, className: "col-span-1 row-span-1" },
    { id: 9, className: "col-span-1 row-span-1" },
];

export default function Collage() {
    return (
        <div className="grid h-[92vh] grid-cols-4 gap-w">

            {tiles.map((tile) => {
                
                if (tile.id === "logo") {
                    return (
                        <div
                            key="logo"
                            className={`${tile.className} rounded-none border border-[#D4AF37]/20 bg-[#111] flex items-center justify-center`}
                        >
                            <div className="text-center">

                                <img
                                    src={logo}
                                    alt="Kulorwerkz with Thomasina"
                                    className="w-[80%] object-contain"
                                />

                                <p className="mt-5 italic text-neutral-300">
                                    with Thomasina
                                </p>

                            </div>
                        </div>
                    );
                }

                return (
                    <div
                        key={tile.id}
                        className={`${tile.className}
                            group
                            overflow-hidden
                            rounded-none
                            bg-neutral-800
                            transition-all
                            duration-500
                            hover:scale-[1.02]
                            hover:border
                            hover:border-[#D4AF37]/40`}
                    >
                        <div className="h-full w-full bg-gradient-to-br from-neutral-700 to-neutral-900 group-hover:scale-110 transition-transform duration-[3000ms]" />
                    </div>
                );
            })}
        </div>
    );
}