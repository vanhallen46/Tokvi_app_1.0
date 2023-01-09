import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const listUsers = [
      {
        name: "Proyecto vía 12 - 34",
        city: "Medellín",
        age: 23,
        gender: 'm',
        logo: "https://img.freepik.com/vector-gratis/logotipo-excavadora-construccion-edificios_23-2148657768.jpg?w=2000",
        phone: '+5731234567890'
      },
      {
        name: "Proyecto vía 34 - 56",
        city: "Medellín",
        age: 24,
        gender: 'm',
        logo: "https://img.freepik.com/vector-gratis/logotipo-excavadora-construccion-edificios_23-2148657768.jpg?w=2000",
        phone: '+5731234567893'
      },
      {
        name: "Proyecto vía 56 - 78",
        city: "Medellín",
        age: 25,
        gender: 'm',
        logo: "https://img.freepik.com/vector-gratis/logotipo-excavadora-construccion-edificios_23-2148657768.jpg?w=2000",
        phone: '+5731234567892'
      },
      {
        name: "Proyecto vía 78 - 90",
        city: "Medellín",
        age: 22,
        gender: 'f',
        logo: "https://img.freepik.com/vector-gratis/logotipo-excavadora-construccion-edificios_23-2148657768.jpg?w=2000",
        phone: '+5731234567891'
      },
      {
        name: "Proyecto vía 56 - 78",
        city: "Medellín",
        age: 25,
        gender: 'm',
        logo: "https://img.freepik.com/vector-gratis/logotipo-excavadora-construccion-edificios_23-2148657768.jpg?w=2000",
        phone: '+5731234567892'
      },
      {
        name: "Proyecto vía 56 - 78",
        city: "Medellín",
        age: 25,
        gender: 'm',
        logo: "https://img.freepik.com/vector-gratis/logotipo-excavadora-construccion-edificios_23-2148657768.jpg?w=2000",
        phone: '+5731234567892'
      },
    ];

  const listUsersTag = listUsers.map((el, index) => <div key={`user_${index}`} className={styles.card_container}>
    <div className={styles.card_img}>
      <img src={el.logo} />
    </div>

    <b>{el.name}</b><br/>

    <span>{el.city}</span>

    <div className={styles.card_information}>
      <div className={styles.card_key}>
        AÑOS
      </div>
      <div className={styles.card_value}>
        2
      </div>
      <div className={styles.card_key}>
        UNIDADES
      </div>
      <div className={styles.card_value}>
        700
      </div>
      <div className={styles.card_key}>
        AVANCE
      </div>
      <div className={styles.card_value}>
        48%
      </div>
    </div>
    <div className={styles.card_fracción}>Fracción desde $500.000</div>
  </div>)

  return (
        <>
        <Navbar/>
        <div className={styles.list_users}>
        {listUsersTag}
        </div>
        <Head>
          <title>Tokvi App - Tokenización</title>
          <meta name="description" content="" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
        <div className={styles.description}>
            {/* <p>
              Tokvi - Tokenización Inmobiliaria&nbsp;
            </p> */}
            {/* <div>
              <a
                href=" "
                target="_blank"
                rel="noopener noreferrer"
              >
                By{' Blockchain eX '}
                
              </a>
              <br />
              
            </div> */}
        </div>

        <div className={styles.center}>
          
          
        </div>

        <div className={styles.grid}>
          {/* <a
            href=" "
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
            >
              <h2 className={inter.className}>
                Marketplace <span>-&gt;</span>
              </h2>
              <p className={inter.className}>
                Encuentra tu nueva Vivienda!
              </p>
          </a>

          <a
            href=""
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Aprende con nosotros <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Que es Tokenización?
            </p>
          </a> */}
            
          <footer className={styles.footer_nav}>

            <section className={styles.filter_buttons}> 
                    <div className={styles.card_icon}>
                        <img src="https://img.icons8.com/emoji/512/heart-suit.png" alt="icono corazón" />
                    </div>
                    
                    <div className={styles.card_icon}>
                        <img src="https://img.icons8.com/office/512/lightning-bolt.png" alt="icono rayo" />
                    </div>
                    
                    <div className={styles.card_icon}>
                        <img src="https://img.icons8.com/emoji/512/house-emoji.png" alt="icono casa" />
                        <p></p>
                    </div>
                    <div className={styles.card_icon}>
                        <img src="https://img.icons8.com/doodle/512/shopping-bag.png" alt="icono bolsa" />
                    </div>
                    <div className={styles.card_icon}>
                        <img src="https://img.icons8.com/ios-glyphs/512/user.png" alt="icono usuario" />
                    </div>
            </section>
          </footer>

          
        </div>
      </main>
      </> 
  )
}
