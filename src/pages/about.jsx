import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpeg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Oscar Troncoso</title>
        <meta
          name="description"
          content="I’m Spencer Sharp. I live in New York City, where I design the future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Mi nombre es Oscar Troncoso. Vivo en Santiago y me encanta programar.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                {/* De pequeño siempre me ha interesado saber el porqué de las cosas
                a mis 10 años tuve mi primer computador donde conocí por primera vez
                lo que es un Sistema Opertivo,  */}
                Soy una persona que le gusta aprender cada cosa nueva que me llama
                la atención, la programación es mi dia a dia, soy autodidacta, me gusta
                entender lo que estoy aprendiendo, comencé estudiando
                informática donde aprendí lo <em>basico</em> para hacer aplicaciones con 
                varios lenguajes de programación.
              </p>
              <p>
                En 2021-2022 después de terminar la carrera de Ing Informatica fuí
                seleccionado para realizar un Bootcamp FullStack Javascript donde
                me fui especializando, utilizando Javascript con Jquery, creando
                API REST con el servidor de Node/ExpressJS y bases de datos relacionales
                Postgres.
              </p>
              <p>
                En 2022 Estudié React con el framework NextJS para el lado del cliente
                haciendo aplicaciones medianamente complejas usando react-query, contextAPI,
                FirebaseAuth para la autenticación y Node/ExpressJS para el lado del servidor
                y MongoDB en base de datos.
              </p>
              <p>
                ...
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              {/* <SocialLink href="#" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="#" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink> */}
              <SocialLink href="https://github.com/OscarLeandro" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/oscartroncoso/" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:oscarleandro1595@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                oscarleandro1595@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
