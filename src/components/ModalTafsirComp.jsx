import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from "flowbite-react";
import { useState } from "react";

export default function ModalTafsirComp({ suratId, nomorAyat }) {

const [openModal, setOpenModal] = useState(false);
const [tafsir, setTafsir] = useState("");


async function getTafsir() {

  const url = `https://equran.id/api/v2/tafsir/${suratId}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Response status: ${response.status}`);

    const result = await response.json();

    const ayat = result.data.tafsir.find(
      (item) => item.ayat === nomorAyat
    );

    setTafsir(ayat.teks);

  } catch (error) {
    console.error(error.message);
  }
}

function openTafsir() {
  setOpenModal(true);
  getTafsir();
}

return (
<>

<Button
  size="xs"
  className="bg-gray-600 hover:bg-gray-700 text-white"
  onClick={openTafsir}
>
  Tafsir
</Button>

<Modal show={openModal} onClose={() => setOpenModal(false)}>
  
  <ModalHeader>
    Tafsir Ayat {nomorAyat}
  </ModalHeader>

  <ModalBody>
    <p className="text-gray-700 leading-relaxed text-white">
      {tafsir}
    </p>
  </ModalBody>

  <ModalFooter>
    <Button color="gray" onClick={() => setOpenModal(false)}>
      Tutup
    </Button>
  </ModalFooter>

</Modal>

</>
);
}