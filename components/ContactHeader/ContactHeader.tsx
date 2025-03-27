import EmailIcon from '@mui/icons-material/Email'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import {FC} from 'react'
import styles from './style.module.css'

const data = [
    {
        icon: <LocalPhoneIcon/>,
        info: '+375 (33) 377-36-43',
    },
    {
        icon: <EmailIcon/>,
        info: 'fireempire@mail.ru',
    },
]

export const ContactHeader: FC = () => {
    return (
        <section className={styles.contactHeader}>
            <div className="container">
                <ul className={styles.contacts}>
                    {data.map(item => (
                        <li key={item.info}>
                            {item.icon}
                            <span>{item.info}</span>
                        </li>
                    ))}
                </ul>
                <div className={styles.socials}>
                    <span>Мы есть в:</span>
                    <ul></ul>
                </div>
            </div>
        </section>
    )
}
