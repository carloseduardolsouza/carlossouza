import type { ReactNode } from 'react'
import avatar from './assets/user.jpg'
import './App.css'

type Social = {
  name: string
  href: string
  icon: ReactNode
}

const socials: Social[] = [
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@CarlosSouzaDev',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M21.6 5.6C21.3 4.4 20.5 4 19.3 4H4.7C3.5 4 2.7 4.4 2.4 5.6A28 28 0 0 0 2 12a28 28 0 0 0 .4 6.4C2.7 19.6 3.5 20 4.7 20h14.6c1.2 0 2-.4 2.3-1.6A28 28 0 0 0 22 12a28 28 0 0 0-.4-6.4Z"
        />
        <path fill="white" d="m10 8 6 4-6 4Z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/carlossouza.dev__/',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="18" cy="6" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/carlos-eduardo-souza-619422252/',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect width="24" height="24" rx="2" fill="currentColor" />
        <path
          fill="white"
          d="M4 9h3v11H4zm1.5-5a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4ZM10 9h3v1.5c1-2 6-2.5 6 2V20h-3v-6c0-2.5-3-2.5-3 0v6h-3Z"
        />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/carloseduardolsouza',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
]

type SparklineProps = {
  id: string
  color: string
  points: string
}

function Sparkline({ id, color, points }: SparklineProps) {
  return (
    <svg
      className="sparkline"
      viewBox="0 0 136 49"
      role="img"
      aria-label="Gráfico ilustrativo de crescimento"
    >
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop stopColor={color} stopOpacity=".08" />
          <stop offset="1" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`M ${points} L 134 48 L 2 48 Z`} fill={`url(#${id})`} />
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="134" cy="7" r="3" fill={color} />
    </svg>
  )
}

type Product = {
  name: string
  category: string
  badge: string
  description: string
  stat: string
  caption: string
  sparkId: string
  sparkColor: string
  sparkPoints: string
  icon: ReactNode
  iconClass?: string
}

const products: Product[] = [
  {
    name: 'CashInBox',
    category: 'App Web',
    badge: 'LIVE',
    description:
      'CRM com ERP integrado ao Mercado Pago e ao Mercado Livre, com disparo automático de cobranças via WhatsApp.',
    stat: '1K',
    caption: 'clientes',
    sparkId: 'red',
    sparkColor: '#ff414b',
    sparkPoints: '2,47 25,42 47,50 70,28 99,18 110,11 134,7',
    icon: <span aria-hidden="true">💰</span>,
  },
  {
    name: 'Juntto',
    category: 'App',
    badge: 'NEW',
    description:
      'O primeiro app onde qualquer pessoa cria e gerencia consórcios entre amigos e família — ou gera renda extra gerenciando consórcios para a comunidade.',
    stat: '31.7K',
    caption: 'usuários',
    sparkId: 'blue',
    sparkColor: '#377dff',
    sparkPoints: '2,47 26,42 51,31 63,28 75,23 87,20 100,14 134,7',
    icon: <span aria-hidden="true">🤝</span>,
    iconClass: 'search',
  },
]

function App() {
  return (
    <div className="layout">
      <aside className="profile" aria-label="Perfil">
        <img className="avatar" src={avatar} alt="Foto de Carlos Eduardo Souza" />
        <h1>Carlos Eduardo Souza</h1>
        <div className="handle">@carlossouza</div>
        <p className="bio">
          Programo desde os 15 anos de idade.
          <br />
          Hoje, desenvolvo apps web e
          <br />
          produtos digitais próprios.
        </p>
        <nav className="socials" aria-label="Redes sociais">
          {socials.map((social) => (
            <a
              key={social.name}
              className="social"
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
              {social.name}
            </a>
          ))}
        </nav>
        <p className="note">
          Projetos, produtos e links que valem seu
          <br />
          tempo.
        </p>
      </aside>

      <main>
        <section aria-labelledby="products-title">
          <h2 className="section-title" id="products-title">
            Meus produtos
          </h2>
          <div className="cards">
            {products.map((product) => (
              <article
                key={product.name}
                className="card product"
              >
                <div className="product-head">
                  <div
                    className={`product-icon${product.iconClass ? ` ${product.iconClass}` : ''}`}
                    aria-hidden="true"
                  >
                    {product.icon}
                  </div>
                  <div>
                    <h3 className="product-name">{product.name}</h3>
                    <span className="category">{product.category}</span>
                  </div>
                  <span className="badge">{product.badge}</span>
                </div>
                <p className="description">{product.description}</p>
                <div className="stats">
                  <div>
                    <span className="number">{product.stat}</span>
                    <span className="caption">{product.caption}</span>
                  </div>
                  <Sparkline
                    id={product.sparkId}
                    color={product.sparkColor}
                    points={product.sparkPoints}
                  />
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App