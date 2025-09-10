import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"

const products = [
  {
    id: 1,
    name: "OPTIMA 155",
    brand: "ORSI",
    image: "/images/products/orsi-optima.jpeg",
    slug: "orsi-optima-155",
    category: "Trituradoras",
    shortDescription:
      "Trituradora trasera con martillos. Recomendada para césped, poda y ramas hasta 3-4 cm. Rodillo auto-limpiante.",
    fullDescription:
      "La OPTIMA 155 es una trituradora trasera con martillos diseñada para trabajos de mantenimiento de césped, poda y trituración de ramas de hasta 3-4 cm de diámetro. Su rodillo de soporte trasero auto-limpiante reduce el consumo de potencia del tractor.",
    tractorRange: "25 a 40 HP",
    specifications: [
      "Dos contra cuchillas para corte preciso",
      "Desplazamiento hidráulico con tubos de acero cromado",
      "Bastidor con lado externo biselado",
      "Rueda libre en los engranajes",
      "Rotor balanceado electrónicamente",
      "Rodillo trasero auto limpiante",
      "Tensores de correa semi-automático",
      "Rotor helicoidal 'Helicocut'",
    ],
    applications: [
      "Trituración de césped",
      "Poda de jardines y parques",
      "Mantenimiento de espacios verdes",
      "Trituración de ramas pequeñas hasta 3-4 cm",
    ],
    benefits: [
      "Consumo mínimo de potencia del tractor",
      "Auto-limpieza del rodillo trasero",
      "Corte preciso con doble contra cuchilla",
      "Operación suave con rueda libre",
    ],
    downloads: [
      { name: "Ficha Técnica OPTIMA 155", file: "/downloads/orsi-optima-155-ficha-tecnica.pdf", type: "PDF" },
      { name: "Manual de Usuario", file: "/downloads/orsi-optima-155-manual.pdf", type: "PDF" },
    ],
  },
  {
    id: 2,
    name: "OPTIMA 180",
    brand: "ORSI",
    image: "/images/products/orsi-optima.jpeg",
    slug: "orsi-optima-180",
    category: "Trituradoras",
    shortDescription:
      "Trituradora trasera con martillos. Recomendada para céspad, poda y ramas hasta 3-4 cm. Rodillo auto-limpiante.",
    fullDescription:
      "La OPTIMA 180 es una trituradora trasera con martillos diseñada para trabajos de mantenimiento de césped, poda y trituración de ramas de hasta 3-4 cm de diámetro. Su rodillo de soporte trasero auto-limpiante reduce el consumo de potencia del tractor.",
    tractorRange: "25 a 40 HP",
    specifications: [
      "Dos contra cuchillas para corte preciso",
      "Desplazamiento hidráulico con tubos de acero cromado",
      "Bastidor con lado externo biselado",
      "Rueda libre en los engranajes",
      "Rotor balanceado electrónicamente",
      "Rodillo trasero auto limpiante",
      "Tensores de correa semi-automático",
      "Rotor helicoidal 'Helicocut'",
    ],
    applications: [
      "Trituración de césped",
      "Poda de jardines y parques",
      "Mantenimiento de espacios verdes",
      "Trituración de ramas pequeñas hasta 3-4 cm",
    ],
    benefits: [
      "Consumo mínimo de potencia del tractor",
      "Auto-limpieza del rodillo trasero",
      "Corte preciso con doble contra cuchilla",
      "Operación suave con rueda libre",
    ],
    downloads: [
      { name: "Ficha Técnica OPTIMA 180", file: "/downloads/orsi-optima-180-ficha-tecnica.pdf", type: "PDF" },
      { name: "Manual de Usuario", file: "/downloads/orsi-optima-180-manual.pdf", type: "PDF" },
    ],
  },
  {
    id: 3,
    name: "WLC",
    brand: "ORSI",
    image: "/images/products/orsi-wlc.jpeg",
    slug: "orsi-wlc",
    category: "Trituradoras",
    shortDescription:
      "Trituradora trasera con martillos. Ideal para tractores 25-70 HP. Doble contra cuchillas y rueda libre.",
    fullDescription:
      "La WLC es una trituradora trasera con martillos recomendada para la trituración de césped, poda y ramas de hasta 4-5 cm de diámetro. Máquina ideal para trabajar con tractores de 25 HP hasta 70 HP.",
    tractorRange: "25 a 70 HP",
    specifications: [
      "Máquina con púas de retención",
      "Rueda libre en los engranajes",
      "Doble contra cuchillas",
      "Bastidor con lado externo biselado",
      "Rodamiento de dos hileras de esferas",
      "Desplazamiento hidráulico con tubos de acero cromado",
      "Medidas disponibles: 85, 120, 160, 200 cm",
    ],
    applications: [
      "Trituración de césped",
      "Poda y mantenimiento",
      "Trituración de ramas hasta 4-5 cm",
      "Trabajos en espacios verdes",
    ],
    benefits: [
      "Bastidor con lado externo biselado",
      "Rueda libre en el grupo",
      "Rodamientos oscilantes con rueda de doble bola",
      "Rodillo de limpieza automático",
    ],
    downloads: [
      { name: "Ficha Técnica WLC", file: "/downloads/orsi-wlc-ficha-tecnica.pdf", type: "PDF" },
      { name: "Manual de Operación", file: "/downloads/orsi-wlc-manual.pdf", type: "PDF" },
    ],
  },
  {
    id: 4,
    name: "WPG",
    brand: "ORSI",
    image: "/images/products/orsi-wpg.jpeg",
    slug: "orsi-wpg",
    category: "Trituradoras",
    shortDescription: "Trituradora trasera con rotor equilibrado. Para ramas hasta 8 cm. Doble bastidor de 6mm.",
    fullDescription:
      "La WPG es una trituradora trasera con rotor equilibrado electrónicamente, disponible con martillos. Recomendada para la trituración de césped, podas y ramas de hasta 8 cm de diámetro. Cuenta con doble bastidor y desplazamiento hidráulico.",
    tractorRange: "65 a 130 HP",
    specifications: [
      "Doble bastidor de 6 mm",
      "Desplazamiento hidráulico con tubos de acero cromado",
      "Transmisión lateral de 58 cm de altura",
      "Rueda libre en los engranajes",
      "Rodillo trasero autolimpiante Ø 194 mm",
      "Doble contra cuchillas",
      "Medidas disponibles: 180, 200, 250, 280, 300, 320 cm",
    ],
    applications: [
      "Trituración de césped y podas",
      "Ramas hasta 8 cm de diámetro",
      "Trabajo cerca de plantas sin dañarlas",
      "Mantenimiento forestal",
    ],
    benefits: [
      "Doble fila de contra cuchillas",
      "Soporte externo del rotor en acero prensado",
      "Doble brida en rotor",
      "Rodillo de limpieza automático",
    ],
    downloads: [
      { name: "Ficha Técnica WPG", file: "/downloads/orsi-wpg-ficha-tecnica.pdf", type: "PDF" },
      { name: "Manual Técnico", file: "/downloads/orsi-wpg-manual.pdf", type: "PDF" },
    ],
  },
  {
    id: 5,
    name: "KING EXTRA",
    brand: "ORSI",
    image: "/images/products/orsi-king-extra.jpeg",
    slug: "orsi-king-extra",
    category: "Trituradoras",
    shortDescription: "Trituradora trasera con rotor equilibrado. Para ramas hasta 12 cm. Doble bastidor Hardox.",
    fullDescription:
      "La KING EXTRA es una trituradora trasera con rotor equilibrado electrónicamente, disponible con martillos. Recomendada para la trituración de césped, podas y ramas de hasta 12 cm de diámetro. Doble bastidor en Hardox para máxima resistencia.",
    tractorRange: "50 a 120 HP",
    specifications: [
      "Doble bastidor en Hardox",
      "Desplazamiento hidráulico",
      "Rodamiento rotor de dos hileras de rodillos a rótula",
      "Rueda libre en los engranajes",
      "Caja redondeada en el lado externo",
      "Aletas de protección 6 mm en Hardox",
      "Medidas disponibles: 160, 180, 200, 250, 280, 300, 320 cm",
    ],
    applications: [
      "Trituración de césped y podas",
      "Ramas hasta 12 cm de diámetro",
      "Trabajos forestales intensivos",
      "Mantenimiento de grandes superficies",
    ],
    benefits: [
      "Tres filas de contra cuchillas",
      "Soporte externo del rotor en acero prensado",
      "Doble brida en rotor",
      "Tensor de correas automático",
    ],
    downloads: [
      { name: "Ficha Técnica KING EXTRA", file: "/downloads/orsi-king-extra-ficha-tecnica.pdf", type: "PDF" },
      { name: "Manual de Mantenimiento", file: "/downloads/orsi-king-extra-manual.pdf", type: "PDF" },
    ],
  },
  {
    id: 6,
    name: "FRUIT EXTRA",
    brand: "ORSI",
    image: "/images/products/orsi-fruit-extra.jpeg",
    slug: "orsi-fruit-extra",
    category: "Trituradoras",
    shortDescription:
      "Trituradora trasera con rotor equilibrado. Para ramas hasta 13 cm. Bastidor monocasco Hardox 6mm.",
    fullDescription:
      "La FRUIT EXTRA es una trituradora trasera con rotor equilibrado electrónicamente, disponible con martillos. Recomendada para la trituración de césped, podas y ramas de hasta 13 cm de diámetro. Bastidor monocasco en Hardox de 6mm para máxima durabilidad.",
    tractorRange: "60 a 150 HP",
    specifications: [
      "Bastidor con espesor de 6 mm totalmente en Hardox",
      "Desplazamiento hidráulico en hierro fundido",
      "Tubos de acero templado y cromado",
      "Rodamiento rotor de dos hileras de rodillos a rótula",
      "Rueda libre en los engranajes",
      "Aletas de protectores 6 mm en Hardox",
      "Medidas: 200, 230, 250, 280, 300, 320 cm",
    ],
    applications: [
      "Trituración en frutales",
      "Podas intensivas hasta 13 cm",
      "Trabajos forestales profesionales",
      "Mantenimiento de plantaciones",
    ],
    benefits: [
      "Estructura monocasco en Hardox 6 mm",
      "Rotor 'ventilador' equilibrado electrónicamente",
      "4 barras de contra cuchillas",
      "Cojinetes oscilantes con doble corona de rodillos",
    ],
    downloads: [
      { name: "Ficha Técnica FRUIT EXTRA", file: "/downloads/orsi-fruit-extra-ficha-tecnica.pdf", type: "PDF" },
      { name: "Guía de Instalación", file: "/downloads/orsi-fruit-extra-manual.pdf", type: "PDF" },
    ],
  },
  {
    id: 7,
    name: "VULCANIC",
    brand: "ORSI",
    image: "/images/products/orsi-vulcanic.jpeg",
    slug: "orsi-vulcanic",
    category: "Trituradoras",
    shortDescription:
      "Trituradora lateral con inclinación hidráulica hasta 90°. Para limpieza de zanjas y terraplenes.",
    fullDescription:
      "La VULCANIC es una trituradora lateral adecuada para la limpieza de muelles, zanjas, terraplenes, jardines y áreas verdes. Equipada con inclinación hidráulica hasta 90° para poda y trituración de setos. Sistema de seguridad Anti shock de serie.",
    tractorRange: "40 a 80 HP",
    specifications: [
      "Posición de la caja de engranajes interior",
      "Cardán 5 x 2000 1'3/8 Z6+1'3/8 Z6",
      "Inclinación hidráulica hasta 90°",
      "Desplazamiento lateral hidráulico",
      "Bastidor monocasco con espesor de 4 mm",
      "Sistema de seguridad Anti shock",
      "Medidas disponibles: 135, 165, 200 cm",
    ],
    applications: [
      "Limpieza de muelles y zanjas",
      "Mantenimiento de terraplenes",
      "Poda de setos hasta 90°",
      "Trituración de ramas hasta 4-5 cm",
    ],
    benefits: [
      "Rodillo de limpieza automática",
      "Dos contra cuchillas",
      "Rueda libre en el grupo",
      "Rodamiento oscilante con rueda de doble bola",
    ],
    downloads: [
      { name: "Ficha Técnica VULCANIC", file: "/downloads/orsi-vulcanic-ficha-tecnica.pdf", type: "PDF" },
      { name: "Manual de Seguridad", file: "/downloads/orsi-vulcanic-manual.pdf", type: "PDF" },
    ],
  },
  {
    id: 8,
    name: "ENERGY 105",
    brand: "ORSI",
    image: "/images/products/orsi-energy.jpeg",
    slug: "orsi-energy-105",
    category: "Trituradoras",
    shortDescription:
      "Trituradora lateral con inclinación hidráulica. Para tractores 20-35 HP. Sistema auto-nivelador.",
    fullDescription:
      "La ENERGY 105 es una trituradora lateral adecuada para la limpieza de muelles, zanjas, terraplenes, jardines y áreas verdes. Equipada con inclinación hidráulica hasta 90° para poda y trituración de setos. Recomendada para ramitas hasta 2.5 cm de diámetro.",
    tractorRange: "20 a 35 HP",
    specifications: [
      "Posición de la caja de engranajes interior",
      "Cardán 4 x 1200 1'3/8 Z6+1'3/8 Z6",
      "Estructura de chasis monocasco espesor 3 mm",
      "Desplazamiento lateral hidráulico",
      "Seguridad mecánica y sistema autonivelador con biela",
      "Inclinación hidráulica",
      "Medidas disponibles: 130, 155 cm",
    ],
    applications: [
      "Limpieza de muelles y zanjas",
      "Mantenimiento de jardines",
      "Poda de setos pequeños",
      "Trituración de ramitas hasta 2.5 cm",
    ],
    benefits: [
      "Rodillo de limpieza automática",
      "Sistema auto-nivelador con biela",
      "Rueda libre en el grupo",
      "Rodamiento oscilante con rueda de doble bola",
    ],
    downloads: [
      { name: "Ficha Técnica ENERGY 105", file: "/downloads/orsi-energy-105-ficha-tecnica.pdf", type: "PDF" },
      { name: "Manual Básico", file: "/downloads/orsi-energy-105-manual.pdf", type: "PDF" },
    ],
  },
]

interface ProductPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    return {
      title: "Producto no encontrado - Balboa Agromaquinas",
    }
  }

  return {
    title: `${product.name} - ${product.brand} | Balboa Agromaquinas`,
    description: product.shortDescription,
    keywords: `${product.name}, ${product.brand}, ${product.category}, maquinaria agrícola, Balboa Agromaquinas`,
    openGraph: {
      title: `${product.name} - ${product.brand}`,
      description: product.shortDescription,
      images: [product.image],
    },
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Breadcrumb */}
      <nav className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm font-sans">
            <Link href="/" className="text-gray-500 hover:text-[#D2691E] transition-colors">
              Inicio
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/productos" className="text-gray-500 hover:text-[#D2691E] transition-colors">
              Productos
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </nav>

      {/* Product Details */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              {products.findIndex((p) => p.slug === product.slug) > 0 && (
                <Link
                  href={`/productos/${products[products.findIndex((p) => p.slug === product.slug) - 1].slug}`}
                  className="inline-flex items-center text-[#D2691E] hover:text-[#B8541A] font-medium transition-colors font-sans"
                >
                  <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Producto anterior
                </Link>
              )}
            </div>
            <div>
              {products.findIndex((p) => p.slug === product.slug) < products.length - 1 && (
                <Link
                  href={`/productos/${products[products.findIndex((p) => p.slug === product.slug) + 1].slug}`}
                  className="inline-flex items-center text-[#D2691E] hover:text-[#B8541A] font-medium transition-colors font-sans"
                >
                  Siguiente producto
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
            {/* Product Image */}
            <div className="relative h-96 sm:h-[500px] lg:h-[600px] bg-white rounded-xl shadow-lg overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-contain p-6"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#D2691E] text-white px-3 py-1 rounded-full text-sm font-medium font-sans">
                    {product.brand}
                  </span>
                  <span className="bg-[#ffdd02] text-black px-3 py-1 rounded-full text-sm font-medium font-sans">
                    {product.category}
                  </span>
                  {product.tractorRange && (
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium font-sans">
                      {product.tractorRange}
                    </span>
                  )}
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
                  {product.name}
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 font-sans leading-relaxed">{product.fullDescription}</p>
              </div>

              {/* Downloads Section */}
              {product.downloads && product.downloads.length > 0 && (
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-display font-bold text-gray-900 mb-4">Descargas Disponibles</h3>
                  <div className="space-y-3">
                    {product.downloads.map((download, index) => (
                      <a
                        key={index}
                        href={download.file}
                        download
                        className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-[#D2691E] hover:bg-[#D2691E] hover:text-white transition-colors group"
                      >
                        <svg
                          className="w-5 h-5 text-red-500 group-hover:text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <div className="flex-1">
                          <p className="font-medium font-sans">{download.name}</p>
                          <p className="text-sm text-gray-500 group-hover:text-gray-200">{download.type}</p>
                        </div>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                          />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`https://wa.me/5492612210039?text=Hola%20Balboa%20Agromaquinas,%20me%20interesa%20obtener%20información%20detallada%20sobre%20${encodeURIComponent(product.name)}%20de%20${encodeURIComponent(product.brand)}.%20¿Podrían%20brindarme%20especificaciones%20técnicas,%20disponibilidad%20y%20cotización?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#ffdd02] hover:bg-[#D2691E] hover:text-white text-black px-8 py-4 rounded-lg font-medium transition-colors text-center font-display text-lg"
                >
                  Solicitar Cotización
                </a>
                <Link
                  href="/contacto"
                  className="border-2 border-[#D2691E] text-[#D2691E] hover:bg-[#D2691E] hover:text-white px-8 py-4 rounded-lg font-medium transition-colors text-center font-display text-lg"
                >
                  Contactar Asesor
                </Link>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mb-6">
                Especificaciones Técnicas
              </h2>
              <ul className="space-y-3">
                {product.specifications.map((spec, index) => (
                  <li key={index} className="flex items-start gap-3 font-sans">
                    <svg
                      className="w-5 h-5 text-[#D2691E] mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              {/* Applications */}
              <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mb-6">Aplicaciones</h2>
                <ul className="space-y-3">
                  {product.applications.map((app, index) => (
                    <li key={index} className="flex items-start gap-3 font-sans">
                      <svg
                        className="w-5 h-5 text-[#ffdd02] mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{app}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mb-6">Beneficios</h2>
                <ul className="space-y-3">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3 font-sans">
                      <svg
                        className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="bg-gray-900 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white mb-4">Otros Productos</h2>
            <p className="text-lg sm:text-xl text-gray-300 font-sans">
              Explorá nuestra gama completa de maquinaria agrícola
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter((p) => p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/productos/${relatedProduct.slug}`}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative h-48 bg-gray-100">
                    <Image
                      src={relatedProduct.image || "/placeholder.svg"}
                      alt={relatedProduct.name}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-display font-bold text-gray-900 mb-2 line-clamp-2">{relatedProduct.name}</h3>
                    <p className="text-sm text-gray-600 font-sans">{relatedProduct.brand}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}
