import Link from "next/link";
import Head from "next/head";

// getServerSideProps()
// console.log('em modo dev, sempre roda a cada acesso')
// console.log('Rodando a cada acesso que você recebe')

// getStaticProps()
// console.log('em modo dev, sempre roda a cada acesso')
// console.log('roda somente em build time')


export async function getStaticProps() { // atualiza no build
  const FAQ_API_URL =
    "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";

  const faq = await fetch(FAQ_API_URL)
    .then((serverResponse) => {
      return serverResponse.json();
    })
    .then((response) => {
      return response;
    });

  return {
    props: {
      faq,
    },
  };
}

export default function FAQPage({ faq }) {
  return (
    <div>
      <Head>
        <title>FAQ - Alura</title>
      </Head>
      <h1>Alura Cases - Páginas de Perguntas FAQ</h1>
      <Link href="/">Ir para a Home</Link>
      <ul>
        {faq.map(({ answer, question }) => (
          <li key={question}>
            <article>
              <h2>{question}</h2>
              <p>{answer}</p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
