import styles from "../styles/navbar.module.css";
import Image from 'next/image'
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, goerli } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { ConnectButton } from '@rainbow-me/rainbowkit';



const { chains, provider } = configureChains(
    [goerli],
    [
      alchemyProvider({ apiKey: process.env.ALCHEMY_ID ?? '' }),
      publicProvider()
    ]
  );
  
  const { connectors } = getDefaultWallets({
    appName: 'My RainbowKit App',
    chains
  });
  
  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
  })

export default function navbar() {
    return (
        <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider chains={chains}>
                <div className={styles.nav_main}>
                   
                    <div className={styles.navbar_left}>
                        <h2>Tokvi</h2>

                        <ul>
                            <li>
                                <a href="">Proyectos</a>
                            </li>
                            <li>
                                <a href="">Sobre Nosotros</a>
                            </li>
                            
                        </ul>
                    </div>
                    <div className={styles.navbar_right}>
                        <ul>
                            
                            <li className={styles.navbar_shopping_cart}>
                                
                            </li>
                        </ul>
                    </div>

                    <div className={styles.wallet_button}>
                        <ConnectButton />                   
                    </div>
                </div>

            <section className={styles.main_container}>
                <h2>Proyectos</h2>

                
            <section className={styles.filter_buttons}>
                
                    <div className={styles.card_icon}>
                        <Image src="/public/icono-bolsaDinero.png" alt="icono bolsa de dinero" />
                    </div>
                    
                    <div className={styles.card_icon}>
                        <Image src="https://cdn-icons-png.flaticon.com/512/3311/3311693.png" alt="icono reloj" />
                    </div>
                    
                    <div className={styles.card_icon}>
                        <Image src="https://cdn-icons-png.flaticon.com/512/610/610128.png" alt="icono grafico de crecimiento" />
                    </div>
                    <div className={styles.card_icon}>
                        <Image src="https://cdn-icons-png.flaticon.com/512/603/603148.png" alt="icono grafico torta" />
                    </div>
            </section>
            <section className={styles.buttons_text}>
                
                    <div className={styles.card_text}>
                        <p>Valor</p>
                    </div>
                    
                    <div className={styles.card_text}>
                        <p>Tiempo</p>
                    </div>
                    
                    <div className={styles.card_text}>
                        <p>Fase</p>
                    </div>
                    <div className={styles.card_text}>
                        <p>Fracción</p>
                    </div>
            </section>
            
            </section>


            

            </RainbowKitProvider>
        </WagmiConfig>         
    )

}
