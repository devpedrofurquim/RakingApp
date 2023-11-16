import Item from './Item';

const ItemCollection = ({ items, drag, imgArr }) => {
    return (
        <div className="grid grid-cols-4 gap-4 md:grid-cols-6 lg:grid-cols-8 mb-[15px] place-content-evenly text-center items-center">
            {
                items.map((item) => (item.ranking === 0)
                    ? <Item item={item} drag={drag} itemImg={imgArr.find(object => object.id === item.id)} />
                : null)
          }
        </div>
    )
}

export default ItemCollection;