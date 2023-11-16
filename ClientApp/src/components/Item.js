const Item = ({item, drag, itemImg }) => {
    return (
        <div key={item.id} className="w-[40px] md:w-[60px] lg:w-[80px] text-center ml-3">
            <img id={`item-${item.id}`} src={itemImg.image}
                draggable="true" onDragStart={drag} className="flex items-center text-center cursor-pointer justify-content"
            />
        </div>
    )
}

export default Item;