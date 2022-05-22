import Image from "next/image";
import dynamic from "next/dynamic";
import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { LeafletMouseEvent } from "leaflet";
import { Sidebar } from "../components/Sidebar";
import { OpenOnWeenkends } from '../components/OpenOnWeekends'

import styles from '../styles/CreateOrphanage.module.css'
import { FiPlus } from "react-icons/fi";
import { Input } from "../components/Input";
import { ConfirmButton } from "../components/ConfirmButton";

const MapInputWithNoSSR = dynamic(() => import('../components/MapInput'), {
  ssr: false,
})

export default function CreateOrphanage() {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 })
  const [name, setName] = useState('')
  const [about, setAbout] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [instructions, setInstructions] = useState('')
  const [openingHours, setOpeningHours] = useState('')
  const [openOnWeekends, setOpenOnWeekends] = useState(true)
  const [images, setImages] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([])

  const handleMapClick = useCallback((event: LeafletMouseEvent) => {
    const { lat, lng } = event.latlng;
    setPosition({ latitude: lat, longitude: lng });
  }, []);

  const handleSelectedImage = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (event.target.files) {
        const selectedImages = Array.from(event.target.files);
        setImages(selectedImages);

        setPreviews(
          selectedImages.map(image => {
            return URL.createObjectURL(image);
          }),
        );
      }
    },
    [],
  );

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    const data = {
      position,
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
        <form onSubmit={handleSubmit} className={styles.form}>
          <fieldset>
            <legend>Dados</legend>

            <MapInputWithNoSSR handleMapClick={handleMapClick} />

            <div className={styles.inputBlock}>
              <label htmlFor="name">Nome</label>
              <Input
                name="name"
                value={name}
                onChangeText={setName}
              />
            </div>

            <div className={styles.inputBlock}>
              <label htmlFor="about">
                Sobre <span>Máximo 300 caracteres</span>
              </label>
              <textarea
                maxLength={300}
                id="about"
                name="about"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              />
            </div>

            <div className={styles.inputBlock}>
              <label htmlFor="whatsapp">Número de Whatsapp</label>
              <Input
                value={whatsapp}
                type="tel"
                name="whatsapp"
                onChangeText={setWhatsapp}
              />
            </div>

            <div className={styles.inputBlock}>
              <label htmlFor="images">Fotos</label>
              <div className={styles.uploadedImages}>
                {previews.map((image, index) => (
                  <Image
                    src={image}
                    key={image}
                    height={96}
                    width="100%"
                    alt="Preview"
                  />
                ))}
                <label className={styles.newImage} htmlFor="image[]">
                  <FiPlus size={24} color="#15b6d6" />
                </label>
                <input
                  type="file"
                  id="image[]"
                  multiple
                  onChange={handleSelectedImage}
                />
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div className={styles.inputBlock}>
              <label htmlFor="instructions">Instruções</label>
              <textarea
                maxLength={300}
                id="instructions"
                name="instructions"
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
              />
            </div>

            <div className={styles.inputBlock}>
              <label htmlFor="opening_hours">Horário das visitações</label>
              <Input
                name="opening_hours"
                value={openingHours}
                onChangeText={setOpeningHours}
              />
            </div>

            <div className={styles.inputBlock}>
              <label>Atende fim de semana?</label>
              <OpenOnWeenkends
                open={openOnWeekends}
                handleSelect={setOpenOnWeekends}
              />
            </div>
          </fieldset>

          <ConfirmButton type="submit">confirmar</ConfirmButton>
        </form>
      </main>
    </div>
  )
}