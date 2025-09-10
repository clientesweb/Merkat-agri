import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Productos - Merkat Agri | Trituradoras ORSI de Alta Tecnología",
  description:
    "Descubrí nuestra línea completa de trituradoras ORSI: OPTIMA, WLC, WPG, KING EXTRA, FRUIT EXTRA, VULCANIC y ENERGY. Tecnología italiana 100% made in Bologna.",
  keywords:
    "trituradoras ORSI, maquinaria agrícola, OPTIMA, WLC, WPG, KING EXTRA, FRUIT EXTRA, VULCANIC, ENERGY, Bologna Italia",
  openGraph: {
    title: "Productos - Merkat Agri",
    description: "Trituradoras ORSI de alta tecnología italiana para el agro",
    images: ["/images/banner-principal-productos.jpeg"],
  },
}

const products = [
  {
    id: 1,
    name: "OPTIMA 155",
    brand: "ORSI",
    image: "/images/products/optima-155.jpeg",
    description:
      "Trituradora trasera con martillos. Recomendada para césped, poda y ramas hasta 3-4 cm. Rodillo auto-limpiante.",
    slug: "orsi-optima-155",
    category: "Trituradoras",
  },
  {
    id: 2,
    name: "OPTIMA 180",
    brand: "ORSI",
    image: "/images/products/optima-180.jpeg",
    description:
      "Trituradora trasera con martillos. Recomendada para césped, poda y ramas hasta 3-4 cm. Rodillo auto-limpiante.",
    slug: "orsi-optima-180",
    category: "Trituradoras",
  },
  {
    id: 3,
    name: "WLC",
    brand: "ORSI",
    image: "/images/products/wlc-orsi.jpeg",
    description:
      "Trituradora trasera con martillos. Ideal para tractores 25-70 HP. Doble contra cuchillas y rueda libre.",
    slug: "orsi-wlc",
    category: "Trituradoras",
  },
  {
    id: 4,
    name: "WPG",
    brand: "ORSI",
    image: "/images/products/wpg-orsi.jpeg",
    description: "Trituradora trasera con rotor equilibrado. Para ramas hasta 8 cm. Doble bastidor de 6mm.",
    slug: "orsi-wpg",
    category: "Trituradoras",
  },
  {
    id: 5,
    name: "KING EXTRA",
    brand: "ORSI",
    image: "/images/products/king-extra-orsi.jpeg",
    description: "Trituradora trasera con rotor equilibrado. Para ramas hasta 12 cm. Doble bastidor Hardox.",
    slug: "orsi-king-extra",
    category: "Trituradoras",
  },
  {
    id: 6,
    name: "FRUIT EXTRA",
    brand: "ORSI",
    image: "/images/products/fruit-extra-orsi.jpeg",
    description: "Trituradora trasera con rotor equilibrado. Para ramas hasta 13 cm. Bastidor monocasco Hardox 6mm.",
    slug: "orsi-fruit-extra",
    category: "Trituradoras",
  },
  {
    id: 7,
    name: "VULCANIC",
    brand: "ORSI",
    image: "/images/products/vulcanic-orsi.jpeg",
    description: "Trituradora lateral con inclinación hidráulica hasta 90°. Para limpieza de zanjas y terraplenes.",
    slug: "orsi-vulcanic",
    category: "Trituradoras",
  },
  {
    id: 8,
    name: "ENERGY 105",
    brand: "ORSI",
    image: "/images/products/energy-105-orsi.jpeg",
    description: "Trituradora lateral con inclinación hidráulica. Para tractores 20-35 HP. Sistema auto-nivelador.",
    slug: "orsi-energy-105",
    category: "Trituradoras",
  },
]

const categories = ["Todos", "Trituradoras"]

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-black py-20 sm:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/banner-principal-productos.jpeg"
            alt="ORSI Trituradora - Tecnología Italiana"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white mb-6 leading-tight">
              <span className="text-[#ffdd02]">ORSI</span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-white mb-8 font-sans leading-relaxed">
              La marca que crea cortadoras de césped con alta tecnología y estilo,
              <span className="text-[#ffdd02] font-semibold"> 100% made in Italy</span>, utilizando el concepto
              tradicional de la historia de la fabricación italiana, especialmente en el área de{" "}
              <span className="text-[#ffdd02] font-semibold">Bolonia</span>.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
              <a
                href="#productos"
                className="bg-[#ffdd02] hover:bg-[#e6c402] text-black px-8 py-4 rounded-lg font-bold text-lg transition-colors font-display"
              >
                Ver Productos
              </a>
              <a
                href="https://wa.me/5492612210039?text=Hola%20Merkat%20Agri,%20me%20interesa%20conocer%20más%20sobre%20las%20trituradoras%20ORSI%20y%20su%20tecnología%20italiana."
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-lg font-bold text-lg transition-colors font-display"
              >
                Consultar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="productos" className="py-12 sm:py-16 lg:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
              Línea Completa <span className="text-[#ffdd02]">ORSI</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto font-sans">
              Trituradoras de alta tecnología italiana para todas las necesidades del agro
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden bg-gray-100">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-contain p-4 transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#D2691E] text-white px-3 py-1 rounded-full text-sm font-medium font-sans">
                      {product.brand}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-[#ffdd02] text-black px-3 py-1 rounded-full text-sm font-medium font-sans">
                      Made in Italy
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-900 mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-6 font-sans leading-relaxed">{product.description}</p>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <Link
                      href={`/productos/${product.slug}`}
                      className="inline-flex items-center text-[#D2691E] hover:text-[#B8541A] font-medium transition-colors font-sans"
                    >
                      Ver detalles completos
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>

                    <a
                      href={`https://wa.me/5492612210039?text=Hola%20Merkat%20Agri,%20me%20interesa%20obtener%20más%20información%20sobre%20${encodeURIComponent(product.name)}%20de%20${encodeURIComponent(product.brand)}.%20¿Podrían%20brindarme%20detalles%20sobre%20disponibilidad,%20precio%20y%20especificaciones%20técnicas?`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#ffdd02] hover:bg-[#D2691E] hover:text-white text-black px-6 py-3 rounded-lg font-medium transition-colors w-full sm:w-auto text-center font-sans"
                    >
                      Consultar precio
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white mb-4">
            ¿Necesitás asesoramiento técnico?
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 font-sans">
            Nuestro equipo especializado te ayuda a elegir la trituradora ORSI ideal para tu operación.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center bg-[#ffdd02] hover:bg-[#D2691E] hover:text-white text-black px-8 py-4 rounded-lg font-medium transition-colors text-lg font-display"
          >
            Contactar especialista
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
