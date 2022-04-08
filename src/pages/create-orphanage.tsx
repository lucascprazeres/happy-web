import { FormEvent, useEffect, useMemo, useState } from "react";
import { Sidebar } from "../components/Sidebar";

import styles from '../styles/CreateOrphanage.module.css'

export default function CreateOrphanage() {
  const [name, setName] = useState('')
  const [about, setAbout] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [instructions, setInstructions] = useState('')
  const [openingHours, setOpeningHours] = useState('')
  const [openOnWeekends, setOpenOnWeekends] = useState(true)

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    const data = {
      name,
      about,
      whatsapp,
      instructions,
      openingHours,
      openOnWeekends
    }
    console.log(data)
  }

  return (
    <div className={styles.container}>
      <Sidebar />

      <main>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Dados</legend>

            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <div className={styles.about}>
              <label htmlFor="about">Sobre</label>
              <span>Máximo 300 caracteres</span>
            </div>
            <textarea
              maxLength={300}
              id="about"
              name="about"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            />

            <label htmlFor="whatsapp">Número de Whatsapp</label>
            <input
              type="tel"
              id="whatsapp"
              name="whatsapp"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <label htmlFor="instructions">Instruções</label>
            <textarea maxLength={300} id="instructions" name="instructions" />

            <label htmlFor="opening_hours">Horário das visitações</label>
            <input type="text" id="opening_hours" name="opening_hours" placeholder='"Das 8h às 17h"' />

            <label htmlFor="">Atende fim de semana?</label>
            <div className={styles.openOnWeekends}>
              <label
                htmlFor="doOpenOnWeekends"
                className={openOnWeekends ? styles.doOpenOnWeekendsActive : styles.doOpenOnWeekends}
              >
                Sim
              </label>
              <input type="radio"
                id="doOpenOnWeekends"
                name="open_on_weekends"
                value="true"
                onClick={() => setOpenOnWeekends(true)}
              />
              <label
                htmlFor="dontOpenOnWeekends"
                className={!openOnWeekends ? styles.dontOpenOnWeekendsActive : styles.dontOpenOnWeekends}
              >
                Não
              </label>
              <input
                type="radio"
                id="dontOpenOnWeekends"
                name="open_on_weekends"
                value="false"
                onClick={() => setOpenOnWeekends(false)}
              />
            </div>
          </fieldset>

          <button type="submit">
            Confirmar
          </button>
        </form>
      </main>
    </div>
  )
}