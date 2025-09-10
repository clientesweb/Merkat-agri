import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Users, Award } from "lucide-react"

const newsArticles = [
  {
    id: 1,
    title: "ORSI: Innovación Italiana en Maquinaria Agrícola",
    excerpt:
      "Descubre la excelencia de las trituradoras ORSI, fabricadas en Italia con más de 40 años de experiencia en tecnología agrícola. Conoce por qué somos el distribuidor oficial en Argentina.",
    image: "/images/nosotros-banner-principal.jpeg",
    date: "Noviembre 2024",
    category: "Productos",
    featured: true,
    icon: <Award className="h-5 w-5" />,
    content: `
      <p>Merkat Agri se enorgullece de ser el distribuidor oficial de ORSI en Argentina, trayendo la mejor tecnología italiana en trituradoras agrícolas.</p>
      
      <h3>¿Por qué elegir ORSI?</h3>
      <ul>
        <li><strong>Tradición italiana:</strong> Más de 40 años fabricando maquinaria de calidad superior</li>
        <li><strong>Tecnología avanzada:</strong> Rotores balanceados electrónicamente y sistemas hidráulicos de precisión</li>
        <li><strong>Versatilidad:</strong> Equipos para viñedos, frutales, campos y mantenimiento de espacios verdes</li>
        <li><strong>Durabilidad:</strong> Construcción robusta con materiales de primera calidad</li>
      </ul>
      
      <p>Desde las series OPTIMA hasta los modelos KING EXTRA, cada trituradora ORSI representa la perfecta combinación entre tradición artesanal italiana y tecnología moderna.</p>
    `,
  },
  {
    id: 2,
    title: "Nueva Línea ORSI FRUIT EXTRA: Especializada para Frutales",
    excerpt:
      "Presentamos la línea FRUIT EXTRA de ORSI, diseñada específicamente para el mantenimiento de cultivos frutales con tecnología de vanguardia y máxima eficiencia.",
    image: "/images/products/orsi-fruit-extra.jpeg",
    date: "Octubre 2024",
    category: "Productos",
    featured: false,
    icon: <Users className="h-5 w-5" />,
    content: `
      <p>La nueva línea FRUIT EXTRA de ORSI está especialmente diseñada para el mantenimiento de cultivos frutales, ofreciendo precisión y eficiencia incomparables.</p>
      
      <h3>Características destacadas:</h3>
      <ul>
        <li><strong>Rotor balanceado:</strong> Tecnología italiana para máxima estabilidad</li>
        <li><strong>Deflector ajustable:</strong> Control preciso del material triturado</li>
        <li><strong>Rango de potencia:</strong> 60-150 HP para diferentes necesidades</li>
        <li><strong>Construcción robusta:</strong> Diseñada para trabajo intensivo en frutales</li>
      </ul>
    `,
  },
  {
    id: 3,
    title: "Servicio Técnico Especializado ORSI en Mendoza",
    excerpt:
      "Merkat Agri amplía su servicio técnico especializado en equipos ORSI, ofreciendo mantenimiento, reparaciones y repuestos originales en toda la región de Cuyo.",
    image: "/images/nosotros-4.jpeg",
    date: "Septiembre 2024",
    category: "Servicios",
    featured: false,
    icon: <MapPin className="h-5 w-5" />,
    content: `
      <p>Nuestro compromiso con la excelencia nos llevó a especializar completamente nuestro servicio técnico en equipos ORSI, garantizando el máximo rendimiento de tu inversión.</p>
      
      <h3>Servicios especializados:</h3>
      <ul>
        <li><strong>Mantenimiento preventivo:</strong> Programas personalizados para cada equipo</li>
        <li><strong>Repuestos originales ORSI:</strong> Stock permanente de piezas genuinas</li>
        <li><strong>Servicio a domicilio:</strong> Atención técnica en tu campo</li>
        <li><strong>Capacitación técnica:</strong> Entrenamiento para operadores</li>
      </ul>
    `,
  },
]

export default function NewsGrid() {
  const featuredArticle = newsArticles.find((article) => article.featured)
  const regularArticles = newsArticles.filter((article) => !article.featured)

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-yellow-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
            <span className="text-[#B8860B]">ÚLTIMAS</span> NOVEDADES
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto font-sans">
            Mantente al día con las últimas noticias, eventos y desarrollos de Merkat Agri. Descubre cómo seguimos
            innovando con la tecnología ORSI para el campo argentino.
          </p>
        </div>

        {/* Featured Article */}
        {featuredArticle && (
          <div className="mb-16">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 lg:h-96 overflow-hidden">
                  <Image
                    src={featuredArticle.image || "/placeholder.svg"}
                    alt={featuredArticle.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#ffdd02] text-black px-3 py-1 rounded-full text-sm font-bold font-display">
                      DESTACADO
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-[#D2691E] mb-4">
                    {featuredArticle.icon}
                    <span className="text-sm font-semibold font-sans">{featuredArticle.category}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-sm text-gray-600 font-sans">{featuredArticle.date}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4 leading-tight">
                    {featuredArticle.title}
                  </h2>

                  <p className="text-gray-600 mb-8 font-sans leading-relaxed text-lg">{featuredArticle.excerpt}</p>

                  <Button
                    asChild
                    className="bg-[#ffdd02] hover:bg-[#e6c402] text-black font-bold px-8 py-3 rounded-lg transition-all duration-300 group/btn w-fit font-display"
                  >
                    <Link href={`/novedades/${featuredArticle.id}`} className="flex items-center gap-2">
                      Leer artículo completo
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Articles Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {regularArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-[#D2691E] mb-3">
                  {article.icon}
                  <span className="text-sm font-semibold font-sans">{article.category}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm text-gray-600 font-sans">{article.date}</span>
                </div>

                <h3 className="text-xl font-display font-bold text-gray-900 mb-3 leading-tight">{article.title}</h3>

                <p className="text-gray-600 mb-4 font-sans leading-relaxed">{article.excerpt}</p>

                <Button
                  asChild
                  variant="outline"
                  className="border-[#ffdd02] text-[#D2691E] hover:bg-[#ffdd02] hover:text-black transition-all duration-300 font-display font-semibold bg-transparent"
                >
                  <Link href={`/novedades/${article.id}`} className="flex items-center gap-2">
                    Leer más
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mb-4">
              ¿Quieres estar al día con nuestras <span className="text-[#D2691E]">novedades</span>?
            </h3>
            <p className="text-lg text-gray-600 mb-8 font-sans">
              Síguenos en nuestras redes sociales y no te pierdas ninguna novedad del mundo agrícola.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                className="bg-[#ffdd02] hover:bg-[#e6c402] text-black font-bold px-8 py-3 rounded-lg transition-all duration-300 font-display"
              >
                <Link href="/contacto">Contáctanos</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-[#D2691E] text-[#D2691E] hover:bg-[#D2691E] hover:text-white transition-all duration-300 font-display font-semibold bg-transparent"
              >
                <a
                  href="https://wa.me/5492612210039?text=¡Hola! Me interesa recibir novedades de Merkat Agri sobre equipos ORSI."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
