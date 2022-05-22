import Image from 'next/image'
import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react'

import logoImg from '../../public/assets/signin.svg'
import { ConfirmButton } from '../components/ConfirmButton'
import { DashGoButton } from '../components/DashGoBackButton'
import { Input } from '../components/Input'

import styles from '../styles/SignIn.module.css'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const router = useRouter();

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    router.replace('/dashboard/approved-requests')
  }

  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.logo}>
          <Image src={logoImg} alt="Balão amarelo sorridente" />

          <div className={styles.location}>
            <strong>Belém</strong>
            <span>Pará</span>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <DashGoButton />
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Fazer login</legend>

            <div className={styles.inputBlock}>
              <label htmlFor="email">E-mail</label>
              <Input
                type="email"
                name="email"
                value={email}
                onChangeText={setEmail}
              />
            </div>

            <div className={styles.inputBlock}>
              <label htmlFor="password">Senha</label>
              <Input
                type="password"
                name="password"
                value={password}
                onChangeText={setPassword}
              />
            </div>
          </fieldset>

          <ConfirmButton type='submit'>
            Entrar
          </ConfirmButton>
        </form>
      </div>
    </div>
  )
}