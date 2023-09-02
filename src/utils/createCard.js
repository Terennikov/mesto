import Card from "../components/Card"

const createCard = (item, selector, openImagePopup) => {
  const card = new Card(item, selector, openImagePopup)
  return card.generate()
}

export default createCard